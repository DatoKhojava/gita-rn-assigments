import * as React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

//screens
import CatalgueScreen from "../screens/CatalogueScreen";
import BookDetailScreen from "../screens/BookDetailScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen
        name="Home"
        component={CatalgueScreen}
        options={{
          drawerIcon: () => <Ionicons name="home-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Book Details"
        component={BookDetailScreen}
        options={{
          drawerIcon: () => <Ionicons name="basket-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          drawerIcon: () => <Ionicons name="cart-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          drawerIcon: () => <Ionicons name="card-outline" size={22} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
