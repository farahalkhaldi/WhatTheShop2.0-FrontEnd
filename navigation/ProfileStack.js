import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import DetailPage from "../components/DetailPage";
import CartPage from "../components/CartPage";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    DetailScreen: DetailPage,
    CartScreen: CartPage
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default ProfileStack;
