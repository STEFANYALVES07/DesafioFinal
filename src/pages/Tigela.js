import React, { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../styles/StyleSheet";

export default function Tigela() {
  {
    /* Definindo os valores da TIGELA*/
  }
  const Tigela = [
    { key: 1, Tamanho: "Tigela 800ml", valor: 25.0 },
    { key: 2, Tamanho: "Tigela 1L", valor: 30.0 },
    { key: 3, Tamanho: "Tigela 1,5L", valor: 40.0 },
  ];
  const [selectedTigela, setSelectedTigela] = useState(Tigela[0].key);
  let TigelaItem = Tigela.map((Tigela, index) => (
    <Picker.Item key={index} value={Tigela.key} label={Tigela.Tamanho} />
  ));

  {
    /* Definindo os valores da TIPOS*/
  }
  const Tipos = [
    { key: 1, acai: "Açaí tradicional" },
    { key: 2, acai: "Açaí com ninho" },
    { key: 3, acai: "Açai com frozen" },
  ];
  const [selectedTipos, setSelectedTipos] = useState(Tipos[0].key);
  let TiposItem = Tipos.map((Tipos, index) => (
    <Picker.Item key={index} value={Tipos.key} label={Tipos.acai} />
  ));

  {
    /* Definindo os valores da FRUTA*/
  }
  const Fruta = [
    { key: 1, Grupo: "Banana" },
    { key: 2, Grupo: "Morango" },
    { key: 3, Grupo: "Uva" },
  ];
  const [selectedFruta, setSelectedFruta] = useState(Fruta[0].key);
  let FruraItem = Fruta.map((Fruta, index) => (
    <Picker.Item key={index} value={Fruta.key} label={Fruta.Grupo} />
  ));

  /* Definindo os valores da COBERTURA */
  const Cobertura = [
    { key: 1, Grup: "Cobertura de Chocolate" },
    { key: 2, Grup: "Cobertura de Leite Condensado" },
    { key: 3, Grup: "Cobertura de Morango" },
  ];
  const [selectedCobertura, setSelectedCobertura] = useState(Cobertura[0].key);
  let CoberturaItem = Cobertura.map((Cobertura, index) => (
    <Picker.Item key={index} value={Cobertura.key} label={Cobertura.Grup} />
  ));

  /* Definindo os valores da ACOMPANHAMENTO */
  const Acompanhamento = [
    { key: 1, acomp: "Leite em Pó" },
    { key: 2, acomp: "Paçoca" },
    { key: 3, acomp: "Bis" },
    { key: 4, acomp: "Ovomaltine" },
  ];
  const [selectedAcompanhamento, setSelectedAcompanhamento] = useState(
    Acompanhamento[0].key
  );
  let AcompanhamentoItem = Acompanhamento.map((Acompanhamento, index) => (
    <Picker.Item
      key={index}
      value={Acompanhamento.key}
      label={Acompanhamento.acomp}
    />
  ));

  return (
    <View style={styles.container2}>
      <View style={styles.header}></View>
      <Image style={styles.logo} source={require("../imagens/logo.jpeg")} />

      {/* Primeiro Titulo e  picker TAMANHO*/}
      <Text style={styles.title}>Escolha o tamanho da sua tigela</Text>
      <Picker
        selectedValue={selectedTigela}
        onValueChange={(itemValue) => setSelectedTigela(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        {TigelaItem}
      </Picker>
      {/* Primeiro Titulo e  picker TIPOS*/}
      <Text style={styles.title}>Escolha sua opção</Text>
      <Picker
        selectedValue={selectedTipos}
        onValueChange={(itemValue) => setSelectedTipos(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        {TiposItem}
      </Picker>
      {/* Segundo Titulo e  picker FRUTA*/}
      <Text style={styles.title}>Escolha uma fruta</Text>
      <Picker
        selectedValue={selectedFruta}
        onValueChange={(itemValue) => setSelectedFruta(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        {FruraItem}
      </Picker>
      {/* Segundo Titulo e  picker COBERTURA*/}
      <Text style={styles.title}>Escolha uma cobertura</Text>
      <Picker
        selectedValue={selectedCobertura}
        onValueChange={(itemValue) => setSelectedCobertura(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        {CoberturaItem}
      </Picker>

      {/* Segundo Titulo e  picker ACOMPANHAMENTO*/}
      <Text style={styles.title}>Escolha uma acompanhamento</Text>
      <Picker
        selectedValue={selectedAcompanhamento}
        onValueChange={(itemValue) => setSelectedAcompanhamento(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        {AcompanhamentoItem}
      </Picker>

      {/* Exibe detalhes do TAMANHO selecionado se houver um selecionado*/}
      {selectedTigela !== null ? (
        <Text style={styles.tamanhoo}>
          {" "}
          <Text style={styles.textTigela}>
            {Tigela.find((Tigela) => Tigela.key == selectedTigela).Tamanho}
          </Text>
          {" - "}
          <Text style={styles.textPrice}>
            R$ {Tigela.find((Tigela) => Tigela.key == selectedTigela).valor}
          </Text>
        </Text>
      ) : (
        <Text style={styles.selecionado}>Pizza Selecionada: {" - "}</Text>
      )}
      {/* Exibe detalhes do TIPOS selecionado se houver um selecionado*/}
      {selectedTipos !== null ? (
        <Text style={styles.tamanhoo}>
          {" "}
          <Text style={styles.textTigela}>
            {Tipos.find((Tipos) => Tipos.key == selectedTipos).acai}
          </Text>{" "}
        </Text>
      ) : (
        <Text style={styles.selecionado}>Pizza Selecionada:</Text>
      )}
      {/* Exibe detalhes da FRUTA selecionado se houver um selecionado*/}
      {selectedFruta !== null ? (
        <Text style={styles.tamanhoo}>
          {" "}
          <Text style={styles.textTigela}>
            {Fruta.find((Fruta) => Fruta.key == selectedFruta).Grupo}
          </Text>{" "}
        </Text>
      ) : (
        <Text style={styles.selecionado}>Pizza Selecionada: </Text>
      )}

      {/* Exibe detalhes da COBERTURA selecionado se houver um selecionado*/}
      {selectedCobertura !== null ? (
        <Text style={styles.tamanhoo}>
          {" "}
          <Text style={styles.textTigela}>
            {
              Cobertura.find((Cobertura) => Cobertura.key == selectedCobertura)
                .Grup
            }
          </Text>{" "}
        </Text>
      ) : (
        <Text style={styles.selecionado}>Pizza Selecionada: </Text>
      )}

      {/* Exibe detalhes da ACOMPANHAMENTO selecionado se houver um selecionado*/}
      {selectedAcompanhamento !== null ? (
        <Text style={styles.tamanhoo}>
          {" "}
          <Text style={styles.textTigela}>
            {
              Acompanhamento.find(
                (Acompanhamento) => Acompanhamento.key == selectedAcompanhamento
              ).acomp
            }
          </Text>{" "}
        </Text>
      ) : (
        <Text style={styles.selecionado}>Pizza Selecionada: </Text>
      )}
    </View>
  );
}
