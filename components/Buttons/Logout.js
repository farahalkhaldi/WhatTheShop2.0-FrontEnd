import React from "react";

import { Button, Text } from "native-base";
import { withNavigation } from "react-navigation";

//stores
import AuthStore from "../../stores/authStore";
const Logout = ({ navigation }) => {
  return (
    <Button rounded bordered Light onPress={() => AuthStore.logout(navigation)}>
      <Text>Logout</Text>
    </Button>
  );
};

export default withNavigation(Logout);
