import { Text, FlatList, View } from "react-native";
import { styles } from "../styles/StyleSheet";

import { useNavigation } from "@react-navigation/native";

export default function Copo() {
  const navigation = useNavigation();

  const copo = [
    { id: "1", text: "Copo 300ml" },
    { id: "2", text: "Copo 500ml" },
    { id: "3", text: "Copo 770ml" },
  ];

  const rdItem = ({ item }) => (
    <View>
      <Text style={styles.Copo}>{item.text}</Text>
    </View>
  );
  return (
    <View>
      <Text> Teste</Text>
      <FlatList
        data={copo}
        renderItem={rdItem}
        keyExtractor={(copo) => copo.id}
      />
    </View>
  );
}
