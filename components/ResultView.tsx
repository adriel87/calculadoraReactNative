import React from 'react'
import { View, StyleSheet } from 'react-native';
import Result from './Result';

interface numberScreenI{
    number:string
}


const ResultView = ({number='0'}:numberScreenI) => {
return (
    <View style={styles.container}>
        <Result resultValue={number}/>
    </View>
)
}
const styles = StyleSheet.create({
container:{
    flex:1,
    paddingRight:10,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    width:'100%'

}
});
export default ResultView