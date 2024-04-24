import { View, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/StyleSheet";
import TxtComponents from "../components/TxtComponents";
import BtnComponent from "../components/BtnComponent";
import Modal1 from "../components/ModalComponent";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";

const data = [
  {
    imgUrl:
      "https://images.pexels.com/photos/1382726/pexels-photo-1382726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/2525714/pexels-photo-2525714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function CarouselCardItem({ item }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.img}
        resizeMode="stretch"
      />
    </View>
  );
}

export default function Home() {
  //constante para rotas
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.logo} source={require("../imagens/logo.jpeg")} />

      <TxtComponents styletxt={styles.txt} txt="Jam's Açaí" />
      <TxtComponents
        styletxt={styles.endereco}
        txt="Av.Ampelio gazetta, 413 - Nova Odessa"
      />
      <TxtComponents
        styletxt={styles.entrega}
        txt="Entrega: 40 min - 1h               Retirada: 30min"
      />
      <TouchableOpacity style={styles.hrBtn} onPress={() => visModal(true)}>
        <TxtComponents styletxt={styles.hr} txt="Horários" />
      </TouchableOpacity>

      {/*Importando o Modal*/}
      <Modal1 />

      <ScrollView>
        <Carousel
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={390}
          itemWidth={390}
          autoplay={true}
          autoplayInterval={3000}
          loop={true}
          layout={"tinder"}
          layoutCardOffset={`9`}
        />
        <TxtComponents styletxt={styles.montar} txt="Monte seu Açaí" />

        <BtnComponent />
      </ScrollView>
      <View style={styles.footer}></View>
    </View>
  );
}
