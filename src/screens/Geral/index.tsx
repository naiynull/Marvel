import React from "react";
import { ImageBackground, Image, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "../../screens/Home/styles";
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/button";

export function Geral({ setpageI }: Ipagina) {
    const home = require('../../assets/geral.jpg')
    const marvel = require('../../assets/Marvel.png')
    return (
        <ImageBackground source={home} style={styleContainer.container}>
            <View style={styles.Image}>
                
            </View>
            <View style={styles.ball}>
            <ButtonPage onPrsseI={() => setpageI(1)} />
            <ButtonPage onPrsseI={() => setpageI(2)} />
            <ButtonPage onPrsseI={() => setpageI(3)} />
            <ButtonPage onPrsseI={() => setpageI(4)} />
            </View>
        </ImageBackground>


    )
}