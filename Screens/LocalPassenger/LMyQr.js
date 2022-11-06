import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function LMyQr(props) {
  return (
    <View style={styles.container}>
      <Image
                source={{
                    uri: "https://thumbs.dreamstime.com/b/illustration-travel-tour-bus-mountain-range-background-copy-space-30257089.jpg",
                  }}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.smartLineTravelsStack}>
        <Text style={styles.smartLineTravels}>SMART LINE TRAVELS</Text>
        <Text style={styles.text}>MY QR</Text>
      </View>
      <Image
                source={{
                    uri: "https://thumbs.dreamstime.com/b/illustration-travel-tour-bus-mountain-range-background-copy-space-30257089.jpg",
                  }}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
      <Icon name="reload" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 430,
    height: 300,
    marginTop: -90,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  smartLineTravels: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(144,19,254,1)",
    height: 53,
    width: 297,
    textAlign: "center",
    fontSize: 25
  },
  text: {
    top: 40,
    left: 73,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 25,
    width: 151,
    textAlign: "center",
    fontSize: 20
  },
  smartLineTravelsStack: {
    width: 297,
    height: 65,
    marginTop: 26,
    marginLeft: 55
  },
  image2: {
    width: 311,
    height: 311,
    marginTop: 31,
    marginLeft: 48
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 43,
    marginLeft: 184
  }
});

export default LMyQr;
