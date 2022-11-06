import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

function LAllTravelHistory({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.smartLineTravels}>SMART LINE TRAVELS</Text>
      <Text style={styles.myJournies}>My Journies</Text>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <TouchableOpacity onPress={() =>
              navigation.navigate("TravelHistory")
            }>
          <View style={[styles.container1]}>
            <View style={styles.cardBody}>
              <View style={styles.bodyContent}>
                <Text style={styles.date}>Date</Text>
                <Text style={styles.route}>Route</Text>
              </View>
            </View>
            <Text style={styles.getOff}>Get off</Text>
          </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Image
                source={{
                  uri: "https://thumbs.dreamstime.com/b/illustration-travel-tour-bus-mountain-range-background-copy-space-30257089.jpg",
                }}       
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  smartLineTravels: {
    fontFamily: "roboto-700",
    color: "rgba(144,19,254,1)",
    height: 34,
    width: 297,
    textAlign: "center",
    fontSize: 25,
    marginTop: 190,
    marginLeft: 65,
  },
  myJournies: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 25,
    width: 151,
    textAlign: "center",
    fontSize: 20,
    marginTop: 2,
    alignSelf: "center",
  },
  scrollArea: {
    width: 390,
    height: 527,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 10,
    marginLeft: 19,
  },
  scrollArea_contentContainerStyle: {
    height: 527,
    marginTop: 5,
    width: 390,
  },
  materialCardWithImageAndTitle: {
    height: 103,
    width: 336,
    marginTop: 28,
    marginLeft: 11,
    marginRight:11
  },
  image: {
    width: 428,
    height: 200,
    marginTop: -800,
  },
  container1: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1,
  },
  date: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12,
  },
  route: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5,
  },
  getOff: {
    top: 32,
    left: 219,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 131,
  },
});

export default LAllTravelHistory;
