import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [nic, setnic] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [country, setcountry] = useState("");
  const [passportNo, setpassportNo] = useState("");
  const [userExpDate, setuserExpDate] = useState("");
  const [role, setrole] = useState("");
  const [value, setValue] = useState(null);

  const data = [
    { label: "foriegncustomer", value: "foriegncustomer" },
    { label: "localcustomer", value: "localcustomer" },
  ];

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
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

  const registerUser = () => {
    const URL = "https://hostingbackend.herokuapp.com/api/passenger/signupuser";

    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo: phoneNo,
      nic: nic,
      password: password,
      country: country,
      passportNo: passportNo,
      userExpDate: userExpDate,
      role: role,
    };

    axios
      .post(URL, payload)
      .then((res) => {
        Alert.alert("Registeration Successfull");
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Error",
          "Registration Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.reglogo}
        source={{
          uri: "https://thumbs.dreamstime.com/b/people-waiting-bus-bus-stop-bus-arriving-flat-style-people-waiting-bus-bus-stop-162194770.jpg",
        }}
      />
      <Text style={styles.text}> Passenger Registration</Text>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        style={{ width: "100%" }}
      >
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
          placeholder="Select Your Role"
          searchPlaceholder="Search..."
          statusBarIsTranslucent={true}
          value={value}
          renderItem={renderItem}
          onChange={(item) => {
            setrole(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
        />

        <TextInput
          placeholder="First Name"
          onChange={(e) => setfirstName(e.nativeEvent.text)}
          value={firstName}
          style={styles.textInput}
        ></TextInput>

        <TextInput
          placeholder="Last Name"
          onChange={(e) => setlastName(e.nativeEvent.text)}
          value={lastName}
          style={styles.textInput}
        ></TextInput>

        <TextInput
          placeholder="Email Address"
          onChange={(e) => setemail(e.nativeEvent.text)}
          value={email}
          style={styles.textInput}
        ></TextInput>

        <TextInput
          placeholder="Phone Number"
          onChange={(e) => setphoneNo(e.nativeEvent.text)}
          value={phoneNo}
          style={styles.textInput}
        ></TextInput>

        <TextInput
          placeholder="NIC Number"
          onChange={(e) => setnic(e.nativeEvent.text)}
          value={nic}
          style={styles.textInput}
        ></TextInput>

        <TextInput
          onChange={(e) => setcountry(e.nativeEvent.text)}
          value={country}
          placeholder="Country"
          style={styles.textInput}
        ></TextInput>

        <TextInput
          onChange={(e) => setpassportNo(e.nativeEvent.text)}
          value={passportNo}
          placeholder="Passport Number"
          style={styles.textInput}
        ></TextInput>

        <TextInput
          onChange={(e) => setuserExpDate(e.nativeEvent.text)}
          value={userExpDate}
          placeholder="Expire Date"
          style={styles.textInput}
        ></TextInput>

        {/* <TextInput
          onChange={(e) => setrole(e.nativeEvent.text)}
          value={role}
          placeholder="ForiegnCustomer or LocalCustomer? "
          style={styles.textInput}
        ></TextInput> */}

        <TextInput
          secureTextEntry
          onChange={(e) => setpassword(e.nativeEvent.text)}
          value={password}
          placeholder="Password"
          style={styles.textInput}
        ></TextInput>

        <TextInput
          secureTextEntry
          onChange={(e) => setcpassword(e.nativeEvent.text)}
          value={cpassword}
          placeholder="Confirm Password"
          style={styles.textInput}
        ></TextInput>

        <TouchableOpacity
          style={[styles.containerbtn, styles.ButtonDark]}
          onPress={() => {
            registerUser();
          }}
        >
          <Text style={styles.signUpbtn}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginBottom: 20,
    fontSize: 26,
    marginLeft: 70,
    fontWeight: "bold",
  },

  reglogo: {
    width: 430,
    height: 180,
    marginTop: -18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textInput: {
    height: 43,
    width: 318,
    backgroundColor: "#DBE9FA",
    borderRadius: 100,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#000000",
    fontSize: 18,
    marginTop: 13,
    marginLeft: 53,
  },
  ButtonDark: {
    height: 35,
    width: 150,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 20,
    marginLeft: 135,
  },
  containerbtn: {
    backgroundColor: "#79BAEC",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  signUpbtn: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
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
  item: {
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
});

export default RegisterScreen;
