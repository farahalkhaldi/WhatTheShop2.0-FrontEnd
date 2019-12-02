import React from "react";
import { withNavigation } from "react-navigation";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

const SalfaItem = ({ salfa, navigation }) => {
  const handlePress = () =>
    navigation.navigate("DetailScreen", {
      salfaID: salfa.id,
      salfaName: salfa.name
    });

  return (
    <ImageBackground source={salfa.img} style={styles.background}>
      <View style={styles.overlay} />
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Text style={styles.text}>{salfa.name + "\n"} </Text>
              <Text style={styles.text2}>{salfa.type}</Text>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

export default withNavigation(SalfaItem);
