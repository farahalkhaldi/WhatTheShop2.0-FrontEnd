import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import DetailPage from "../components/DetailPage";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    DetailScreen: DetailPage
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default ProfileStack;
