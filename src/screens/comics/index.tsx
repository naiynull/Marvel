import React from "react";
import { ImageBackground, Image, View, Text } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "../../screens/comics/styles";
import { Ipagina } from "../../../App";
import { ButtonPage } from "../../components/button";

export function Comics({ setpageI }: Ipagina) {
    const home = require('../../assets/comics.jpg')
    const dead = require('../../assets/deadpool.png')
    return (
        <ImageBackground source={home} style={styleContainer.container}>
            <View style={styles.Image}>
                <Image source={dead} >
                </Image>
            <Text style={styles.Titulo}>
            X Marks the Spot
            </Text>
            <View style={styles.Tam}>
            <Text style={styles.Text}>Deadpool, determinado a se tornar um X-Man, embarca em uma missão para impressionar a equipe, mas acaba mergulhando em um caos de assassinato
                e manipulação. Ao visar o pai de Mercúrio, ele desencadeia uma série de eventos que podem alterar o curso das relações mutantes/humanos.
                No entanto, sua abordagem violenta pode custar-lhe a aceitação que tanto deseja, enquanto ele enfrenta dilemas morais e suas próprias ambições.
                </Text>
            </View>
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