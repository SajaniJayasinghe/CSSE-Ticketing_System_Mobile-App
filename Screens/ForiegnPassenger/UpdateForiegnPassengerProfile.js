import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import moment from "moment";

export default function UpdateForiegnPassengerProfile({ route, navigation }) {
  const [profile, setItems] = useState({});

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [country, setcountry] = useState("");
  const [passportNo, setpassportNo] = useState("");
  const [userExpDate, setuserExpDate] = useState("");

  const getUser = async () => {
    const Token = await AsyncStorage.getItem("token");
    await axios
      .get(`https://csse-hosting-app.herokuapp.com/api/user/profile`, {
        headers: {
          Authorization: Token,
        },
      })
      .then((res) => {
        if (res.data.status) {
          console.log(res.data.user);
          setfirstName(res.data.user.firstName);
          setlastName(res.data.user.lastName);
          setemail(res.data.user.email);
          setcountry(res.data.user.country);
          setpassportNo(res.data.user.passportNo);
          setuserExpDate(res.data.user.userExpDate);
        } else {
          console.log(res.data.message);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    if (!!!route.prams) {
    }
    getUser();
  }, []);

  const updateForiegner = () => {
    const URL = `https://hostingbackend.herokuapp.com/api/passenger/updateUserById/${route.params.userId}`;

    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      country: country,
      passportNo: passportNo,
      userExpDate: userExpDate,
    };

    axios
      .put(URL, payload)
      .then((_response) => {
        Alert.alert(
          "Driver Profile Updated",
          "Your Profile has updated successfully!!",
          [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("Dashboard", {
                  userId: route.params.userId,
                  role: route.params.role,
                }),
            },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(
          "Error",
          "Inserting Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://previews.123rf.com/images/scusi/scusi1309/scusi130900039/22719918-city-travel-by-bus.jpg",
        }}
      />
      <Text
        style={{
          color: "#000080",
          textAlign: "center",
          marginTop: 5,
          fontSize: 28,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        SMART LINE TRAVELS
      </Text>
      <Text
        style={{
          color: "#000000",
          textAlign: "center",
          marginTop: 25,
          fontSize: 28,
          marginBottom: 30,
          marginLeft: 10,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        Update Your Profile
      </Text>
      <View style={styles.no1}>
        <TextInput
          keyboardType=" First Name"
          style={styles.textView}
          value={firstName}
          onChange={(e) => setfirstName(e.nativeEvent.text)}
          placeholder="    First Name"
        />
      </View>
      <View style={styles.no1}>
        <TextInput
          keyboardType=" Last Name"
          style={styles.textView}
          value={lastName}
          onChange={(e) => setlastName(e.nativeEvent.text)}
          placeholder="    Last Name"
        />
      </View>
      <View style={styles.no1}>
        <TextInput
          keyboardType=" Email Address"
          style={styles.textView}
          value={email}
          onChange={(e) => setemail(e.nativeEvent.text)}
          placeholder="    Email Address"
        />
      </View>

      <View style={styles.no1}>
        <TextInput
          keyboardType=" Passport Number"
          style={styles.textView}
          value={passportNo}
          onChange={(e) => setpassportNo(e.nativeEvent.text)}
          placeholder="    Passport Number"
        />
      </View>
      <View style={styles.no1}>
        <TextInput
          keyboardType=" Country"
          style={styles.textView}
          value={country}
          onChange={(e) => setcountry(e.nativeEvent.text)}
          placeholder="    Country"
        />
      </View>

      <View style={styles.no1}>
        <TextInput
          keyboardType=" Expire Date"
          style={styles.textView}
          value={moment(userExpDate).format("YYYY-MM-DD")}
          onChange={(e) => setuserExpDate(e.nativeEvent.text)}
          placeholder="    Expire Date"
        />
      </View>

      <TouchableOpacity
        style={[styles.containerbtn, styles.ButtonDark]}
        onPress={() => updateForiegner()}
      >
        <Text style={styles.signUpbtn}> Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textView: {
    marginLeft: 20,
    height: 40,
    padding: 10,
    marginLeft: 35,
    marginTop: 15,
    width: 350,
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: "#DBE9FA",
    textAlign: "left",
  },
  no1: {
    color: "rgba(155,155,155,1)",
    fontSize: 29,
  },

  logo: {
    width: 425,
    height: 250,
    marginTop: -70,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  containerbtn: {
    backgroundColor: "#79BAEC",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  ButtonDark: {
    height: 35,
    width: 150,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 20,
    marginLeft: 135,
  },
});
