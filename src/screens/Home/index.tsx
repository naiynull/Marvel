import React from "react";
import { ImageBackground, Text, Image} from "react-native";
import { styleContainer } from "../../styles/globalstyle";
export function Home() {
    const home = require('../../assets/home.png')
    const marvel = require('../../assets/Marvel.png')
    return (
        <ImageBackground source={home} style={styleContainer.container}>
           <Image source={marvel}>
           </Image>
        </ImageBackground>


    )
}


