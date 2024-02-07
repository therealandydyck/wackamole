/**
 * \file:   buttons.js
 * \author  Andy Dyck
 * \date    2024-02-06
 * \brief   Component file that contains all button related functions
 */
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";


export const MoleButton = () => {
    const [mole, isMole] = useState(true);      // sets mole true or false
    const [press, moleBop] = useState(true);    // the mole hit state, moleBop true indicates valid mole hit
    const [score, scorePlus] = useState(0);     // updates score? may change this to a regular function
    
    const moleUp = () => {
        
        moleBop(isMole());
        isMole(false);
    }

    


    return(
        <View style={{width:75, height:75, border:2}}>
            <Button 
                title="A Mole"
                onPress={() => {scorePlus(c => c+1)}}/>
                <Text>{score}</Text>
            
        </View>
    )

}

export const CallbackButton = ({ id, callback }) => {


    return(
        <View>
            <Button
                title='Clap back'
                onPress={() => {callback(id)}}
            />
        </View>
    )
}