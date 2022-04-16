import React from 'react'
import { View } from 'react-native';
import Buttons from '../components/Buttons';
import ResultView from '../components/ResultView';
import { styles } from '../theme/appThemes';
import { useState } from 'react';
import { operations } from '../helpers/operations';
const CalculatorScreen = () => {



    const [result, setResult] = useState({
        toShow: '0',
        operator1: '0',
        operationPress: false,
        operation: ''
    })

    const { toShow } = result



    const addZero = (): void => {

        if (result.toShow === '0') return

        setResult({
            ...result,
            toShow: result.toShow + '0'
        })
    }

    const addDobleZero = (): void => {

        if (result.toShow === '0') return

        setResult({
            ...result,
            toShow: result.toShow + '00'
        })
    }

    const addOne = (): void => {
        if (result.operationPress) {
            setResult({
                ...result,
                toShow:'1',
                operationPress: false
            })
        }else{

            setResult({
                ...result,
                toShow: result.toShow === '0'
                    ? '1'
                    : result.toShow + '1'
            })
        }
    }
    const addTwo = (): void => {

        setResult({
            ...result,
            toShow: result.toShow === '0'
                ? '2'
                : result.toShow + '2'
        })
    }
    const addThree = (): void => {

        setResult({
            ...result,
            toShow: result.toShow === '0'
                ? '3'
                : result.toShow + '3'
        })
    }
    const addFour = (): void => {

        setResult({
            ...result,
            toShow: result.toShow === '0'
                ? '4'
                : result.toShow + '4'
        })
    }
    const addFive = (): void => {

        setResult({
            ...result,
            toShow: result.toShow === '0'
                ? '5'
                : result.toShow + '5'
        })
    }
    const addSix = (): void => {

        setResult({
            ...result,
            toShow: result.toShow === '0'
                ? '6'
                : result.toShow + '6'
        })
    }
    const addSeven = (): void => {

        setResult({
            ...result,
            toShow: result.toShow === '0'
                ? '7'
                : result.toShow + '7'
        })
    }
    const addEight = (): void => {

        setResult({
            ...result,
            toShow: result.toShow === '0'
                ? '8'
                : result.toShow + '8'
        })
    }
    const addNine = (): void => {

        setResult({
            ...result,
            toShow: result.toShow === '0'
                ? '9'
                : result.toShow + '9'
        })
    }
    const addPoint = (): void => {
        setResult({
            ...result,
            toShow: result.toShow.includes('.')
                ? toShow
                : toShow + '.'
        })
    }

    const clear = (): void => {
        setResult({
            toShow: '0',
            operator1: '0',
            operationPress: false,
            operation: ''
        })
    }

    const invert = (): void => {
        setResult({
            ...result,
            toShow: !result.toShow.includes('-')
                ? '-' + result.toShow
                : result.toShow.slice(1)
        })
    }

    const sum = (): void => {
        if (result.toShow === '0') return

        if (!result.operationPress) {
            setResult({
                ...result,
                operation: '+',
                operator1: result.toShow,
                operationPress: true,
            })
        } else {

            setResult({
                ...result,
                toShow: operations.sum(result.operator1, result.toShow)
            })

        }


    }
    const substraction = (): void => {
        setResult({
            ...result,
            operation: '-',
            operator1: result.toShow
        });


    }
    const multiply = (): void => {
        setResult({
            ...result,
            operation: '*',
            operator1: result.toShow
        });

    }
    const division = (): void => {
        setResult({
            ...result,
            operation: '/',
            operator1: result.toShow
        });

    }

    const percent = (): void => {
        setResult({
            ...result,
            operation: '%',
            operator1: result.toShow
        });

    }

    const calculate = (): void => {
        console.log(result.operation.length);

        if (result.operation.length === 0) return

        switch (result.operation) {
            case '+':
                console.log(result.operation);

                setResult({
                    ...result,
                    toShow: operations.sum(result.operator1, result.toShow).toString()
                })
                break;

            default:
                break;
        }
    }



    const functions = [
        () => { clear() },
        () => { addOne() },
        () => { addTwo() },
        () => { addThree() },
        () => { addFour() },
        () => { addFive() },
        () => { addSix() },
        () => { addSeven() },
        () => { addEight() },
        () => { addNine() },
        () => { addPoint() },
        () => { invert() },
        () => { percent() },
        () => { division() },
        () => { multiply() },
        () => { substraction() },
        () => { sum() },
        () => { calculate() },
        () => { addZero() },
        () => { addDobleZero() }

    ]
    return (
        <View style={[
            styles.container,
            styles.flex
        ]}>
            <ResultView number={toShow} />
            <Buttons func={functions} />
        </View>
    )
}
export default CalculatorScreen