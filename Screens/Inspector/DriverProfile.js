import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";

import axios from "axios";

export default function DriverPassengerProfile({ route, navigation }) {
  useEffect(() => {
    if (!!!route.prams) {
    }
  }, []);

  const [profile, setItems] = useState({});

  const getprofile = () => {
    axios
      .get(
        `https://hostingbackend.herokuapp.com/api/passenger/getUserById/${route.params.userId}`
      )
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteProfile = (id) => {
    Alert.alert("Are you sure?", "This will permanently delete your profile!", [
      {
        text: "OK",
        onPress: () => {
          axios
            .delete(
              `https://hostingbackend.herokuapp.com/api/passenger/deleteUser/${id}`
            )
            .then((res) => {
              navigation.navigate("LoadingPage");
              getprofile();
            })
            .catch((e) => {
              console.error(e);
            });
        },
      },
    ]);
  };

  useEffect(() => {
    getprofile();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://st.depositphotos.com/1008648/2313/i/950/depositphotos_23132682-stock-photo-travel-the-world-monuments-concept.jpg",
        }}
      />
      <Text
        style={{
          color: "#000080",
          textAlign: "center",
          marginTop: -180,
          marginBottom: 200,
          fontSize: 28,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        SMART LINE TRAVELS
      </Text>
      <View style={styles.no1}>
        <Text style={styles.textView}>{profile.firstName}</Text>
      </View>

      <View style={styles.no1}>
        <Text style={styles.textView}> {profile.lastName}</Text>
      </View>
      <View style={styles.no1}>
        <Text style={styles.textView1} editable={false}>
          {" "}
          {profile.email}
        </Text>
      </View>
      <View style={styles.no1}>
        <Text style={styles.textView}> {profile.phoneNo}</Text>
      </View>

      <View style={styles.no1}>
        <Text style={styles.textView1}> {profile.nic}</Text>
      </View>

      <TouchableOpacity
        style={[styles.containerbtn, styles.ButtonDark]}
        onPress={() =>
          navigation.navigate("DriverUpdate", {
            userId: route.params.userId,
            role: route.params.role,
            userId: profile._id,
          })
        }
      >
        <Text style={styles.signUpbtn}> Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.containerbtn, styles.ButtonDark1]}>
        <Text
          style={styles.signUpbtn}
          onPress={() => deleteProfile(profile._id)}
        >
          Delete My Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.containerbtn, styles.ButtonDark1]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.signUpbtn}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textView1: {
    marginLeft: 20,
    height: 40,
    padding: 10,
    marginLeft: 35,
    marginTop: 5,
    width: 350,
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: "#DADBDD",
    textAlign: "left",
  },
  logo: {
    width: 430,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  no1: {
    color: "rgba(155,155,155,1)",
    fontSize: 29,
    marginTop: 4,
  },
  no2: {
    color: "rgba(155,155,155,1)",
    fontSize: 29,
    marginTop: -100,
  },
  textView: {
    marginLeft: 20,
    height: 40,
    padding: 10,
    marginLeft: 35,
    marginTop: 20,
    width: 350,
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: "#DBE9FA",
    textAlign: "left",
  },
  ButtonDark: {
    height: 35,
    width: 250,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    marginTop: 10,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 20,
    marginLeft: 85,
  },
  ButtonDark1: {
    height: 35,
    width: 250,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 10,
    marginLeft: 85,
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
});
