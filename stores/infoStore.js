import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";

class InfoStore {
  loading = true;

  swalef = [];

  fetchAllSwalefs = async () => {
    try {
      const res = await instance.get("/api/info/");
      const swalef = res.data;
      this.swalef = swalef;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(InfoStore, {
  swalef: observable,
  loading: observable
});

const infoStore = new InfoStore();
infoStore.fetchAllSwalefs();
export default infoStore;
