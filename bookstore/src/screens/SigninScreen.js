import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Signin({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.signinButton}>
          <Text style={styles.signinText}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signuoButton}>
          <Text>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputs}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity style={styles.continueButton}>
            <Text
              style={styles.continueButtonText}
              onPress={() => navigation.navigate("Nomenclature")}
            >
              CONTINUE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotPassText}>FORGOT PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  signinButton: {
    marginTop: 55,
    marginRight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#6200EE",
    borderRadius: 30,
  },

  signinText: {
    color: "#FFF",
    fontWeight: "bold",
  },

  signuoButton: {
    marginTop: 55,
    padding: 10,
  },

  inputs: {
    marginTop: 40,
  },

  input: {
    padding: 10,
    margin: 15,
    borderBottomWidth: 1,
  },

  continueButton: {
    backgroundColor: "#6200EE",
    padding: 20,
    margin: 10,
    borderRadius: 30,
  },

  continueButtonText: {
    color: "#FFF",
    textAlign: "center",
  },

  forgotPass: {
    marginTop: 10,
  },

  forgotPassText: {
    textAlign: "center",
    color: "#6200EE",
  },
});

export default Signin;
