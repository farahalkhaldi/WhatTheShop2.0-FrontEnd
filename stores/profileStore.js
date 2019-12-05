import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";

class ProfileStore {
  loading = true;

  profile = [];

  fetchProfile = async () => {
    try {
      const res = await instance.get("/api/profile/");
      const profile = res.data;
      this.profile = profile;
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
profileStore.fetchProfile();
export default ProfileStore;
