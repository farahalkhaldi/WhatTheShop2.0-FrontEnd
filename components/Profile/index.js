import React, { Component } from "react";

import { observer } from "mobx-react";

// NativeBase Components
import { Text, Container, Card } from "native-base";

// Style
import styles from "./styles";

// Store
import profileStore from "../../stores/profileStore";

//Component
import Logout from "../Buttons/Logout";
import { withNavigation } from "react-navigation";
import authStore from "../../stores/authStore";

class Profile extends Component {
  async componentDidMount() {
    if (authStore.user) {
      await profileStore.fetchProfile();
    }
  }
  render() {
    return (
      <Card>
        <Text style={styles.text}>
          First name: {profileStore.profile.first_name}
        </Text>
        <Text style={styles.text}>
          Last name: {profileStore.profile.last_name}
        </Text>
        <Text style={styles.text}>Email: {profileStore.profile.email}</Text>
      </Card>
    );
  }
}

Profile.navigationOptions = {
  title: "Profile",
  headerLeft: <Logout />
};

export default withNavigation(observer(Profile));
