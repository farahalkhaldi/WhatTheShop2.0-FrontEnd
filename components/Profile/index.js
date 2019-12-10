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
  List,
  Content
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
    if (orderStore.history.carts.length > 1) {
      return orderStore.history.carts.map(cart => (
        <>
          {cart.salfa.map(salfa => (
            <List>
              <Card>
                <Text style={styles.text}>
                  اسم سالفتك: {salfa.name}
                  {"\n\n"}
                  {salfa.description}
                </Text>
              </Card>
            </List>
          ))}
        </>
      ));
    } else {
      return <Text style={styles.text}>ما عندك سالفة, بوووووو!! </Text>;
    }
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
          <List>{this.checkHistory()}</List>
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
