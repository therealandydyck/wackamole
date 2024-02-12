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
            <Text style={{fontSize: 28}}>Waccamole!!</Text>
            <View style={Styles.instructionsBox}>
                <Text style={Styles.instructionText}>Instructions:</Text>
                <Text style={Styles.text}>1. Press Start Bopping to begin play.</Text>
                <Text style={Styles.text}>2. The mole holes will turn brown when the mole pops up.</Text>
                <Text style={Styles.text}>3. Tap the mole before it disappears to score a point.</Text>
                <Text style={Styles.text}>4. Score as many points as you can before time runs out.</Text>
            </View>

            <Pressable style={Styles.button}>
                <Link href="/gamePage">Start Bopping</Link>
            </Pressable>
            
        </View>
    )
}