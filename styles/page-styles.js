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

    instructionsBox: {
        flex: 0.45,
        marginTop: 30,
    },

    text: {
        fontSize: 18,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        paddingLeft: 30,
        paddingRight: 20,
        
    },

    instructionText: {
        fontSize: 24,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 15,
    }

});

export default styles;