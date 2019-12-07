import { createAppContainer } from "react-navigation";
import BottomTab from "./BottomTab";
import AuthNav from "./AuthNav";

const AppContainer = createAppContainer(AuthNav);

export default AppContainer;
