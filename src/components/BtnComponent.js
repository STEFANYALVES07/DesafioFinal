import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
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
        <Text style={styles.tex}>Açaí no Copo</Text>
        <Text style={styles.preço}>A partir de $14,00</Text>
        <Image style={styles.copo} source={require("../imagens/copo.jpeg")} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.acaiBowl}
        onPress={() => navigation.navigate("Tigela")}
      >
        <Text style={styles.tex}>Açaí na tigela</Text>
        <Text style={styles.preço}>A partir de $25,00</Text>
        <Image
          style={styles.tigela}
          source={require("../imagens/tigela2.jpg")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.acaiBowl}
        onPress={() => navigation.navigate("Acaiumlitro")}
      >
        <Text style={styles.tex}>Pote de açaí 1L</Text>
        <Text style={styles.preço}>$25,00</Text>
        <Image style={styles.taça} source={require("../imagens/1k.jpeg")} />
      </TouchableOpacity>
    </View>
  );
}

//onPress={() => navigation.navigate("Copo")}
