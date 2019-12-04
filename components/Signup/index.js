import React, { Component } from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";

import { Text } from "native-base";
import styles from "./styles";

import authStore from "../../stores/authStore";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: ""
  };

  componentDidMount() {
    if (authStore.user) this.props.navigation.navigate("LolScreen");
  }

  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signup</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="first name"
          onChangeText={first_name => this.setState({ first_name })}
          placeholderTextColor="#A6AEC1"
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="last name"
          onChangeText={last_name => this.setState({ last_name })}
          placeholderTextColor="#A6AEC1"
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
          placeholderTextColor="#A6AEC1"
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => authStore.signup(this.state, this.props.navigation)}
        >
          <Text style={styles.authButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          Click here to log in!
        </Text>
      </View>
    );
  }
}

Signup.navigationOptions = {
  title: "Signup"
};

export default Signup;
