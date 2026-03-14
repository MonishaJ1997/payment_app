import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppFontLoader from "../components/AppFontLoader";

import SplashScreen from "./SplashScreen";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import Onboarding4 from "./Onboarding4";
import Signin from "./Signin";
import Register from "./Register";
import OtpScreen from "./OtpScreen";
import PhoneScreen from "./PhoneScreen";
import HomeScreen from "./HomeScreen";
import Home from "./Home";

import Paying from "./Paying";
import PaymentDetails from "./PaymentDetails";
import SendMoney from "./SendMoney";
import Success from "./Success";
import Wallet from "./Wallet";
import Profile from "./Profile";
import Sidebar from "./Sidebar";


const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <AppFontLoader>
      {/* Just the stack navigator, no NavigationContainer here */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboard1" component={Onboarding1} />
        <Stack.Screen name="Onboard2" component={Onboarding2} />
        <Stack.Screen name="Onboard3" component={Onboarding3} />
        <Stack.Screen name="Onboard4" component={Onboarding4} />
        <Stack.Screen name="OTP" component={OtpScreen} />
        <Stack.Screen name="Phone" component={PhoneScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
       
        <Stack.Screen name="Paying" component={Paying} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
        <Stack.Screen name="SendMoney" component={SendMoney} />
         <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Sidebar" component={Sidebar} />
      </Stack.Navigator>
    </AppFontLoader>
  );
}