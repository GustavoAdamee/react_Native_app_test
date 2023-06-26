import React from "react";
import { SafeAreaView, StyleSheet, View, ScrollView, FlatList} from "react-native";

import Topo from './componentes/topo'
import Texto from '../../componentes/texto'
import Detalhes from "./componentes/detalhes";
import Item from "./componentes/item";

export default function Cesta({ topo, detalhes, itens}) {
  // scrollview é um componente que permite que o conteúdo seja rolado para cima e para baixo
  // safeareaview é um componente que garante que o conteúdo não fique atrás do topo do iphone
  // Verificar se fazer esse 'nested' é uma boa prática
  // return <ScrollView>
  return <>
    <FlatList
        data={ itens.lista }
        renderItem={ Item }
        keyExtractor={ ({nome}) => nome }
        ListHeaderComponent={ () => {
          return <>
            <Topo {...topo}/>
            <View style={estilos.cesta}>
              <Detalhes {...detalhes}/>
              <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
            </View>
          </> 
        }}
    />
  </>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo:{
      color: '#464646',
      fontWeight: 'bold',
      marginTop: 32,
      marginBottom: 8,
      fontSize: 20,
      lineHeight: 32,
  },
})