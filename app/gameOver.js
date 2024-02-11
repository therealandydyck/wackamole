/**
 * \file    gameOver.js
 * \author  Andy Dyck
 * \date    2024-02-06
 * \brief   end screen for  waccamole app
 */
import { Text, View } from "react-native";
import { Link } from "expo-router";
import Styles from "../styles/page-styles";

export default function Page() {
    return (
        <View style={Styles.page}>
            <Text>Game Over</Text>
            <Text>Final Score = {}</Text>
            <Link href="/">Back to start page</Link>
        </View>
    )
}