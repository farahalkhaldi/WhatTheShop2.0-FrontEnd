import { decorate, observable } from "mobx";
import { instance } from "./instance";

class CartStore {
  items = [
    {
      id: 1,
      name: "هوشة",
      type: "مادري#",
      owner: {
        first_name: "",
        last_name: "",
        username: "admin"
      },
      description: "bla bla bla bla",
      price: "0.100",
      img: "http://0.0.0.0:80/media/hosha_2RW2dmI.jpg"
    },
    {
      id: 2,
      name: "!!سالفة الكتاكيت",
      type: "مادري#",
      owner: {
        first_name: "",
        last_name: "",
        username: "admin"
      },
      description: "🐥👦🏻🔪",
      price: "0.050",
      img:
        "https://www.thaqfya.com/wp-content/uploads/2018/03/%D8%AA%D9%81%D8%B3%D9%8A%D8%B1-%D8%B1%D8%A4%D9%8A%D8%A9-%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D9%83%D9%8A%D8%AA-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D9%85-%D9%88%D9%85%D8%B9%D9%86%D8%A7%D9%87.png"
    }
  ];
  addItemToCart = async salfa => {
    try {
      console.log("Salfa", salfa);
      const existingItem = this.items.find(obj => obj.id === salfa.id);
      if (!existingItem) {
        const res = await instance.post("/api/cart/add/", salfa);
        const item = res.data;
        this.items.push(item);
        // console.log(this.items);
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
