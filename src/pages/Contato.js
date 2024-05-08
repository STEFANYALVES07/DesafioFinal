import { View, Image, Text, ScrollView } from "react-native";
import { styles } from "../styles/StyleSheet";
import TxtComponents from "../components/TxtComponents";

export default function Contato() {
  const image = {
    uri: "https://i.pinimg.com/originals/06/16/9a/06169ab914a15be11bcb0b8dda3a8f13.jpg",
  };

  const image2 = {
    uri: "https://fundacaocargill.org.br/wp-content/uploads/2023/07/acai-conheca-a-versatilidade-do-alimento-1.jpg",
  };

  const image3 = {
    uri: "https://minhasaude.proteste.org.br/wp-content/uploads/2022/06/acai-com-frutas-granola.png.webp",
  };

  const img4 = {
    uri: "https://www.pinegocios.com.br/kcfinder/images/conecpt.jpeg",
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
        <Image
          style={{
            height: 250,
            width: "100%",
            bottom: -60,
            alignItems: "center",
            borderColor: "black",
            borderWidth: 1,
          }}
          resizeMode="cover"
          source={img4}
        />
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
        <Image
          style={{
            height: 250,
            width: "100%",
            bottom: 300,
            alignItems: "center",
            borderColor: "black",
            borderWidth: 1,
          }}
          resizeMode="cover"
          source={image2}
        />

        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TxtComponents
            styletxt={styles.txt6}
            txt="Para nós, açaí não é apenas uma fruta, é um estilo de vida. Queremos 
            que nosso açaí faça parte da sua rotina, seja nos momentos de lazer, nas 
            atividades físicas ou mesmo nos momentos de descanso. Queremos que você se 
            sinta bem, energizado e feliz a cada tigela de Jam's Açaí que consumir."
          />
        </View>
        <Image
          style={{
            height: 250,
            width: "100%",
            bottom: 230,
            alignItems: "center",
            borderColor: "black",
            borderWidth: 1,
          }}
          resizeMode="cover"
          source={image3}
        />
      </ScrollView>
    </View>
  );
}
