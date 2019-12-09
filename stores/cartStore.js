import { decorate, observable } from "mobx";
import { instance } from "./instance";

class CartStore {
  items = [];
  addItemToCart = async salfa => {
    try {
      const existingItem = this.items.find(obj => obj.id === salfa.id);
      if (!existingItem) {
        const res = await instance.post("/api/cart/add/", { salfa: salfa.id });
        this.items.push(salfa);
      }
    } catch (err) {
      console.error(err);
    }
  };

  removeItemFromCart = item => {
    this.items.remove(item);
  };

  checkoutCart = async () => {
    try {
      const res = await instance.post("/api/checkout/");
      this.items.length = 0;
    } catch (err) {
      console.error(err);
    }
    alert("Thank you for using our app :D !");
  };
}

decorate(CartStore, {
  items: observable
});

const cartStore = new CartStore();
export default cartStore;
