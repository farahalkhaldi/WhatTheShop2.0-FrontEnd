import { createStackNavigator } from "react-navigation-stack";

// Components
import ListPage from "../components/ListPage";
import Login from "../components/Login";
import Signup from "../components/Signup";
import DetailPage from "../components/DetailPage";
import CartPage from "../components/CartPage";

const LolStack = createStackNavigator(
  {
    LolScreen: ListPage,
    DetailScreen: DetailPage,
    CartScreen: CartPage
  },
  {
    defaultNavigationOptions: {
      title: "WhatTheShop",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#e6b800"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      Login: Login,
      Signup: Signup
    }
  }
);

export default LolStack;
