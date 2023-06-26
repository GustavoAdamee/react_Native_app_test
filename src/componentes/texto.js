import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto( {children, style} ) {
    let estilo = estilos.texto;
    //Caso no style passado por parametro tenha um fontWeight bold, o estilo será alterado
    // A '?' é para verificar se o style existe, pois o style é opcional
    if(style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal',
    },
    textoNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal',
    }
})