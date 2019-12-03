import React from "react";
import { withNavigation } from "react-navigation";
import { Icon, Text } from "native-base";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";

const CartButton = ({ navigation }) => {
  return (
    <Text>
      {cartStore.counter}
      <Icon
        name="cart"
        type="EvilIcons"
        onPress={() => navigation.navigate("CartScreen")}
      />
    </Text>
  );
};

export default withNavigation(observer(CartButton));
