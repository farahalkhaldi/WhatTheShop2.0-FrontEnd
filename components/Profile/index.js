import React from "react";

import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Card } from "native-base";

import authStore from "../../stores/authStore";

import Logout from "../Buttons/Logout";

const Profile = () => {
  return (
    <Card>
      {/* //     <CardItem>
    //       <Text>blalala</Text>
    //     </CardItem> */}

      <Logout />
    </Card>
  );
};
Profile.navigationOptions = {
  title: "Profile"
};
export default observer(Profile);
