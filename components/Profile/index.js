import React, { Component } from "react";

import { observer } from "mobx-react";

// NativeBase Components
import {
  Text,
  Body,
  Container,
  Card,
  CardItem,
  Spinner,
  ListItem,
  List
} from "native-base";

// Style
import styles from "./styles";

// Store
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
import orderStore from "../../stores/orderStore";

//Component
import Logout from "../Buttons/Logout";
import CartButton from "../Buttons/CartButton";
import { withNavigation } from "react-navigation";

class Profile extends Component {
  async componentDidMount() {
    if (authStore.user) {
      await profileStore.fetchProfile();
      await orderStore.fetchHistory();
    }
  }

  checkHistory() {
    const leHistory = orderStore.history.carts.map(cart => (
      <>
        <Text>{cart.name}</Text>
        <List>
          {cart.salfa.map(salfa => (
            <ListItem>
              <Text style={styles.text}>
                le order history: {salfa.name}
                {salfa.type} {salfa.price} {"\n"} {salfa.description}{" "}
              </Text>
            </ListItem>
          ))}
        </List>
      </>
    ));
    return leHistory;

    // if (leHistory.salfa !== 0) {
    //   return leHistory
    // } else {
    //   return <Text style={styles.text}>ما عندك سالفة, بوووووو!! </Text>;
    // }
  }
  render() {
    if (profileStore.loading || orderStore.loading) return <Spinner />;

    return (
      <Container>
        <Card>
          <CardItem>
            <Body>
              <Text style={styles.text}>
                Welcome {profileStore.profile.first_name}{" "}
                {profileStore.profile.last_name} to your Swalif app profile.
              </Text>

              <Text style={styles.text}>
                Username: {profileStore.profile.username}
              </Text>
              <Text style={styles.text}>
                Email: {profileStore.profile.email}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>{this.checkHistory()}</CardItem>
        </Card>
      </Container>
    );
  }
}
Profile.navigationOptions = {
  title: "Profile",
  headerLeft: <Logout />,
  headerRight: <CartButton />
};

export default withNavigation(observer(Profile));
