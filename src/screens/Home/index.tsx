import React from "react";
import { ImageBackground, Image, View} from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import {styles} from "../../screens/Home/styles";
export function Home() {
    
    const marvel = require('../../assets/Marvel.png')
    return (
        <ImageBackground style={styleContainer.container}>
            <View  style={styles.Image}>
           <Image source={marvel}>
           </Image>
           </View>
        </ImageBackground>


    )
}


