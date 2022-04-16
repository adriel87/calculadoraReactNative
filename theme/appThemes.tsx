
import { StyleSheet } from 'react-native';
import { operations } from '../helpers/operations';

export const styles = StyleSheet.create({
    flex: { flex: 1 },

    globalPadding:{
        padding:10
    },

    container: {
        backgroundColor: '#16161a',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textColor: {
        color: '#fffffe'
    },

    button: {
        backgroundColor: '#7f5af0'
    },

    BGC: {
        backgroundColor: '#16161a'
    },

    paragraphBackground:{
        backgroundColor:'#94a1b2'
    },
    result:{
        color:'#fffffe',
        fontSize:50,
        textAlign:'right'
    },
    operationsResult:{
        color:'#b8b8b6',
        fontSize:20,
        textAlign:'right'
    },

    calculatorContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end'
        
    },

    buttonContainer:{
        backgroundColor:'#7f5af0',
        height:80,
        width:80,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        textAlign:'center',
        fontSize:40,
        fontWeight:'bold',
        padding:10,
        color:'#fffffe'

    },

    rowButtons:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:15,
        marginHorizontal:10
    }



});
