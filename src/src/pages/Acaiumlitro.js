import { Text, Button, View, FlatList } from "react-native";
import { styles } from "../styles/StyleSheet";

import { useNavigation } from "@react-navigation/native";

export default function Acaiumlitro() {
  const navigation = useNavigation();

  const Acai = [
    {
      id: "1",
      title: "Açai trufado c/Nutella",
    },
    {
      id: "2",
      title: "Açai Pote  ",
    },
    {
      id: "3",
      title: "Tigela de 1,5L",
    },
  ];

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.titulolitro}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={Acai}
        renderItem={ Item }
        keyExtractor={(Acai) => Acai.id}
      />
    </View>
  );
}
