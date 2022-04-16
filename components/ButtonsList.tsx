import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ButtonItem from './ButtonItem';

interface Ibutton {
    firstElement: operationalElement,
    secondElement:  operationalElement,
    thirdElement:  operationalElement,
    fourthElement: operationalElement,
    bgColor: string,
    func?: () => void,
}

interface operationalElement {
    textValue: string,
    handler: () => void
}

const defaultValue : operationalElement = {
    textValue:'777',
    handler:()=>{console.log('default func');
    }
}

const ButtonsList = ({ firstElement = defaultValue, secondElement = defaultValue, thirdElement = defaultValue, fourthElement = defaultValue, bgColor = 'white', func = () => {
    console.log('default');
} }: Ibutton) => {
    return (
        <View style={styles.container}>

            <ButtonItem element = {firstElement.textValue} bgColor={bgColor} func={firstElement.handler} />
            <ButtonItem element = {secondElement.textValue} bgColor={bgColor} func={secondElement.handler} />
            <ButtonItem element = {thirdElement.textValue} bgColor={bgColor} func={thirdElement.handler} />
            <ButtonItem element = {fourthElement.textValue} bgColor='#7f5af0' func={fourthElement.handler} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
export default ButtonsList