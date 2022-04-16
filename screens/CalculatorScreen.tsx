import React from 'react'
import { Text, View } from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import { styles } from '../theme/appThemes';
import { useCalculator } from '../hooks/UseCalculator';



const CalculatorScreen = () => {

    const { result,operationResult,actions } = useCalculator();

    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.operationsResult} >{operationResult}</Text>
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit

            >
                {result}
            </Text>

            <View style={styles.rowButtons}>
                <ButtonCalc text='C' backgroundColor='#2cb67d' action={actions.clean} />
                <ButtonCalc text='+\-' backgroundColor='#2cb67d' action={actions.addRemoveSimbols} />
                <ButtonCalc text='del' backgroundColor='#2cb67d' action={actions.deleteLastNumber} />
                <ButtonCalc text='/' backgroundColor='#7f5af0' action={actions.division} />
            </View>
            <View style={styles.rowButtons}>
                <ButtonCalc text='7' action={() => actions.addNumber('7')} />
                <ButtonCalc text='8' action={() => actions.addNumber('8')} />
                <ButtonCalc text='9' action={() => actions.addNumber('9')} />
                <ButtonCalc text='x' backgroundColor='#7f5af0' action={actions.multiply} />
            </View>
            <View style={styles.rowButtons}>
                <ButtonCalc text='6' action={() => actions.addNumber('6')} />
                <ButtonCalc text='5' action={() => actions.addNumber('5')} />
                <ButtonCalc text='4' action={() => actions.addNumber('4')} />
                <ButtonCalc text='-' backgroundColor='#7f5af0' action={actions.substract} />
            </View>
            <View style={styles.rowButtons}>
                <ButtonCalc text='3' action={() => actions.addNumber('3')} />
                <ButtonCalc text='2' action={() => actions.addNumber('2')} />
                <ButtonCalc text='1' action={() => actions.addNumber('1')} />
                <ButtonCalc text='+' backgroundColor='#7f5af0' action={actions.sum} />
            </View>
            


            <View style={styles.rowButtons}>
                <ButtonCalc text='0' width={171} action={() => actions.addNumber('0')} />

                <ButtonCalc text='.' action={() => actions.addNumber('.')} />
                <ButtonCalc text='=' backgroundColor='#7f5af0' action={actions.calculate} />
            </View>

        </View>
    )
}
export default CalculatorScreen