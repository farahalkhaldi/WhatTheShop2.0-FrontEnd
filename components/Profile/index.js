// import React from "react";

// import { observer } from "mobx-react";
// import { withNavigation } from "react-navigation";

// // NativeBase Components
// import { Card } from "native-base";

// // Store
// import ProfileStore from "../../stores/profileStore";
// import authStore from "../../stores/authStore";

// //Component
// import Logout from "../Buttons/Logout";

// const Profile = () => {
//   return <Card></Card>;
// };
// Profile.navigationOptions = {
//   title: "Profile",
//   headerLeft: <Logout />

// };
// export default observer(Profile);

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
import ProfileStore from "../../stores/profileStore";

//Component
import Logout from "../Buttons/Logout";

class Profile extends Component {
  render() {
    const userID = this.props.navigation.getParam("userID");
    const theProfile = ProfileStore.profile.find(
      theProfile => userID === theProfile.id
    );

    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.text}>{theProfile.first_name}</Text>
                <Text style={styles.text}>{theProfile.last_name}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

Profile.navigationOptions = {
  title: "Profile",
  headerLeft: <Logout />
};

export default observer(Profile);
