import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Localizacao() {
  const handleAddressPress = () => {
    // Abre o endereço no Google Maps quando o texto for clicado
    Linking.openURL("https://www.google.com/maps?q=SESI+436");
  };

  return (
    <View style={styles.container2}>
      <View style={styles.header}></View>
      <Image style={styles.logo} source={require("../imagens/logo.jpeg")} />
      <Text style={styles.titlemap}>Localização</Text>
      <View style={styles.mapContainer}>
        <TouchableOpacity onPress={handleAddressPress}>
          <Image
            source={require("../imagens/Mapa.png")}
            style={styles.mapImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleAddressPress}>
        <Text style={styles.end}>
          Endereço: SESI 436 - R. dos Jacarandás, 100 - Jardim das Palmeiras,
          Nova Odessa - SP, 13460-000
        </Text>
      </TouchableOpacity>
    </View>
  );
}
