import React from "react";

//Stack Navigation
import { NavigationContainer } from "@react-navigation/native"; //envolver a navegação da aplicação.
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //cria um navegador de pilha

// Isso permite que você use esse navegador de pilha para definir a navegação em sua aplicação.
const Stack = createNativeStackNavigator();

//paginas
import Home from "./src/pages/Home";
import Copo from "./src/pages/Copo";
import Tigela from "./src/pages/Tigela";
import Acaiumlitro from "./src/pages/Acaiumlitro";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Copo" component={Copo} />
        <Stack.Screen name="Tigela" component={Tigela} />
        <Stack.Screen name="Acaiumlitro" component={Acaiumlitro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
