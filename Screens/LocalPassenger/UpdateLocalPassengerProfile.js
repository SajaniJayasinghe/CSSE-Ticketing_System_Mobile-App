import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UpdateLocalPassengerProfile({ route, navigation }) {
  useEffect(() => {
    if (!!!route.prams) {
    }
  }, []);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [nic, setnic] = useState("");

  const getUser = async () => {
    var token = await AsyncStorage.getItem("token");
    console.log(token);
    await axios
      .get(`https://csse-hosting-app.herokuapp.com/api/user/profile`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.data.status) {
          setfirstName(res.data.user.firstName);
          setlastName(res.data.user.lastName);
          setemail(res.data.user.email);
          setphoneNo(res.data.user.phoneNo);
          setnic(res.data.user.nic);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  const updateUser = async () => {
    const Token = await AsyncStorage.getItem("token");
    const URL = `https://csse-hosting-app.herokuapp.com/api/user/updateUser`;

    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo: phoneNo,
      nic: nic,
    };

    axios
      .patch(URL, payload, {
        headers: {
          Authorization: Token,
        },
      })
      .then((_response) => {
        Alert.alert(
          "Use Profile Updated",
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
          //fontFamily: "Times New Roman",
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
          //fontFamily: "Times New Roman",
        }}
      >
        Update Your Profile
      </Text>
      <View style={styles.no1}>
        <TextInput
          keyboardType=" First Name"
          value={firstName}
          onChange={(e) => setfirstName(e.nativeEvent.text)}
          style={styles.textView}
          placeholder="    First Name"
        />
      </View>
      <View style={styles.no1}>
        <TextInput
          keyboardType=" Last Name"
          value={lastName}
          onChange={(e) => setlastName(e.nativeEvent.text)}
          style={styles.textView}
          placeholder="    Last Name"
        />
      </View>
      <View style={styles.no1}>
        <TextInput
          keyboardType=" Email Address"
          value={email}
          editable={false}
          onChange={(e) => setemail(e.nativeEvent.text)}
          style={styles.textView}
          placeholder="    Email Address"
        />
      </View>
      <View style={styles.no1}>
        <TextInput
          keyboardType=" Phone Number"
          value={phoneNo}
          onChange={(e) => setphoneNo(e.nativeEvent.text)}
          style={styles.textView}
          placeholder="    Phone Number"
        />
      </View>

      <View style={styles.no1}>
        <TextInput
          keyboardType=" NIC Number"
          value={nic}
          onChange={(e) => setnic(e.nativeEvent.text)}
          style={styles.textView}
          placeholder="    NIC Number"
        />
      </View>

      <TouchableOpacity
        style={[styles.containerbtn, styles.ButtonDark]}
        onPress={() => updateUser()}
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
    marginTop: 4,
  },

  logo: {
    width: 425,
    height: 250,
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
