/**
 * \file gamegrid.js
 * \author Andy Dyck
 * \date 2024-02-08
 * \brief grid for mole buttons to be bopped
 */
import { useEffect, useState, React } from "react";
import { Text, View } from "react-native";
import { MoleButton } from "./buttons";
import Styles from "../styles/page-styles";
import { useNavigation } from "expo-router";


export const GameGrid = () => {
    const [gridSize, setGridSize] = useState(9);
    const [moles, setMoles] = useState(Array(gridSize).fill(false));
    const [score, setScore] = useState(0);
    const [moleTime, setMoleTimer] = useState(2500);
    // const [moleTime2, setMole2Timer] = useState(1777);
    const [moleLife, setLifeTimer] = useState(2000);

    const navigation = useNavigation();

    

    // sets the mole state
    const moleState = (state, index) => {
        const mole = [...moles];
        mole[index] = state;
        setMoles(mole);
    }


    // this never worked properly, requires deep understanding of how setInterval and setTimeout capture values and what workarounds are required to pass 'live' variables
    // const checkMiss = (index) => {
    //     const mole = [...moles];
    //     console.log(mole[index]);
    //     if (mole[index] === true) {
    //         setMiss(c => c-1);
    //         console.log('you missed');
    //     }
    // }

    // function to whack mole on press
    const moleBop = (index) => {
        const mole = [...moles];
        
        if (mole[index] === true) {
            setScore(c => c+1)
            console.log('Score!');
            mole[index] = false;
            setMoles(mole);
            setDifficulty();
        }
        
        //console.log(mole[index]);
    }

     const setDifficulty = () => {
        if (score === 5) {
            setMoleTimer(2000);
        }
        if (score === 10) {
            setMoleTimer(1500);
        }
        if (score === 15) {
            setMoleTimer(1300);
            setLifeTimer(1500);
        }
        if (score === 20) {
            setMoleTimer(1100);
            setLifeTimer(1300);
        }
        if (score === 25) {
            setMoleTimer(900);
            setLifeTimer(1000);
        }
    }

    // function to select mole to activate - starts pop down timer as well
    const moleUp = (index) => {
        const mole = [...moles];
            moleState(true, index);
            const interval = setTimeout(() => {
                    moleState(false, index);
            }, moleLife);
       
    }

    // const moleUp2 = (index) => {    // this used to work
    //     const mole = [...moles];
    //     if (mole[index] === false) {
    //         moleState(true, index);
    //         const interval = setTimeout(() => {
    //             moleState(false, index);
    //         }, moleLife);
    //     }
    // }

    // Game timer
    useEffect (() => {
        
        const gameOver = setTimeout(() => {
           navigation.replace('gameOver', {param1: score});
          
        }, 100000)
    },[])

    // spawns mole
    useEffect (() => {
        const interval = setInterval(() => {
            const rngIndex = Math.floor(Math.random() * moles.length);
            moleUp(rngIndex);
            
        }, moleTime);
        
        // const startMole2 = setInterval(() => { //this used to work
        //     if (score >= 3) {
        //         const rngIndex2 = Math.floor(Math.random() * moles.length);
        //         moleUp2(rngIndex2);
        //     }
        // }, moleTime2);
        
        return () => {
            // clearInterval(startMole2);
            clearInterval(interval);
        };
    },[moles]);
   

    return (
        <View>
            <View style={Styles.grid}>
                {moles.map((isUp, index) => (
                    <MoleButton key={index} onPress={() => moleBop(index)} isUp={isUp} />
                ))}
            </View>
            <Text style={Styles.score}>Score:{score}</Text>
        </View>
    )
}

