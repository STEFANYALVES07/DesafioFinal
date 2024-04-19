import { View, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { styles } from "./src/styles/StyleSheet";
import TxtComponents from "./src/components/TxtComponents";
import BtnComponent from "./src/components/BtnComponent";
import Modal1 from "./src/components/ModalComponent";
import carrosel from "./src/components/CarrosselComponent";
import React, { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.logo} source={require("./src/imagens/logo.jpeg")} />

      <TxtComponents styletxt={styles.txt} txt="Jam's Açaí" />
      <TxtComponents
        styletxt={styles.endereco}
        txt="Av.Ampelio gazetta, 413 - Nova Odessa"
      />
      <TxtComponents
        styletxt={styles.entrega}
        txt="Entrega: 40 min - 1h               Retirada: 30min"
      />
      <TouchableOpacity style={styles.horario} onPress={() => visModal(true)}>
        <Text>Horários</Text>
      </TouchableOpacity>
      {/*Importando o Modal*/}
      <Modal1 />

      <ScrollView>
        <Image
          style={styles.img}
          source={require("./src/imagens/açaí1.jpeg")}
        />
        <TxtComponents styletxt={styles.montar} txt="Monte seu Açaí" />
        <BtnComponent />
      </ScrollView>
      <View style={styles.footer}></View>
    </View>
  );
}
