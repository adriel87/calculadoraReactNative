import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


interface buttomItemI {
    element: string,
    bgColor?: string,
    func?:()=>void
}

const ButtonItem = ({ element = '777', bgColor = '#72757e' ,func=()=>{console.log('default');
}}: buttomItemI) => {
    return (
        <TouchableOpacity
            onPress={func}
            style={
                [
                    styles.container,
                    {backgroundColor:bgColor}
                ]}
        >
            <Text style={styles.text}>{element}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 85,
        height: 85,
        borderRadius: 100,
        justifyContent: 'center',
        margin: 1,
    },
    text: {
        textAlign: 'center',
        fontSize:30,
        color:'#fffffe'

    }
});
export default ButtonItem