import React, { Component } from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";

import { Text } from "native-base";
import styles from "./styles";

import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    if (authStore.user) this.props.navigation.navigate("LolScreen");
  }
  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
          placeholderTextColor="#A6AEC1"
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => {
            authStore.login(this.state);
            this.props.navigation.navigate("LolScreen");
          }}
        >
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          Click here to register!
        </Text>
      </View>
    );
  }
}

Login.navigationOptions = {
  title: "بياع حجي "
};

export default Login;
