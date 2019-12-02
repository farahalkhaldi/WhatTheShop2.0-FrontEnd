import { decorate, observable } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://192.168.100.154:80"
});

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;

      // Set current user
      this.user = jwt_decode(token);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
    }
    console.log(this.user);
  };

  login = async userData => {
    try {
      const res = await instance.post("/api/login/", userData);
      const user = res.data;
      await this.setUser(user.access);
    } catch (err) {
      console.error(err);
      alert("Invalid login credentials.");
    }
  };

  signup = async userData => {
    try {
      const res = await instance.post("/api/register/", userData);
      const user = res.data;
      await this.setUser(user.access);
    } catch (err) {
      console.error(err);
    }
  };

  logout = async navigation => {
    await this.setUser();
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
