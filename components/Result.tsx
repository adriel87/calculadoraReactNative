import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { styles } from '../theme/appThemes';

interface valuesToShowI{
    resultValue:string,
    prevValues?:string,
}

const Result = ({resultValue='0', prevValues=resultValue}:valuesToShowI) => {

    
return (
    <View>
        <Text style={{
            alignSelf:'flex-end',
             paddingRight:10,
             color:'#94a1b2',
             fontSize:20,
             }}>{prevValues}</Text>
        <Text style={[styles.textColor,
        {
            fontSize:70
        }]}>{resultValue}</Text>
    </View>
)
}

export default Result