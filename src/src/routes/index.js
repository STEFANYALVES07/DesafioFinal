import React from "react";

//Stack Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome from "@expo/vector-icons/FontAwesome"
import AntDesign from "@expo/vector-icons/AntDesign"
import Ionicons from "@expo/vector-icons/Ionicons"
import Foundation from "@expo/vector-icons/Foundation"

// Isso permite que você use esse navegador de pilha para definir a navegação em sua aplicação.
const Tab = createBottomTabNavigator();

//paginas
import Tigela from "../pages/Tigela";
import Acaiumlitro from "../pages/Acaiumlitro";
import RouteStack from "./routeStack";
import Horarios from "../pages/Horarios";

export default function Routes() {
  return (
      <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarStyle: {backgroundColor: "#6e07ad"}}}>
        <Tab.Screen name="Home" component={RouteStack} options={{
            headerShown: false,
            tabBarIcon:  () => {
                return <AntDesign name="home" size={30} color="white" />
            },
            tabBarActiveTintColor: "white"
            }}/>
        <Tab.Screen name="Horarios" component={Horarios} options={{
            tabBarIcon:  () => {
                return <AntDesign name="clockcircleo" size={30} color="white" />
            },
            tabBarActiveTintColor: "white"
            
            }} />
        <Tab.Screen name="Localização" component={Tigela}  options={{
            tabBarIcon:  () => {
                return <Ionicons name="location-outline" size={35} color="white" /> 
            },
            tabBarActiveTintColor: "white"
            }}/>
        <Tab.Screen name="Contato" component={Contato} options={{
            tabBarIcon:  () => {
                return <Foundation name="telephone" size={35} color="white" />
            },
            tabBarActiveTintColor: "white"
            }} />
      </Tab.Navigator>
  );
}
