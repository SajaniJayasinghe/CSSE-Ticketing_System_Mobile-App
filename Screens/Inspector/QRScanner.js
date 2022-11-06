// import React, { useState, useEffect } from "react";
// import {
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import { BarCodeScanner } from "expo-barcode-scanner";
// import { useNavigation } from "@react-navigation/core";

// export default function QRScanner() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);
//   const [text, setText] = useState("Waiting for QR code");

//   const navigation = useNavigation();

//   const UserGetonBtnClick = () => {
//     navigation.navigate("Passenger Get On");
//   };
//   const userGetoff = () => {
//     return Alert.alert(
//       "Are your sure?",
//       "Is This passenger going to get off the bus ?",
//       [
//         {
//           text: "Yes",
//           onPress: () => {
//             console.log("Yes button pressed");
//           },
//         },
//         {
//           text: "No",
//           onPress: () => {
//             console.log("No button pressed");
//           },
//         },
//       ]
//     );
//   };
//   const askForCameraPermission = () => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   };
//   // Request Camera Permission
//   useEffect(() => {
//     askForCameraPermission();
//   }, []);

//   // What happens when we scan the bar code
//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     setText(data);
//     console.log("Type: " + type + "\nData: " + data);
//   };

//   // Check permissions and return the screens
//   if (hasPermission === null) {
//     return (
//       <View style={styles.container}>
//         <Text>Requesting for camera permission</Text>
//       </View>
//     );
//   }
//   if (hasPermission === false) {
//     return (
//       <View style={styles.container}>
//         <Text style={{ margin: 10 }}>No access to camera</Text>
//         <Button
//           title={"Allow Camera"}
//           onPress={() => askForCameraPermission()}
//         />
//       </View>
//     );
//   }
//   // Return the View
//   return (
//     <View style={styles.container}>
//       <View style={styles.barcodebox}>
//         <BarCodeScanner
//           onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//           style={{ height: 400, width: 400 }}
//         />
//       </View>
//       <Text style={styles.maintext}>Scan Paasenger Smart Card From Here</Text>

//       <Text style={styles.qrTextStatus}>{text}</Text>
//       {scanned && (
//         <Button
//           title={"Scan again?"}
//           onPress={() => setScanned(false)}
//           color="tomato"
//         />
//       )}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           onPress={UserGetonBtnClick}
//           style={[styles.button, styles.buttonOutliner]}
//         >
//           <Text style={styles.buttonText}>Get on the Bus</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={userGetoff}
//           style={[styles.button, styles.buttonOutliner]}
//         >
//           <Text style={styles.buttonOutlineText}>Get off the Bus</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   maintext: {
//     marginTop: 20,
//     fontSize: 16,
//     margin: 20,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   qrTextStatus: {
//     marginTop: 10,
//     fontSize: 16,
//     margin: 20,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   barcodebox: {
//     alignItems: "center",
//     justifyContent: "center",
//     height: 300,
//     width: 300,
//     overflow: "hidden",
//     borderRadius: 30,
//     backgroundColor: "#FFBC26",
//     borderColor: "#FFBC26",
//     borderWidth: 4,
//   },
//   buttonContainer: {
//     width: "60%",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   button: {
//     width: "100%",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   buttonOutliner: {
//     backgroundColor: "#FFBC26",
//     marginTop: 10,
//     borderColor: "black",
//     borderWidth: 2,
//   },
//   buttonText: {
//     color: "black",
//     fontWeight: "700",
//     fontSize: 16,
//   },
//   buttonOutlineText: {
//     color: "balck",
//     fontWeight: "700",
//     fontSize: 16,
//   },
// });

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/core";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

export default function DriverQRScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Waiting for QR code");
  const [QRdata, setQRdata] = useState("");
  const [token, settoken] = useState("");

  const navigation = useNavigation();

  const gettoken = async () => {
    const token = await AsyncStorage.getItem("Token");
    settoken(token);
  };

  useEffect(() => {
    gettoken();
  }, []);

  const UserGetonBtnClick = () => {
    navigation.navigate("PassengerGetOnScreen", { QRdata });
  };

  const userGetoff = async () => {
    return Alert.alert(
      "Are your sure?",
      "Is This passenger going to get off the bus ?",
      [
        {
          text: "Yes",
          onPress: async () => {
            const data = { QRToken: QRdata };

            await axios
              .post(
                "https://ticketing-backend.azurewebsites.net/api/driver/passengerGetOff",
                data,
                {
                  headers: {
                    Authorization: token,
                  },
                }
              )
              .then((res) => {
                if (res.data.success) {
                  Alert.alert("Passenger Get Off");
                } else {
                  Alert.alert("Passenger Get Off");
                }
              })
              .catch((err) => {
                Alert.alert("Passenger Get Off");
              });
          },
        },
        {
          text: "No",
          onPress: () => {
            console.log("No button pressed");
          },
        },
      ]
    );
  };
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText("QR code scanned");
    setQRdata(data);
    console.log("Type: " + type + "\nData: " + data);
  };

  const handleScanAgain = () => {
    setScanned(false);
    setText("Waiting for QR code");
    setQRdata("");
  };
  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.maintext}>Scan Paasenger Smart Card From Here</Text>
      <Text style={styles.qrTextStatus}>{text}</Text>
      {scanned && (
        <View>
          <Button
            title={"Scan again?"}
            onPress={handleScanAgain}
            color="tomato"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={UserGetonBtnClick}
              style={[styles.button, styles.buttonOutliner]}
            >
              <Text style={styles.buttonText}>Get on the Bus</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={userGetoff}
              style={[styles.button, styles.buttonOutliner]}
            >
              <Text style={styles.buttonOutlineText}>Get off the Bus</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  maintext: {
    marginTop: 20,
    fontSize: 16,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  qrTextStatus: {
    marginTop: 10,
    fontSize: 16,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    width: 400,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "#FFBC26",
    borderWidth: 4,
    marginTop: -100,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -8,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#8A8AFF",
    borderRadius: 10,
    color: "white",
    alignItems: "center",
  },
  buttonOutliner: {
    backgroundColor: "blue",
    marginTop: 10,
    borderColor: "white",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "balck",
    fontWeight: "700",
    fontSize: 16,
  },

  group2: {
    width: 393,
    height: 851,
  },
  rect1: {
    width: Dimensions.get("window").width,
    height: 167,
    top: 0,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
  },
  group1: {
    width: Dimensions.get("window").width,
    height: 55,
    marginTop: 56,
    marginLeft: 75,
  },
  sIpsum1: {
    top: 23,
    left: 24,
    position: "absolute",
    color: "#121212",
  },
  icon2: {
    top: 0,
    left: 11,
    position: "absolute",
    color: "rgba(208,2,27,1)",
    fontSize: 27,
  },
  icon3: {
    top: 23,
    left: 0,
    position: "absolute",
    color: "rgba(74,144,226,1)",
    fontSize: 34,
  },
  sIpsum1Stack: {
    top: 0,
    left: 19,
    width: 27,
    height: 57,
    position: "absolute",
  },
  icon1: {
    top: 6,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
  },
  sIpsum1StackStack: {
    width: 46,
    height: 57,
  },
  loremIpsum1: {
    top: 13,
    left: 13,
    position: "absolute",
    color: "#121212",
  },
  stsSriLanka1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 21,
  },
  loremIpsum1Stack: {
    width: 140,
    height: 26,
    marginLeft: 12,
  },
  loremIpsum2: {
    width: 1000,
    color: "rgba(255,255,255,1)",
    fontSize: 12,
  },
  loremIpsum1StackColumn: {
    width: 195,
    marginLeft: 2,
    marginTop: 13,
    marginBottom: 4,
  },
  sIpsum1StackStackRow: {
    height: 57,
    flexDirection: "row",
  },
  dashboard: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 20,
    marginLeft: 9,
  },
  rect2: {
    top: 7,
    left: 0,
    width: 347,
    height: 130,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
  },
  driverProfile: {
    color: "#121212",
    fontSize: 18,
    marginTop: 58,
    marginLeft: 32,
  },
  image: {
    top: 0,
    left: 168,
    width: 188,
    height: 145,
    position: "absolute",
  },
  rect2Stack: {
    width: 356,
    height: 145,
    marginTop: 49,
    marginLeft: 23,
  },
  rect4: {
    top: 0,
    left: 0,
    width: 347,
    height: 130,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
  },
  bus: {
    color: "#121212",
    fontSize: 18,
    marginTop: 55,
    marginLeft: 37,
  },
  image2: {
    top: 0,
    left: 126,
    width: 236,
    height: 132,
    position: "absolute",
  },
  rect4Stack: {
    width: 362,
    height: 132,
    marginTop: 29,
    marginLeft: 23,
  },
  rect3: {
    top: 0,
    left: 0,
    width: 347,
    height: 130,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
  },
  scanPassengerQr: {
    color: "#121212",
    fontSize: 18,
    marginTop: 53,
    marginLeft: 32,
  },
  image3: {
    top: 0,
    left: 165,
    width: 194,
    height: 144,
    position: "absolute",
  },
  rect3Stack: {
    width: 359,
    height: 144,
    marginTop: 32,
    marginLeft: 23,
  },
  cupertinoFooter1: {
    height: 58,
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    bottom: -4,
  },

  container1: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    width: Dimensions.get("window").width,
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon00: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 39,
    marginTop: -5,
    opacity: 0.8,
  },
  bus1: {
    fontSize: 12,
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon100: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8,
  },
  scanQr: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon300: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8,
  },
  profile: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  profile11: {
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    backgroundColor: "transparent",
    marginTop: -10,
    paddingTop: 4,
  },
});
