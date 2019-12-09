import { decorate, observable } from "mobx";
import { instance } from "./instance";

class CartStore {
  items = [];
  cartSalfas = [];
  addItemToCart = async salfa => {
    try {
      const existingItem = this.items.find(obj => obj.id === salfa.id);
      if (!existingItem) {
        const res = await instance.post("/api/cart/add/", { salfa: salfa.id });
        const response = res.data;
        // console.log(response);
        this.items.push(salfa);
        this.cartSalfas.push(response);
      }
    } catch (err) {
      console.error(err);
    }
  };
  removeItemFromCart = async item => {
    try {
      //   console.log("item from delete from cart", item);
      const cartSalfa = this.cartSalfas.find(obj => obj.salfa === item.id);
      const res = await instance.delete(`/api/delete/added/${cartSalfa.id}/`);
      this.items.remove(item);
    } catch (err) {
      console.error(err);
    }
  };
  checkoutCart = async () => {
    try {
      const res = await instance.post("/api/checkout/");
      this.items.length = 0;
    } catch (err) {
      console.error(err);
    }
    alert("شكراً لإستخدامكم برنامجنا، يالله روح سولف !!");
  };
}

decorate(CartStore, {
  items: observable
});

const cartStore = new CartStore();
export default cartStore;
