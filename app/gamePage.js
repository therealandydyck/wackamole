/**
 * \file    gamePage.js
 * \author  Andy Dyck
 * \date    2024-02-06
 * \brief   main game page for waccamole app
 */
import { Text, View } from "react-native";
import { Link } from "expo-router";
import Styles from "../styles/page-styles";
import { MoleButton } from "../components/buttons";

export default function Page() {
    return (
        <View style={Styles.page}>
            <Text>WaccaMole page</Text>
            <MoleButton />
            <Link href="/">Back to start page</Link>
        </View>
    )
}