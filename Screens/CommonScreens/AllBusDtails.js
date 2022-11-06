import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-shadow-cards";

export default function AllBusDetails({ navigation }) {
  const [bus, setbus] = useState([]);

  useEffect(() => {
    axios
      .get("https://hostingbackend.herokuapp.com/api/busRoute/allbusroutes")
      .then((res) => {
        if (res.data.success) {
          setbus(res.data.existingBusRoutes);
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://thumbs.dreamstime.com/b/illustration-travel-tour-bus-mountain-range-background-copy-space-30257089.jpg",
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
        All Bus Details
      </Text>
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        {bus.map((bus, index) => (
          <View style={styles.bus2} key={bus + index}>
            <Card style={{ padding: 10, margin: 21 }}>
              <LinearGradient
                colors={["#79BAEC", "#C2DFFF"]}
                style={styles.log2}
              >
                <Text
                  style={{
                    marginVertical: 2,
                    fontSize: 25,
                  }}
                >
                  Bus Number : {bus.busNumber}
                </Text>
              </LinearGradient>
              <Text style={{ marginVertical: 2, marginTop: 10 }}>
                Bus Route : {bus.route}
              </Text>
              <Text style={{ marginVertical: 2 }}>
                Departure : {bus.departure}
              </Text>
              <Text style={{ marginVertical: 2 }}>
                Departure Time : {bus.departureTime}
              </Text>
              <Text style={{ marginVertical: 2 }}>
                Destination : {bus.destination}
              </Text>
              <Text style={{ marginVertical: 2 }}>
                Destination Time : {bus.destinationTime}
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
