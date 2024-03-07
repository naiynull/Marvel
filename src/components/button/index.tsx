import { TouchableOpacity, TouchableHighlightProps } from "react-native";
import { styles } from "../button/styles";


interface Ibuttom extends TouchableHighlightProps {
    onPrsseI: () => void

}
export function ButtonPage({ onPrsseI }: Ibuttom) {
    return (
        <TouchableOpacity style={styles.ball} onPress={onPrsseI} />
 )
}