import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgb(245, 209, 7)",
    marginTop: 30
  },
  authButtonText: {
    color: "#FCFDFF",
    fontWeight: "bold",
    fontSize: 18
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(227, 226, 222)",
    paddingRight: 60,
    paddingLeft: 60
  },
  authOther: {
    color: "rgb(20,90,100)",
    marginTop: 15
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "rgb(38, 37, 32)",
    borderBottomColor: "rgb(20,90,100)",
    borderBottomWidth: 1
  },
  authTitle: {
    color: "rgb(38, 37, 32)",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "rgb(20,90,100)"
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10
  },
  profiletext: {
    textAlign: "left",
    color: "rgb(38, 37, 32)",
    fontSize: 16
  }
});

export default styles;
