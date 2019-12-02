import { createSwitchNavigator } from "react-navigation";

// Components
import Login from "../components/Login/index";
import Signup from "../components/Signup/index";

// Navigators
import LolStack from "./LolStack";
import BottomTab from "./BottomTab"

const AuthNav = createSwitchNavigator({
  Login: Login,
  Signup: Signup,
  LolStack: BottomTab
});

export default AuthNav;
