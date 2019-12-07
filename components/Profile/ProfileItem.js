import React from "react";
import { withNavigation } from "react-navigation";
import { ImageBackgournd, View } from "react-native";


// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";


const UserProfile = ({ profile, navigation }) => {
    const handlePress = () =>
      navigation.navigate("DetailScreen", {
        UserID: profile.id,
        first_name: profile.first_name,
        last_name:profile.last_name
      });
      return (
          <View style={styles.overlay} />
          <ListItem button onPress={handlePress} style={styles.listitem}>
            <Card style={styles.transparent}>
              <CardItem style={styles.transparent}>
                <Left>
                  <Text style={styles.text}>{profile.first_name + " " + profile.last_name} </Text>
                </Left>
              </CardItem>
            </Card>
          </ListItem>
      );
    };
    
    export default withNavigation(UserProfile);
    