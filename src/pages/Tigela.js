import { View, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Tigela() {
  const navigation = useNavigation();

  const LISTA = [
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

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={LISTA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
