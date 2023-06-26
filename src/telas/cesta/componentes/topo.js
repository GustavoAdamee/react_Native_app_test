import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import topo from '../../../../assets/topo.png'
import Texto from '../../../componentes/texto'

const scren_width = Dimensions.get('screen').width;

export default function Topo({ titulo }){
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Texto style={estilos.titulo}>{ titulo }</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: (578 / 768) * scren_width, // 578 é a altura original da imagem, 768 é a largura original da imagem
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16,
    },
})