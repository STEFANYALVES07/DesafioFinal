import { Text } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function TxtComponents({ txt, styletxt }) {
  return <Text style={styletxt}>{txt}</Text>;
}
