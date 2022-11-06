import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./Screens/CommonScreens/LoadingScreen";
import PassengerPage from "./Screens/CommonScreens/PassengerPage";
import LocalPassengerProfile from "./Screens/LocalPassenger/LocalPassengerProfile";
import UpdateLocalPassengerProfile from "./Screens/LocalPassenger/UpdateLocalPassengerProfile";
import AllBusDetails from "./Screens/CommonScreens/AllBusDtails";
import ForiegnPassengerProfile from "./Screens/ForiegnPassenger/ForiegnPassengerProfile";
import UpdateForiegnPassengerProfile from "./Screens/ForiegnPassenger/UpdateForiegnPassengerProfile";
import DriverProfile from "./Screens/Inspector/DriverProfile";
import UpdateDriverProfile from "./Screens/Inspector/UpdateDriverProfile";
import QRScanner from "./Screens/Inspector/QRScanner";
import Login from "./Screens/CommonScreens/Login";
import Dashboard from "./Screens/CommonScreens/Dashboard";
import GetAllUser from "./Screens/Inspector/GetAllUser";
import AddCard from "./Screens/CommonScreens/AddCard";
import MyQr from "./Screens/ForiegnPassenger/MyQr";
import AllTravelHistory from "./Screens/ForiegnPassenger/AllTravelHistory";

import RegisterScreen from "./Screens/CommonScreens/RegisterScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingPage">
        <Stack.Screen name="LoadingPage" component={LoadingScreen} />
        <Stack.Screen name="PassengerPage" component={PassengerPage} />
        <Stack.Screen
          name="LocalPassengerProfile"
          component={LocalPassengerProfile}
        />
        <Stack.Screen
          name="UpdateLocalPassenger"
          component={UpdateLocalPassengerProfile}
        />

        <Stack.Screen
          name="MyQr"
          component={MyQr}
        />

        <Stack.Screen name="AllBusRoutes" component={AllBusDetails} />
        <Stack.Screen
          name="ForiegnPassengerUpdate"
          component={UpdateForiegnPassengerProfile}
        />
        <Stack.Screen
          name="ForiegnPassengerProfile"
          component={ForiegnPassengerProfile}
        />
        <Stack.Screen
          name="AllTravelHistory"
          component={AllTravelHistory}
        />
        <Stack.Screen name="DriverProfile" component={DriverProfile} />
        <Stack.Screen name="DriverUpdate" component={UpdateDriverProfile} />
        <Stack.Screen name="QRScanner" component={QRScanner} />

        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="GetAllUser" component={GetAllUser} />
        <Stack.Screen name="AddCard" component={AddCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
