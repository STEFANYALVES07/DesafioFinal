import { View, Modal, FlatList, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/StyleSheet";

export default function Horarios() {
  const horarios = [
    { id: 1, text: "DOM                 14:00-23:00" },
    { id: 1, text: "SEG                 14:00-22:30" },
    { id: 1, text: "TER                 14:00-22:30" },
    { id: 1, text: "QUA                 14:00-22:30" },
    { id: 1, text: "QUI                 14:00-22:30" },
    { id: 1, text: "SEX                 14:00-23:00" },
    { id: 1, text: "SAB                 14:00-23:00" },
  ];

  const rdItem = ({ item }) => (
    <View>
      <Text style={styles.dia}>{item.text}</Text>
      <Text style={styles.dia}>{item.hora}</Text>
    </View>
  );
  return (
    <View style={styles.Modal1}>
      <View style={styles.header2}></View>
      <FlatList
        data={horarios}
        renderItem={rdItem}
        keyExtractor={(horarios) => horarios.id}
      />
    </View>
  );
}
