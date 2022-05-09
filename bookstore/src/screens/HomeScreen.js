import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../../assets/BookStore.jpg")}
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.titleStyle}>Welcome to Book Store</Text>
      <Text style={styles.subTitle}>Let's get started!</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text style={styles.signInButton}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signUpButton}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: windowWidth,
  },

  titleStyle: {
    textAlign: "center",
    fontSize: 26,
    marginTop: 25,
    color: "#6200EE",
    fontWeight: "bold",
  },

  subTitle: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 30,
    color: "#6200EE",
  },

  buttons: {
    marginTop: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  signInButton: {
    width: 100,
    textAlign: "center",
    padding: 10,
    backgroundColor: "#9599B3",
    color: "#eee",
  },

  signUpButton: {
    width: 100,
    textAlign: "center",
    padding: 10,
    backgroundColor: "#6200EE",
    color: "#eee",
  },
});

export default HomeScreen;
