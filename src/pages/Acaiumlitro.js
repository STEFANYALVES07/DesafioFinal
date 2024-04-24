import { Text, Button, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Acaiumlitro() {
  const navigation = useNavigation();

  const UML = [
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

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.titulolitro}>{titulolitro}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={UML}
        renderItem={({ itemlitro }) => <Item title={item.titulolitro} />}
        keyExtractor={(itemlitro) => item.id}
      />
    </View>
  );
}
