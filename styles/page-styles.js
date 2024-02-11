/**
 * \file    page-styles.js
 * \author  Andy Dyck
 * \date    2024-02-06
 * \brief   stylesheet for waccamole app
 */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    button: {
        margin: 15,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 15,
    },
    
    grid: {
        flexDirection: 'row', 
        flexWrap:'wrap', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 25,
    },
    
    mole: {
        height: 70,
        width: 70,
        borderRadius: 50,
    },

    moleHole: {
        backgroundColor: 'green',
    },

    moleUp: {
        backgroundColor: 'brown',
    },

    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    score: {
        fontSize: 24,
        margin: 30,
    },

});

export default styles;