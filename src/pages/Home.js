import { View, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/StyleSheet";
import TxtComponents from "../components/TxtComponents";
import BtnComponent from "../components/BtnComponent";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";

const data = [
  {
    imgUrl:
      "https://i.pinimg.com/564x/1d/3f/31/1d3f31871f9d317f381ec33aaf9c3921.jpg",
  },
  {
    imgUrl:
      "https://i.pinimg.com/564x/73/64/7c/73647c69c6e43d1964ed3f79fcc36c5e.jpg",
  },
  {
    imgUrl:
      "https://i.pinimg.com/236x/11/16/d8/1116d87a6748a03df56009fd8f20c102.jpg",
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

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.logo} source={require("../imagens/logo.jpeg")} />

      <TxtComponents styletxt={styles.txt} txt="Jam's Açaí" />
      <ScrollView>
        <TxtComponents
          styletxt={styles.entrega}
          txt="Entrega: 40 min - 1h               Retirada: 30min"
        />

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
