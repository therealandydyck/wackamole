/**
 * \file:   buttons.js
 * \author  Andy Dyck
 * \date    2024-02-06
 * \brief   Component file that contains all button related functions
 */
//import { useEffect, useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import Styles from "../styles/page-styles";




export const MoleButton = ({onPress, isUp}) => {
    // const [mole, isMole] = useState(false);      // sets mole true or false
    // // const [press, moleBop] = useState(0);    // the mole hit state,
    // const [score, scorePlus] = useState(0);     // updates score? may change this to a regular function
    // const [miss, moleMiss] = useState(10);
    
    // const [moleChange, changeMole] = useState(0);

    // const [btnColour, chColour] = useState(Styles.moleHole);
    
    
    // const tryBop = () => {
    //     if (mole) {
    //         // moleBop(c => c+1);
    //         console.log('mole got bopped');
    //         chColour(Styles.moleHole);
    //         scorePlus(c => c+1);
    //         isMole(false);
    //         changeMole(c => c+1);
    //         console.log('mole is false, moleChange++');
    //     }
    // }

    // const moleUp = () => {
    //     if (!mole) {
    //         const setTimeUp = setTimeout(() => {
    //             isMole(true);
    //             console.log('mole is true ');
    //             changeMole(c => c+1);
    //             chColour(Styles.moleUp);
    //         }, 5000);
    //     }
    // }

    // const moleTimeOut = () => {
    //     if (mole) {
    //         const setTimeDown = setTimeout(() => {
    //             isMole(false);
    //             changeMole(c => c+1);
    //             chColour(Styles.moleHole);
    //             moleMiss(c => c-1);
    //         }, 5000);
    //     }
    // }

    // useEffect(() => {
    //     moleUp();
    //     moleTimeOut();
    //     return () => clearTimeout();
    // }, [moleChange])    

    // useEffect (() => {
    //     if (mole) {
    //         const setTimeDown = setTimeout(() => {
    //             isMole(false);
    //             changeMole(c => c+1);
    //             chColour(Styles.moleHole);
    //             moleMiss(c => c-1);
    //         }, 5000);
    //     }
    // }, [moleChange])

    // useEffect(() => {
    //     if (mole) {
            
    //     }
    // }, [press])

    const moleColour = isUp ? Styles.moleUp:Styles.moleHole;
    
    return(
        
        <View style={{padding: 10}}>
            <Pressable style={[Styles.mole, moleColour]}
                title=""
                onPress={onPress}/>
        </View>
    )

}
