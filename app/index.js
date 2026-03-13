import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppFontLoader from "../components/AppFontLoader";

import SplashScreen from "./SplashScreen";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import Onboarding4 from "./Onboarding4";

import OtpScreen from "./OtpScreen";
import PhoneScreen from "./PhoneScreen";
import HomeScreen from "./HomeScreen";

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
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </AppFontLoader>
  );
}