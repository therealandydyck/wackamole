/**
 * \file    gamePage.js
 * \author  Andy Dyck
 * \date    2024-02-06
 * \brief   main game page for waccamole app
 */
import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import Styles from "../styles/page-styles";
import { GameGrid } from "../components/gamegrid";

export default function Page() {
    return (
        <View style={Styles.page}>
            <Text style={{fontSize: 36, marginBottom: 30}}>WaccaMole page</Text>
            <GameGrid />
                <Pressable>
                    <Link href="/" style={Styles.button}>
                        <Text>Back to Home</Text>
                    </Link>
                </Pressable>
        </View>
    )
}