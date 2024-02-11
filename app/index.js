/**
 * \file    index.js
 * \author  Andy Dyck
 * \date    2024-02-06
 * \brief   start page/screen for wackamole app
 */
import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import Styles from "../styles/page-styles";

export default function Page() {
    return (
        <View style={Styles.page}>
            <Text>Waccamole app start page</Text>
            <Pressable style={Styles.button}>
                <Link href="/gamePage">Start Bopping</Link>
            </Pressable>
        </View>
    )
}