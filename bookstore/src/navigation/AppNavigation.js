import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import HomeScreen from "../screens/HomeScreen";
import SigninScreen from "../screens/SigninScreen";
import NomenclatureScreen from "../screens/NomenclatureScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Nomenclature" component={NomenclatureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
