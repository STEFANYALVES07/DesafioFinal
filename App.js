import React from "react";

//Stack Navigation
import { NavigationContainer } from "@react-navigation/native"; //envolver a navegação da aplicação.
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Isso permite que você use esse navegador de pilha para definir a navegação em sua aplicação.
const Tab = createBottomTabNavigator();

//paginas
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
