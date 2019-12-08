import { createStackNavigator } from "react-navigation-stack";

// Components
import ListPage from "../components/ListPage";
import Login from "../components/Login";
import Signup from "../components/Signup";

const LolStack = createStackNavigator(
  {
    LolScreen: ListPage
  },
  {
    defaultNavigationOptions: {
      title: "WhatTheShop",
      Login: Login,
      Signup: Signup
    }
  }
);

export default LolStack;
