import React from "react";

// NativeBase Components
import {
  Text,
  Left,
  Right,
  Button,
  Icon,
  Card,
  CardItem,
  Thumbnail
} from "native-base";

// Style
import styles from "./styles";

//Store
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <Card>
      <CardItem>
        <Thumbnail square source={{ uri: item.img }} />
        <Left>
          <Text style={styles.text}>{item.name}</Text>
        </Left>

        <Text style={styles.price2}>{item.price} KWD</Text>

        <Right>
          <Button
            transparent
            onPress={() => cartStore.removeItemFromCart(item)}
          >
            <Icon style={styles.removeItem} name="remove" type="FontAwesome" />
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
};

export default CartItem;
