import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const storetoken = async (value) => {
    await AsyncStorage.setItem("token", value);
  };

  const loginUser = async () => {
    const URL = "https://csse-hosting-app.herokuapp.com/api/user/userLogin";
    await axios
      .post(URL, { email: email, password: pwd })
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          AsyncStorage.clear();
          storetoken(res.data.token);
          navigation.navigate("Dashboard", {
            userId: res.data.userId,
            role: res.data.role,
          });
        }
      })
      .catch((error) => {
        Alert.alert("Login Unsuccessful", [{ text: "Check Again" }], {
          cancelable: false,
        });
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://img.freepik.com/free-vector/welcome-back-typography-design-with-passenger-waiting-luggag_1308-88788.jpg?w=1800&t=st=1667376569~exp=1667377169~hmac=8f8c20ffe25865a49eeba5472c81ddc94f326da67ba828ae74f54e55c97f20fe",
        }}
      />
      <Image
        style={styles.logo1}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667311443/Screenshot_2022-11-01_at_19.32.42-removebg-preview_lbhdzz.png",
        }}
      />
      <TextInput
        placeholder="E-mail Address"
        style={styles.textInput2}
        onChange={(e) => setEmail(e.nativeEvent.text)}
        value={email}
      ></TextInput>

      <TextInput
        secureTextEntry
        placeholder="Password"
        style={styles.textInput}
        onChange={(e) => setPwd(e.nativeEvent.text)}
        value={pwd}
      ></TextInput>

      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark]}
        onPress={() => {
          loginUser();
        }}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  new: {
    color: "#121212",
    fontSize: 16,
    marginTop: 38,
    marginLeft: 107,
  },
  loginText: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
  },

  textInput2: {
    height: 55,
    width: 334,
    backgroundColor: "#DBE9FA",
    textAlign: "center",
    fontSize: 18,
    marginTop: 90,
    marginLeft: 33,
  },
  textInput: {
    color: "#121212",
    height: 55,
    width: 334,
    backgroundColor: "#DBE9FA",
    textAlign: "center",
    borderColor: "#000000",
    fontSize: 18,
    marginTop: 22,
    marginLeft: 33,
  },

  text: {
    color: "#121212",
    height: 52,
    width: 228,
    textAlign: "center",
    fontSize: 40,
    marginTop: -311,
    marginLeft: 83,
  },

  logo: {
    width: 500,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -20,
    flexDirection: "row",
  },
  logo1: {
    width: 300,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60,
    marginRight: 60,
    marginTop: 30,
    flexDirection: "row",
  },
  signUp: {
    color: "rgba(54,144,226,1)",
    marginLeft: 165,
    fontSize: 15,
  },

  ButtonDark: {
    height: 50,
    width: 160,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 30,
    marginLeft: 120,
  },
  containerx: {
    marginTop: -20,
    backgroundColor: "#79BAEC",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
    minWidth: 88,
    paddingLeft: 26,
    paddingRight: 16,
  },
});
