import React from "react";

//Stack Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Foundation from "@expo/vector-icons/Foundation";

// Isso permite que você use esse navegador de pilha para definir a navegação em sua aplicação.
const Tab = createBottomTabNavigator();

//paginas
import RouteStack from "./routeStack";
import Horarios from "../pages/Horarios";
import Contato from "../pages/Contato";
import Localizacao from "../pages/Localizacao";

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarStyle: { backgroundColor: "#6e07ad" } }}
    >
      <Tab.Screen
        name="Home"
        component={RouteStack}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <AntDesign name="home" size={30} color="white" />;
          },
          tabBarActiveTintColor: "white",
        }}
      />
      <Tab.Screen
        name="Horarios"
        component={Horarios}
        options={{
          tabBarIcon: () => {
            return <AntDesign name="clockcircleo" size={30} color="white" />;
          },
          tabBarActiveTintColor: "white",
        }}
      />
      <Tab.Screen
        name="Localização"
        component={Localizacao}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Ionicons name="location-outline" size={35} color="white" />;
          },
          tabBarActiveTintColor: "white",
        }}
      />
      <Tab.Screen
        name="Quem Somos"
        component={Contato}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <AntDesign name="exclamationcircleo" size={30} color="white" />
            );
          },
          tabBarActiveTintColor: "white",
        }}
      />
    </Tab.Navigator>
  );
}
