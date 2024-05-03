import { View, Image, Text, ScrollView } from "react-native";
import { styles } from "../styles/StyleSheet";
import TxtComponents from "../components/TxtComponents";

export default function Contato() {
  const image = {
    uri: "https://i.pinimg.com/originals/06/16/9a/06169ab914a15be11bcb0b8dda3a8f13.jpg",
  };
  return (
    <View style={styles.container2}>
      <View style={styles.header2}></View>
      <ScrollView>
        <Image
          style={{ height: 300, width: "100%" }}
          resizeMode="cover"
          source={image}
        />
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, color: "purple", fontWeight: 700 }}>
            {" "}
            Quem Somos?
          </Text>
          <Text style={{ fontSize: 28, width: 300, top: 10 }}>
            Entenda como e por que Açaí Jam's se transformou em uma franquia de
            sucesso
          </Text>
        </View>

        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TxtComponents styletxt={styles.txt1} txt="Conheça a Jam's Açaí:" />
          <TxtComponents
            styletxt={styles.txt2}
            txt="A Jam's Açaí nasceu do amor e da união de quatro pessoas especiais: 
      João, Ana, Maykon e Stefany. Nossa história começoucom a paixão pelo açaí e a vontade de compartilhar esse amor 
      com o mundo. Desde então, trabalhamos juntos para oferecer a você o melhor açaí, feito com carinho e dedicação."
          />
        </View>

        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            height: 500,
          }}
        >
          <TxtComponents
            styletxt={styles.txt3}
            txt="Nossa Missão: Levar Sabor e Saúde Até Você"
          />
        </View>
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TxtComponents
            styletxt={styles.txt4}
            txt="Nossa missão vai além de simplesmente vender açaí. Queremos levar até 
        você uma experiência única, repleta de sabor e saúde. Por isso, selecionamos 
        os melhores ingredientes e buscamos sempre inovar para oferecer produtos que 
        atendam às suas expectativas e superem suas vontades."
          />
        </View>
      </ScrollView>
    </View>
  );
}
