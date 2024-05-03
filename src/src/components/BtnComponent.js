import React from "react";
import { View, TouchableOpacity, Image, Text , ImageBackground } from "react-native";
import { styles } from "../styles/StyleSheet";
import TxtComponents from "./TxtComponents";
import { useNavigation } from "@react-navigation/native";

export default function BtnComponent() {
  const handleAcaiPress = () => {
    console.log("Açai do Jam's o melhor!");
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.acaiBowl}
        onPress={() => navigation.navigate("Copo")}
      >
        <ImageBackground 
        style={styles.copo} 
        source={require("../imagens/copo.jpeg")}>
          <View style={styles.imgView}>
        <Text style={styles.tex}>Açaí no Copo</Text>
        <Text style={styles.preco}>A partir de $14,00</Text>
        </View>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.acaiBowl}
        onPress={() => navigation.navigate("Tigela")}
      >
        <ImageBackground
          style={styles.tigela22}
          source={require("../imagens/tigela2.jpg")}>
            <View style={styles.imgView}>
          <Text style={styles.tex}>Açaí na tigela</Text>
          <Text style={styles.preco}>A partir de $25,00</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.acaiBowl}
        onPress={() => navigation.navigate("Acaiumlitro")}
      >
        <ImageBackground
         style={styles.taça} 
         source={require("../imagens/1k.jpeg")}>
          <View style={styles.imgView}>
           <Text style={styles.tex}>Pote de açaí 1L</Text>
           <Text style={styles.preco}>$25,00</Text>
           </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

//onPress={() => navigation.navigate("Copo")}
