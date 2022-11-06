import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const LoadingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667364797/Screenshot_2022-11-02_at_10.22.43_wleml4.png",
        }}
      />
      <Text
        style={{
          color: "#000080",
          textAlign: "center",
          marginTop: 30,
          fontSize: 28,
          fontWeight: "bold",
          //fontFamily: "Times New Roman",
        }}
      >
        WELCOME TO
      </Text>
      <Text
        style={{
          color: "#000080",
          textAlign: "center",
          marginTop: 10,
          fontSize: 28,
          fontWeight: "bold",
          //fontFamily: "Times New Roman",
        }}
      >
        SMART LINE TRAVELS
      </Text>
      <TouchableOpacity
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={() => navigation.navigate("PassengerPage")}
      >
        <Text style={styles.letsGetStarted}> Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 470,
    height: 500,
    marginLeft: -15,
    marginTop: -50,
  },
  text: {
    color: "black",
    marginTop: 5,
  },

  materialButtonDark: {
    height: 50,
    width: 160,
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 72,
    marginLeft: 130,
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

  loading: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 230,
    marginLeft: 140,
    flexDirection: "row",
  },
});

export default LoadingScreen;
