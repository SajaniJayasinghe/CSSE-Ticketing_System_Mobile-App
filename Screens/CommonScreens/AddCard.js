import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import axios from "axios";
import React, { useState } from "react";

export default function AddCard({ navigation }) {
  const [name, setName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [amount, setAmount] = useState("");

  const config = {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
      "content-type": "application/json",
    },
  };

  const addCard = () => {
    const URL = `https://hostingbackend.herokuapp.com/api/card/addCard`;

    const payload = {
      name: name,
      cardNo: cardNo,
      cvv: cvv,
      expiryDate: expiryDate,
      amount: amount,
    };

    axios
      .post(URL, payload, config)
      .then((res) => {
        Alert.alert("Done", "Card Added Successfull");
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Error",
          "Card Added Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.loginlogo}
        source={{
          uri: "https://media.istockphoto.com/vectors/bus-stop-vector-id484367010?k=20&m=484367010&s=170667a&w=0&h=rxrY2QWeR7IxPEbm7Zit8K4dhvMBu6wLi0d7Q94OE8U=",
        }}
      />
      <Image
        style={styles.logo1}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667311443/Screenshot_2022-11-01_at_19.32.42-removebg-preview_lbhdzz.png",
        }}
      />
      <Text
        style={{
          fontWeight: "800",
          opacity: 0.6,
          textAlign: "center",
          fontSize: 26,
          marginLeft: -10,
        }}
      >
        Add Your Card Details
      </Text>
      <View>
        <TextInput
          keyboardType="Enter Card Name"
          style={styles.input}
          onChange={(e) => setName(e.nativeEvent.text)}
          value={name}
          placeholder="     Enter Card Name"
        />
        <TextInput
          keyboardType="Enter Card Number"
          style={styles.input}
          onChange={(e) => setCardNo(e.nativeEvent.text)}
          value={cardNo}
          placeholder="     Enter Card Number"
        />
        <TextInput
          keyboardType="Enter CVV"
          style={styles.input}
          onChange={(e) => setCvv(e.nativeEvent.text)}
          value={cvv}
          placeholder="     Enter CVV"
        />
        <TextInput
          keyboardType="Enter Expiry Date"
          style={styles.input}
          onChange={(e) => setExpiryDate(e.nativeEvent.text)}
          value={expiryDate}
          placeholder="  Enter Expiry Date"
        />
        <TextInput
          keyboardType="Enter Amount"
          style={styles.input2}
          onChange={(e) => setAmount(e.nativeEvent.text)}
          value={amount}
          placeholder="  Enter Amount"
        />
      </View>
      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark]}
        onPress={() => {
          addCard();
        }}
      >
        <Text style={styles.letsGetStarted}> Add Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    marginLeft: 60,
    width: 290,
  },
  input2: {
    height: 40,
    margin: 12,
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    marginLeft: 60,
    width: 290,
    marginBottom: -70,
  },
  loginlogo: {
    width: 440,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 0,
    marginTop: -35,
  },
  logo1: {
    width: 300,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60,
    marginRight: 60,
    flexDirection: "row",
    marginBottom: 30,
  },

  ButtonDark: {
    height: 50,
    width: 200,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 100,
    marginTop: 100,
  },
  containerx: {
    backgroundColor: "#ADDFFF",
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
  text: {
    color: "black",
    marginTop: 5,
  },
  loginText: {
    color: "black",
    fontSize: 19,
  },
  loading: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginLeft: 140,
    flexDirection: "row",
  },
});
