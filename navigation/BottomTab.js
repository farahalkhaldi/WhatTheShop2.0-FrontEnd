import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Navigators
import LolStack from "./LolStack";
import ProfileStack from "./ProfileStack";
import Login from "../components/Login";

const BottomTab = createBottomTabNavigator(
  {
    ProfileTab: ProfileStack,
    LolTab: LolStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "LolTab") {
          iconName = "chat";
          iconType = "MaterialIcons";
        } else if (routeName === "ProfileTab") {
          iconName = "person";
          iconType = "MaterialIcons";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "white",
      inactiveTintColor: "#8c8a82",
      style: {
        backgroundColor: "#e6b800"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default BottomTab;
