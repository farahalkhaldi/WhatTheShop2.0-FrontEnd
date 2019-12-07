import React from "react";

import { observer } from "mobx-react";
import { Button, Text, Header, Content, Container } from "native-base";
import { withNavigation } from "react-navigation";

//stores
import AuthStore from "../../stores/authStore";
const Logout = ({ navigation }) => {
  return (
    <Button danger onPress={() => AuthStore.logout(navigation)}>
      <Text>Logout</Text>
    </Button>
  );
};

export default withNavigation(Logout);
