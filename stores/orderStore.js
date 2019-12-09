import { decorate, observable } from "mobx";
import { instance } from "./instance";

class OrderStore {
  loading = true;

  history = [];

  fetchHistory = async () => {
    try {
      const res = await instance.get("/api/profile/");
      this.history = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(OrderStore, {
  profile: observable,
  loading: observable
});

const orderStore = new OrderStore();
export default orderStore;
