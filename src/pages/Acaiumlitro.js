import React, { useState } from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../styles/StyleSheet";

export default function App() {
  const Acais = [
    { key: 1, sabor: "Açaí tradicional", valor: 30.0 },
    { key: 2, sabor: "Açaí com ninho", valor: 45.0 },
    { key: 3, sabor: "Açaí com frozen", valor: 45.0 },
  ];

  const [selectedAcai, setSelectedAcai] = useState(Acais[0].key); // Inicia com o valor da primeira pizza

  let AcaisItem = Acais.map((Acai, index) => (
    <Picker.Item key={index} value={pizza.key} label={pizza.sabor} />
  ));

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedPizza}
        onValueChange={(itemValue) => setSelectedPizza(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        {pizzasItem}
      </Picker>

      {/* Exibe detalhes da pizza selecionada se houver uma selecionada */}
      {selectedPizza !== null ? (
        <Text style={styles.text}>
          Pizza Selecionada:{" "}
          <Text style={styles.textPizza}>
            {pizzas.find((pizza) => pizza.key == selectedPizza).sabor}
          </Text>
          {" - "}
          <Text style={styles.textPrice}>
            R$ {pizzas.find((pizza) => pizza.key == selectedPizza).valor}
          </Text>
        </Text>
      ) : (
        <Text style={styles.text}>Pizza Selecionada: {" - "}</Text>
      )}
    </View>
  );
}
