import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function LTravelHistory(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.smartLineTravels}>SMART LINE TRAVELS</Text>
      <Text style={styles.myJournies}>My Journey</Text>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.iconRow}>
            <EntypoIcon name="location-pin" style={styles.icon}></EntypoIcon>
            <Text style={styles.from}>From -</Text>
          </View>
        </View>
        <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
      </View>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <View style={styles.icon2Row}>
            <MaterialCommunityIconsIcon
              name="bus-articulated-front"
              style={styles.icon2}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.to}>To -</Text>
          </View>
        </View>
        <Text style={styles.loremIpsum2}>Lorem Ipsum2</Text>
      </View>
      <View style={styles.rect3}>
        <View style={styles.busRouteRow}>
          <Text style={styles.busRoute}>Bus Route -</Text>
          <Text style={styles.loremIpsum1}>Lorem Ipsum1</Text>
        </View>
        <View style={styles.departureRow}>
          <Text style={styles.departure}>Departure -</Text>
          <Text style={styles.loremIpsum22}>Lorem Ipsum2</Text>
        </View>
        <View style={styles.distanceRow}>
          <Text style={styles.distance}>Distance -</Text>
          <Text style={styles.loremIpsum3}>Lorem Ipsum3</Text>
        </View>
        <View style={styles.arrivalRow}>
          <Text style={styles.arrival}>Arrival -</Text>
          <Text style={styles.loremIpsum4}>Lorem Ipsum4</Text>
        </View>
        <View style={styles.ticketPriceRow}>
          <Text style={styles.ticketPrice}>Ticket Price -</Text>
          <Text style={styles.loremIpsum5}>Lorem Ipsum5</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  smartLineTravels: {
    fontFamily: "roboto-700",
    color: "rgba(144,19,254,1)",
    height: 34,
    width: 297,
    textAlign: "center",
    fontSize: 25,
    marginTop: 10,
    marginLeft: 65
  },
  myJournies: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 25,
    width: 151,
    textAlign: "center",
    fontSize: 20,
    alignSelf: "center"
  },
  rect: {
    top: 0,
    left: 0,
    width: 345,
    height: 96,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 45,
    width: 40
  },
  from: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 26,
    width: 109,
    fontSize: 20,
    marginLeft: 42,
    marginTop: 10
  },
  iconRow: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 136,
    marginLeft: 18,
    marginTop: 25
  },
  loremIpsum: {
    top: 35,
    left: 179,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 26,
    width: 175,
    fontSize: 20
  },
  rectStack: {
    width: 355,
    height: 96,
    marginTop: 23,
    marginLeft: 45
  },
  rect2: {
    top: 0,
    left: 0,
    width: 345,
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(90,186,241,1)",
    borderRadius: 100,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  to: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 90,
    fontSize: 20,
    marginLeft: 43,
    marginTop: 11
  },
  icon2Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 154,
    marginLeft: 18,
    marginTop: 23
  },
  loremIpsum2: {
    top: 34,
    left: 187,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 175,
    fontSize: 20
  },
  rect2Stack: {
    width: 362,
    height: 90,
    marginTop: 18,
    marginLeft: 45
  },
  rect3: {
    width: 345,
    height: 379,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 39,
    shadowOpacity: 1,
    shadowRadius: 13,
    marginTop: 59,
    marginLeft: 45
  },
  busRoute: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 28,
    width: 110,
    fontSize: 17
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 28,
    width: 157,
    fontSize: 17,
    marginLeft: 30
  },
  busRouteRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 24,
    marginRight: 24
  },
  departure: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 32,
    width: 110,
    fontSize: 17,
    marginTop: 1
  },
  loremIpsum22: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 32,
    width: 157,
    fontSize: 17,
    marginLeft: 30
  },
  departureRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 24,
    marginRight: 24
  },
  distance: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 36,
    width: 110,
    fontSize: 17
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 36,
    width: 157,
    fontSize: 17,
    marginLeft: 30
  },
  distanceRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 24,
    marginRight: 24
  },
  arrival: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 110,
    fontSize: 17
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 119,
    fontSize: 17,
    marginLeft: 30
  },
  arrivalRow: {
    height: 31,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 24,
    marginRight: 62
  },
  ticketPrice: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 40,
    width: 126,
    fontSize: 20
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 29,
    width: 133,
    fontSize: 20,
    marginLeft: 9
  },
  ticketPriceRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 44,
    marginLeft: 38,
    marginRight: 39
  }
});

export default LTravelHistory;
