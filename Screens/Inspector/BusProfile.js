import React, { Component,useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";


const data = [
    {
      label: "Running",
      busState: "Running",
    },
    {
      label: "Stopped",
      busState: "Stopped",
    },
    {
      label: "Arrived",
      busState: "Arrived",
    },
  ];

function BusProfile(props) {
    const [busState, setbusState] = useState("");


      const renderItem = (item) => {
        return (
          <View style={styles.item1}>
            <Text style={styles.textItem}>{item.label}</Text>
            {item.busState === busState && (
              <AntDesign
                style={styles.icon}
                color="black"
                name="Safety"
                size={20}
              />
            )}
          </View>
        );
      };
    
  return (
    <View style={styles.container}>
      <View style={styles.smartLineTravelsStackStack}>
        <View style={styles.smartLineTravelsStack}>
          <Text style={styles.smartLineTravels}>SMART LINE TRAVELS</Text>

        </View>
        <Image
                source={{
                    uri: "https://thumbs.dreamstime.com/b/illustration-travel-tour-bus-mountain-range-background-copy-space-30257089.jpg",
                  }}            
            style={styles.image}
          ></Image>
        <Text style={styles.text}>Bus Profile</Text>
        <View style={styles.rect3}>
          <View style={styles.scrollArea}>
            <ScrollView
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.busNumberRow}>
                <Text style={styles.busNumber}>Bus Number -</Text>
                <Text style={styles.loremIpsum2}>Lorem Ipsum1</Text>
              </View>
              <View style={styles.seatCountRow}>
                <Text style={styles.seatCount}>Seat Count -</Text>
                <Text style={styles.loremIpsum3}>Lorem Ipsum2</Text>
              </View>
              <View style={styles.seatLeftRow}>
                <Text style={styles.seatLeft}>Seat Left -</Text>
                <Text style={styles.loremIpsum5}>Lorem Ipsum3</Text>
              </View>
              <View style={styles.busRouteRow}>
                <Text style={styles.busRoute}>Bus Route -</Text>
                <Text style={styles.loremIpsum4}>Lorem Ipsum4</Text>
              </View>
              <View style={styles.busStateStack}>
                <Text style={styles.busState}>Bus State -</Text>
                <Text style={styles.loremIpsum52}>Lorem Ipsum5</Text>
              </View>
              <View style={styles.totalEarningStack}>
                <Text style={styles.totalEarning}>Total Earning -</Text>
                <Text style={styles.rs}>rs</Text>
              </View>


              <View style={styles.totalTrips1Row}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Change Bus State"
                searchPlaceholder="Search..."
                statusBarIsTranslucent={true}
                renderItem={renderItem}
                value={busState}
                renderLeftIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color="black"
                    name="Safety"
                    size={20}
                  />
                )}
              />

              <View style={styles.buttoncontainer}>
                <TouchableOpacity
                  style={styles.buttonok}
                >
                  <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
            </ScrollView>
          </View>
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
    top: -60,
    left: 49,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(144,19,254,1)",
    height: 34,
    width: 297,
    textAlign: "center",
    fontSize: 25
  },
  image: {
    top: 9,
    left: 0,
    width: 430,
    height: 250,
    position: "absolute"
  },
  smartLineTravelsStack: {
    top: 0,
    left: 0,
    width: 393,
    height: 340,
    position: "absolute"
  },
  text: {
    top: -29,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 25,
    width: 151,
    textAlign: "center",
    fontSize: 20,
    left: 121
  },
  rect3: {
    top: 280,
    left: 40,
    width: 345,
    height: 450,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 39,
    shadowOpacity: 1,
    shadowRadius: 13
  },
  scrollArea: {
    width: 328,
    height: 400,
    backgroundColor: "white",
    marginTop: 8,
    marginLeft: 9
  },
  scrollArea_contentContainerStyle: {
    height: 390,
    width: 328,
    backgroundColor:"white"
  },
  busNumber: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 28,
    width: 125,
    fontSize: 17
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 28,
    width: 157,
    fontSize: 17,
    marginLeft: 15
  },
  busNumberRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 24,
    marginRight: 7
  },
  seatCount: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 32,
    width: 125,
    fontSize: 17,
    marginTop: 1
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 32,
    width: 157,
    fontSize: 17,
    marginLeft: 15
  },
  seatCountRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 24,
    marginRight: 7
  },
  seatLeft: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 36,
    width: 140,
    fontSize: 17
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 36,
    width: 157,
    fontSize: 17
  },
  seatLeftRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 24,
    marginRight: 7
  },
  busRoute: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 31,
    width: 125,
    fontSize: 17
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 119,
    fontSize: 17,
    marginLeft: 15
  },
  busRouteRow: {
    height: 31,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 24,
    marginRight: 45
  },
  busState: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 26,
    width: 149,
    fontSize: 17
  },
  loremIpsum52: {
    top: 0,
    left: 138,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 26,
    width: 124,
    fontSize: 17
  },
  busStateStack: {
    width: 262,
    height: 26,
    marginTop: 30,
    marginLeft: 26
  },
  totalEarning: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 52,
    width: 179,
    fontSize: 20
  },
  rs: {
    top: 0,
    left: 163,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 37,
    width: 89,
    fontSize: 20
  },
  totalEarningStack: {
    width: 252,
    height: 52,
    marginTop: 29,
    marginLeft: 40
  },
  smartLineTravelsStackStack: {
    width: 393,
    height: 756,
    marginTop: 64
  },
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderColor: "#FFBC26",
    borderWidth: 2,
  },
  icon: {
    marginRight: 5,
  },
  item1: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttonok: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginBottom: 25,
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  totalTrips1Row: {
    padding: 20,
    marginBottom: 20,
  },
});

export default BusProfile;
