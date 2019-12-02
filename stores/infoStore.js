import { decorate, observable, computed } from "mobx";
import axios from "axios";
import hosha from "../assets/images/hosha.jpg";
import na9b from "../assets/images/na9b.jpg";
import modery from "../assets/images/modery.jpg";

class InfoStore {
  loading = true;

  swalef = [
    {
      id: 1,
      name: "هوشة",
      description: "انا و صاحبي تهاوشنا في البر ",
      type: " ديوانية #قهوه #يمعةـرفيجات#",
      img: hosha
    },
    {
      id: 2,
      name: "نصب علي!!",
      description: "",
      type: " ديوانية #قهوه #يمعةـرفيجات#",
      img: na9b
    },

    {
      id: 3,
      name: "مديري يتحفرلي!!!",
      description: "",
      type: " ديوانية #دوام #قهوه #يمعةـرفيجات#",
      img: modery
    }
  ];

  fetchAllSwalefs = async () => {
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
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
// infoStore.fetchAllSwalefs();
export default infoStore;
