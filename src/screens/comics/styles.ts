import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyle";

export const styles = StyleSheet.create({

Image: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
},

ball:{
    padding: 10,

    flexDirection: "row",
  
},
Tam:{
   padding: 17,
   backgroundColor: colors.transparente,
   opacity: 70,
   borderRadius: 10,

 
 
},
Text: {
    color: colors.branco,
    textAlign: "justify"


},
Titulo:{
 fontSize: 40,
 fontWeight: 'bold',
 color: colors.branco,
 
},

botao:{
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: "uppercase",
    color: colors.vermelho,
    backgroundColor: colors.branco,
    borderRadius: 17,
    opacity: 170,
},
espaco:{
    paddingTop: 30,
}

});