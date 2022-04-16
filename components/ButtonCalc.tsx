import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface buttonProps {
    text: string,
    action: (number: string) => void,
    backgroundColor?: string,
    width?: number,


}


const ButtonCalc = ({ text, backgroundColor = '#94a1b2', width = 80, action = () => { } }: buttonProps) => {
    return (
        <TouchableOpacity
            onPress={()=> action(text)}
            style={[
                styles.buttonContainer,
                {
                    backgroundColor,
                    width
                }
            ]}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {

        height: 80,

        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 6
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 10,
        color: '#fffffe'

    },
});
export default ButtonCalc