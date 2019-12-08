import React, { Component } from "react";
import { observer } from "mobx-react";
// NativeBase Components
import { Content, Text, List, Button, Container, Card } from "native-base";
import styles from "./styles";

// Component
import CartItem from "./CartItem";

//store
import cartStore from "../../stores/cartStore";

class CartPage extends Component {
  render() {
    const cartItems = cartStore.items.map(item => (
      <CartItem item={item} key={item.id} />
    ));
    let Total = 0;
    let TotalPrice = cartStore.items.forEach(item => (Total += +item.price));

    return (
      <Container>
        <Content>
          <List>{cartItems}</List>
        </Content>
        <Text style={styles.price}>Total Price = {Total.toFixed(3)} KWD</Text>
        <Button
          style={styles.checkout}
          block
          onPress={() => {
            cartStore.checkoutCart();
          }}
        >
          <Text>Checkout</Text>
        </Button>
      </Container>
    );
  }
}

CartPage.navigationOptions = {
  title: "Cart"
};

export default observer(CartPage);
