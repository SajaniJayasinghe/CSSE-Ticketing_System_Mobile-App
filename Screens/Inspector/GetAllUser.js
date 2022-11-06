import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-shadow-cards";

export default function GetAllUser({ navigation }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://hostingbackend.herokuapp.com/api/passenger/getAllUser")
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.existingUser);
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://media.istockphoto.com/vectors/passengers-on-city-bus-stop-platform-flat-vector-vector-id1165665386?k=20&m=1165665386&s=170667a&w=0&h=6hNVsCJTby4TKYczROxXUjpWv7cSMxFma-D7Gy8ZRzE=",
        }}
      />
      <Text
        style={{
          fontWeight: "900",
          opacity: 0.6,
          textAlign: "center",
          fontSize: 26,
        }}
      >
        All Users Details
      </Text>
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        {user.map((user, index) => (
          <View style={styles.bus2} key={user + index}>
            <Card style={{ padding: 10, margin: 21 }}>
              <Text
                style={{
                  marginVertical: 2,
                  marginTop: 10,
                  fontSize: 16,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                User Name : {user.firstName}
              </Text>
              <Text style={{ marginVertical: 2 }}>
                User Phone Number : {user.phoneNo}
              </Text>
              <Text style={{ marginVertical: 2 }}>Email : {user.email}</Text>
              <Text style={{ marginVertical: 2 }}>
                Passport Number : {user.passportNo}
              </Text>
              <Text style={{ marginVertical: 2 }}>
                Country : {user.country}
              </Text>
              <Text style={{ marginVertical: 2 }}>
                Expire Date : {user.userExpDate}
              </Text>
              <Text style={{ marginVertical: 2 }}>
                Account Status: {user.accountStatus}
              </Text>

              <Text style={{ marginVertical: -2 }}></Text>
            </Card>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 430,
    height: 300,
    marginTop: -30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  log: {
    width: 350,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  log2: {
    width: 389,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
    marginLeft: -10,
    flexDirection: "row",
  },
});
