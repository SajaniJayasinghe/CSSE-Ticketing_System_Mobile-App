import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ForiegnPassengerProfile({ route, navigation }) {
  useEffect(() => {
    if (!!!route.prams) {
    }
  }, []);

  const [profile, setItems] = useState({});

  const getprofile = async () => {
    const Token = await AsyncStorage.getItem("token");
    await axios
      .get(`https://csse-hosting-app.herokuapp.com/api/user/profile`, {
        headers: {
          Authorization: Token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setItems(res.data.user);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteProfile = async () => {
    var Token = await AsyncStorage.getItem("token");
    Alert.alert("Are you sure?", "This will permanently delete your profile!", [
      {
        text: "OK",
        onPress: async () => {
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
          uri: "https://www.hotelmize.com/wp-content/uploads/2020/08/importance_of_tour_operators_in_tourism_industry-01.jpg",
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
          marginTop: 5,
          fontSize: 28,
          marginLeft: 10,
          fontWeight: "bold",
          marginBottom: 30,
          //fontFamily: "Times New Roman",
        }}
      >
        Your Profile
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
        <Text style={styles.textView}>{profile.country}</Text>
      </View>
      <View style={styles.no1}>
        <Text style={styles.textView1} editable={false}>
          {profile.passportNo}
        </Text>
      </View>
      <View style={styles.no1}>
        <Text style={styles.textView1} editable={false}>
          {profile.userExpDate}
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.containerbtn, styles.ButtonDark2]}
        onPress={() =>
          navigation.navigate("ForiegnPassengerUpdate", {
            userId: route.params.userId,
            role: route.params.role,
            userId: profile._id,
          })
        }
      >
        <Text style={styles.signUpbtn}> Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.containerbtn, styles.ButtonDark]}
        onPress={() => navigation.navigate("MyQr")}
      >
        <Text style={styles.signUpbtn}>My QR Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.containerbtn, styles.ButtonDark]}
        onPress={() => deleteProfile()}
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
  logo: {
    width: 425,
    height: 160,
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
    marginTop: 5,
    width: 350,
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: "#ffff",
    textAlign: "left",
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
  ButtonDark: {
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
  ButtonDark2: {
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
    shadowRadius: 3,
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
