import { View, FlatList, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Tigela() {
  const lista = [
    {
      id: "1",
      title: "Tigela de 800ml",
    },
    {
      id: "2",
      title: "Tigela de 1L",
    },
    {
      id: "3",
      title: "Tigela de 1,5L",
    },
  ];

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={lista}
        renderItem={Item}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
