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
   padding: 15,
 
 
},
Text: {
    color: colors.preto,
    fontWeight: 'bold',
    textAlign: "justify"


},
Titulo:{
 fontSize: 40,
 fontWeight: 'bold',
 color: colors.preto,
 
},


});