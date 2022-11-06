import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

export default function PassengerPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://thumbs.dreamstime.com/b/travel-to-europe-travel-to-europe-cartoons-vector-illustration-graphic-design-115080670.jpg",
        }}
      />
      <TouchableOpacity
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.letsGetStarted}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.letsGetStarted}> Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    container: {
      flex: 1,
      backgroundColor: "rgba(238,238,30,1)",
    },
  },
  logo: {
    width: 450,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
    marginTop: -8,
    marginBottom: 20,
    flexDirection: "row",
  },
  materialButtonDark: {
    height: 50,
    width: 250,
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 22,
    marginLeft: 85,
  },

  letsGetStarted: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
  },

  containerx: {
    backgroundColor: "#C2DFFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 26,
    paddingRight: 16,
  },
});
