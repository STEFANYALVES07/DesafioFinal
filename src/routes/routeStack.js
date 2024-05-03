import React from "react";

//Stack Navigation
import { NavigationContainer } from "@react-navigation/native"; //envolver a navegação da aplicação.
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Isso permite que você use esse navegador de pilha para definir a navegação em sua aplicação.
const Stack = createNativeStackNavigator();

//paginas
import Home from "../pages/Home";
import Copo from "../pages/Copo";
import Tigela from "../pages/Tigela";
import Acaiumlitro from "../pages/Acaiumlitro";

export default function RouteStack() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Copo" component={Copo} />
        <Stack.Screen name="Tigela" component={Tigela} />
        <Stack.Screen name="Acaiumlitro" component={Acaiumlitro} />
      </Stack.Navigator>
  );
}
