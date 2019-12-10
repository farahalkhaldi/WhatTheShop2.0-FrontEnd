import { decorate, observable } from "mobx";
import { instance } from "./instance";

class OrderStore {
  loading = true;

  history = [];

  fetchHistory = async () => {
    try {
      const res = await instance.get("/api/profile/");
      this.history = res.data;
      //   console.log("hehehehehehelooool", this.history.carts);
      //   console.log("kaaaaaaaaaaaaaak", this.history.carts[0]);
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(OrderStore, {
  history: observable,
  loading: observable
});

const orderStore = new OrderStore();
export default orderStore;
