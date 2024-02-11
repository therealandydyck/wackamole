/**
 * \file gamegrid.js
 * \author Andy Dyck
 * \date 2024-02-08
 * \brief grid for mole buttons to be bopped
 */
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { MoleButton } from "./buttons";
import Styles from "../styles/page-styles";

// {/* <Text>Score:{score} Misses:{miss}</Text> */}

export const GameGrid = () => {
    const [gridSize, setGridSize] = useState(9);
    const [moles, setMoles] = useState(Array(gridSize).fill(false));
    const [score, setScore] = useState(0);
    const [miss, setMiss] = useState(10);
    const [moleTime, setMoleTimer] = useState(2500);
    
    const playGrid = [
        moles.map((isUp, index) => (
            <MoleButton key={index} onPress={() => moleBop(index)} isUp={isUp} />
        ))
        ];

    const moleState = (state, index) => {
        const mole = [...moles];
        mole[index] = state;
        setMoles(mole);
    }

    // const checkMiss = (index) => {
    //     const mole = [...moles];
    //     console.log(mole[index]);
    //     if (mole[index] === true) {
    //         setMiss(c => c-1);
    //         console.log('you missed');
    //     }
    // }

    const moleBop = (index) => {
        const mole = [...moles];
        
        if (mole[index] === true) {
            setScore(c => c+1)
            console.log('Score!');
            mole[index] = false;
            setMoles(mole);
        }
        //console.log(mole[index]);
    }

    const moleUp = (index) => {
        const mole = [...moles];
        moleState(true, index);
        
        const interval2 = setTimeout(() => {
            // checkMiss(index);
            // const delay = setTimeout(() => {
                
            // },100);
            moleState(false, index);
        }, moleTime - 1000);
        
    }

    useEffect (() => {
        const level2 = setTimeout(() => {
            setMoleTimer(2000);
            setGridSize(12);
        }, 20000);
        const level3 = setTimeout(() => {
            setMoleTimer(1500);
            setGridSize(16);
        }, 40000);
        const gameOver = setTimeout(() => {
            
        }, 80000)
    },[])

    useEffect (() => {
        const interval = setInterval(() => {
            const rngIndex = Math.floor(Math.random() * moles.length);
            moleUp(rngIndex);
            
        }, moleTime);
        return () => {
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

