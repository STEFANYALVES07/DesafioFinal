import { View, Modal, FlatList, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import TxtComponents from "../components/TxtComponents";
import { styles } from "../styles/StyleSheet";

export default function Modal1() {
  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };
  const horarios = [
    { id: 1, text: "DOM", hora: "14:00-23:00" },
    { id: 1, text: "SEG", hora: "14:00-22:30" },
    { id: 1, text: "TER", hora: "14:00-22:30" },
    { id: 1, text: "QUA", hora: "14:00-22:30" },
    { id: 1, text: "QUI", hora: "14:00-22:30" },
    { id: 1, text: "SEX", hora: "14:00-23:00" },
    { id: 1, text: "SAB", hora: "14:00-23:00" },
  ];

  const rdItem = ({ item }) => (
    <View>
      <Text style={styles.dia}>{item.text}</Text>
      <Text style={styles.dia}>{item.hora}</Text>
    </View>
  );
  return (
    <Modal animationType="fade" visible={visible}>
      <View style={styles.Modal1}>
        <View style={styles.header2}>
          <TouchableOpacity onPress={() => visModal(false)}>
            <TxtComponents styletxt={styles.textovoltar} txt="< Horários" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={horarios}
          renderItem={rdItem}
          keyExtractor={(horarios) => horarios.id}
        />
      </View>
    </Modal>
  );
}
