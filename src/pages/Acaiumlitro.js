import { Text, Button, View, FlatList } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Acaiumlitro() {
  const Acais = [
    { id: "1", title: "Açai trufado c/Nutella" },
    { id: "2", title: "Açai Pote  " },
    { id: "3", title: "Tigela de 1,5L" },
  ];
  const [selectedAcai, setSelectedAcai] = useState(Acais[0].key);
  let AcaisItem = Acais.map((Acai, index) => (
    <Picker.Item key={index} value={Acai.key} label={Acai.title} />
  ));

  return (
    <View style={styles.container2}>
      <View style={styles.header}></View>
      <Image style={styles.logo} source={require("../imagens/logo.jpeg")} />
      <Text style={styles.title}>Escolha sua opção</Text>
      <Picker
        selectedValue={selectedAcai}
        onValueChange={(itemValue) => setSelectedAcai(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        {AcaisItem}
      </Picker>
      {selectedAcai !== null ? (
        <Text style={styles.tamanhoo}>
          {" "}
          <Text style={styles.textTigela}>
            {Acais.find((Acai) => Acai.key == selectedAcai).title}
          </Text>
          <Text style={styles.textPrice}>
            R$ {Acais.find((acai) => acai.key == selectedAcai).valor}
          </Text>
          {" - "}
        </Text>
      ) : (
        <Text style={styles.selecionado}>Pizza Selecionada: {" - "}</Text>
      )}
    </View>
  );
}
