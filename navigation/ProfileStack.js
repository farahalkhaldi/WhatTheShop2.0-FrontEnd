import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "WhatTheShop",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#e6b800"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default ProfileStack;
