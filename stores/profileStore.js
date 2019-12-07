import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";

class ProfileStore {
  loading = true;

  profile = [];

  fetchProfile = async () => {
    try {
      const res = await instance.get("/api/profile/");
      this.profile = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(ProfileStore, {
  profile: observable,
  loading: observable
});

const profileStore = new ProfileStore();
export default profileStore;
