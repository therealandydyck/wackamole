/**
 * \file    gameOver.js
 * \author  Andy Dyck
 * \date    2024-02-06
 * \brief   end screen for  waccamole app
 */
import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import Styles from "../styles/page-styles";
import { useLocalSearchParams } from "expo-router";

export default function Page() {
    const params = useLocalSearchParams();
    const { param1 } = params;
    return (
        <View style={Styles.page}>
            <Text style={Styles.instructionText}>Game Over</Text>
            <Text style={Styles.instructionText}>Final Score = {param1}</Text>
            <Pressable style={Styles.button} >
                <Link href="/">Back to start page</Link>
            </Pressable>
        </View>
    )
}