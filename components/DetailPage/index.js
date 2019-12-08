import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Left,
  Right,
  Text,
  Header
} from "native-base";

// Style
import styles from "./styles";

//List
import infoStore from "../../stores/infoStore";
import CartButton from "../Buttons/CartButton";

//import Emoji from "./Emoji";

//Store
import cartStore from "../../stores/cartStore";

class SalfaDetail extends Component {
  render() {
    const salfaID = this.props.navigation.getParam("salfaID");
    console.log("salfaID", salfaID);
    const thesalfa = infoStore.swalef.find(thesalfa => salfaID === thesalfa.id);
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.text}>{thesalfa.description}</Text>
                <Button transparent onPress={() => alert("لازم تشتريني !!")}>
                  <Text>more......</Text>
                </Button>
              </Body>
            </CardItem>

            <CardItem>
              <Right>
                <Text style={styles.price}>Price: {thesalfa.price} KWD</Text>
              </Right>
              <Left>
                <Button
                  style={styles.addButton}
                  onPress={() => {
                    cartStore.addItemToCart(salfaID);
                  }}
                >
                  <Text>buy</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

SalfaDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("salfaName"),
  headerRight: <CartButton />
});

export default observer(SalfaDetail);
