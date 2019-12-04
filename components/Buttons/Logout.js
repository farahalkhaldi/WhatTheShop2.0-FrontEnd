import React from "react";

import { observer } from "mobx-react";
import { Button, Text } from "native-base";

//stores
import AuthStore from "../../stores/authStore";

const Logout = ({ navigation }) => {
  return (
    <Button danger onPress={() => AuthStore.logout(navigation)}>
      <Text>Logout</Text>
    </Button>
  );
};

export default Logout;

// still not done, the button is showing, just not functioning,
// you can press the button without any affect.
