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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LocalPassengerProfile({ route, navigation }) {
  const [token, settoken] = useState("");

  const getToken = async () => {
    settoken(await AsyncStorage.getItem("token"));
  };
  useEffect(() => {
    getToken();
    if (!!!route.prams) {
    }
  }, []);

  const [profile, setProfile] = useState({});
  const getprofile = async () => {
    await axios
      .get(`https://csse-hosting-app.herokuapp.com/api/user/profile`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data.status);
        setProfile(res.data.user);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteProfile = async (id) => {
    Alert.alert("Are you sure?", "This will permanently delete your profile!", [
      {
        text: "OK",
        onPress: async () => {
          const Token = await AsyncStorage.getItem("token");
          axios
            .delete(
              `https://csse-hosting-app.herokuapp.com/api/user/deleteUser`,
              {
                headers: {
                  Authorization: Token,
                },
              }
            )
            .then((res) => {
              navigation.push("LoadingPage");
              getprofile();
            })
            .catch((e) => {
              console.error(e);
            });
        },
      },
    ]);
  };

  console.log(profile);
  useEffect(() => {
    getprofile();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://i0.wp.com/worldtravelsisters.com/wp-content/uploads/2018/06/world-travel.jpg?fit=976%2C332&ssl=1",
        }}
      />
      <Text
        style={{
          color: "#000080",
          textAlign: "center",
          marginTop: -3,
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
          marginTop: 8,
          fontSize: 28,
          marginLeft: 10,
          marginBottom: 5,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        Your Profile
      </Text>

      <View style={styles.no1}>
        <Text style={{ marginLeft: 38, marginBottom: -4 }}>
          Passenger First Name
        </Text>
        <Text style={styles.textView}>{profile.firstName}</Text>
      </View>
      <View style={styles.no1}>
        <Text style={{ marginLeft: 38, marginBottom: -4, marginTop: 10 }}>
          Passenger Last Name
        </Text>
        <Text style={styles.textView}> {profile.lastName}</Text>
      </View>
      <View style={styles.no1}>
        <Text style={{ marginLeft: 38, marginBottom: -4, marginTop: 10 }}>
          Passenger Phone Number
        </Text>
        <Text style={styles.textView}> {profile.phoneNo}</Text>
      </View>

      <View style={styles.no1}>
        <Text style={{ marginLeft: 38, marginBottom: -4, marginTop: 10 }}>
          Passenger Nic Number
        </Text>
        <Text style={styles.textView1}> {profile.nic}</Text>
      </View>
      <View style={styles.no1}>
        <Text style={{ marginLeft: 38, marginBottom: -4, marginTop: 10 }}>
          Passenger Email
        </Text>
        <Text style={styles.textView1} editable={false}>
          {" "}
          {profile.email}
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.containerbtn, styles.ButtonDark]}
        onPress={() =>
          navigation.navigate("UpdateLocalPassenger", {
            userId: route.params.userId,
            role: route.params.role,
            userId: profile._id,
          })
        }
      >
        <Text style={styles.signUpbtn}> Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.containerbtn, styles.ButtonDark1]}
        onPress={() => navigation.navigate("localPassengerQR")}
      >
        <Text style={styles.signUpbtn}>My QR Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.containerbtn, styles.ButtonDark1]}
        onPress={() => deleteProfile(profile._id)}
      >
        <Text style={styles.signUpbtn}>Delete My Profile</Text>
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
    width: 425,
    height: 150,
    marginTop: -10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  no1: {
    color: "rgba(155,155,155,1)",
    fontSize: 29,
    marginTop: 4,
  },
  textView: {
    marginLeft: 20,
    height: 40,
    padding: 10,
    marginLeft: 35,
    marginTop: 10,
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
