import React, { Component } from "react";

import { observer } from "mobx-react";

// NativeBase Components
import { Text, Body, Container, Card, CardItem, Spinner } from "native-base";

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
  render() {
    if (profileStore.loading || orderStore.loading) return <Spinner />;
    let leHistory = orderStore.history.carts[0].salfa[0];

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
          <>
            <Card>
              <CardItem>
                <Text style={styles.text}>
                  le order history: {leHistory.name} {leHistory.type}{" "}
                  {leHistory.price} {"\n"} {leHistory.description}
                </Text>
              </CardItem>
            </Card>
          </>
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
