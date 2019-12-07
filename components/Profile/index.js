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
      <>
        <Text style={styles.text}>
          testtttt {profileStore.profile.first_name}
        </Text>
        <Text style={styles.text}>{profileStore.profile.last_name}</Text>
        <Text style={styles.text}>{profileStore.profile.username}</Text>
      </>
    );
  }
}

Profile.navigationOptions = {
  title: "Profile",
  headerLeft: <Logout />
};

export default withNavigation(observer(Profile));
