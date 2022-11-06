import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import React, { useEffect, useState } from "react";

const Dashboard = ({ route, navigation }) => {
  useEffect(() => {
    if (!!!route.params) {
      navigation.navigate("Driver");
    }
    console.log(route.params.userId);
    console.log(route.params.role);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://img.freepik.com/premium-vector/colorful-poster-with-bus-background-outskirts-city_18591-8842.jpg?w=2000",
        }}
      />
      <Image
        style={styles.logo1}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667311443/Screenshot_2022-11-01_at_19.32.42-removebg-preview_lbhdzz.png",
        }}
      />
      {route.params.role === "ForeignPassenger" && (
        <>
          <TouchableOpacity
            style={[styles.containerx, styles.ButtonDark]}
            onPress={() =>
              navigation.navigate("AllBusRoutes", {
                userId: route.params.userId,
                role: route.params.role,
              })
            }
          >
            <Text style={styles.loginText}>Bus Routes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerx, styles.ButtonDark]}
            onPress={() => navigation.navigate("AllTravelHistory")}
          >
            <Text style={styles.loginText}>My Journey</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerx, styles.ButtonDark]}
            onPress={() =>
              navigation.navigate("AddCard", {
                userId: route.params.userId,
                role: route.params.role,
              })
            }
          >
            <Text style={styles.loginText}>Add Card Details</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerx, styles.ButtonDark]}
            onPress={() =>
              navigation.navigate("ForiegnPassengerProfile", {
                userId: route.params.userId,
                role: route.params.role,
              })
            }
          >
            <Text style={styles.loginText}>My Profile</Text>
          </TouchableOpacity>
        </>
      )}

      {route.params.role === "LocalPassenger" && (
        <>
          <TouchableOpacity
            style={[styles.containerx, styles.ButtonDark]}
            onPress={() =>
              navigation.navigate("AllBusRoutes", {
                userId: route.params.userId,
                role: route.params.role,
              })
            }
          >
            <Text style={styles.loginText}>Bus Routes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerx, styles.ButtonDark]}
            onPress={() =>
              navigation.navigate("MyJourney2", {
                userId: route.params.userId,
                role: route.params.role,
              })
            }
          >
            <Text style={styles.loginText}>My Journey</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerx, styles.ButtonDark]}
            onPress={() =>
              navigation.navigate("AddCard", {
                userId: route.params.userId,
                role: route.params.role,
              })
            }
          >
            <Text style={styles.loginText}>Add Card Details</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerx, styles.ButtonDark]}
            onPress={() =>
              navigation.navigate("LocalPassengerProfile", {
                userId: route.params.userId,
                role: route.params.role,
              })
            }
          >
            <Text style={styles.loginText}>My Profile</Text>
          </TouchableOpacity>
        </>
      )}

      {route.params.role === "Inspector" && (
        <>
          <TouchableOpacity
            style={[styles.containerx, styles.ButtonDark]}
            onPress={() => navigation.navigate("QRScanner")}
          >
            <Text style={styles.loginText}>Scan QR Code</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerx, styles.ButtonDark]}
            onPress={() =>
              navigation.navigate("GetAllUser", {
                userId: route.params.userId,
                role: route.params.role,
              })
            }
          >
            <Text style={styles.loginText}>User Details</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerx, styles.ButtonDark]}
            onPress={() =>
              navigation.navigate("DriverProfile", {
                userId: route.params.userId,
                role: route.params.role,
              })
            }
          >
            <Text style={styles.loginText}>My Profile</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 428,
    height: 373,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  logo1: {
    width: 300,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60,
    marginRight: 60,
    marginTop: 20,
    flexDirection: "row",
    marginBottom: 30,
  },
  loginText: {
    color: "black",
    fontSize: 19,
    lineHeight: 18,
  },

  ButtonDark: {
    height: 50,
    width: 300,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 20,
    marginLeft: 60,
  },
  containerx: {
    marginTop: -20,
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
});

export default Dashboard;
