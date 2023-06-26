import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Texto from "../../../componentes/texto";
import Botao from "../../../componentes/botao";

export default function Detalhes({ nome, fazenda, descricao, preco, botao}){
    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>
        
        <View style={estilos.fazenda}>
            
            <Image source={ fazenda.logo } style={estilos.imagemFazenda}/>
            
            <Texto style={estilos.nomeFazenda}>{ fazenda.nome }</Texto>
        </View>
        
        <Texto style={estilos.descicao}>{ descricao }</Texto>

        <Texto style={estilos.preco}>{ preco }</Texto>

        <Botao conteudo={ botao } onPress={ () => {} }/>
    </>
}

const estilos = StyleSheet.create({
    nome:{
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold',
    },
    fazenda:{
        flexDirection: 'row',
    },
    imagemFazenda:{
        width: 32,
        height: 32,
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descicao:{
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco:{
        color: '#2A9F85',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: 'bold',
    },
})