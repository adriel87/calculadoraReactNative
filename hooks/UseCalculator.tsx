
import React from 'react'

import { useState, useRef } from 'react';
import { operations } from '../helpers/operations';
import { Operators } from '../enums/Operators';


// enum Operators{
//     sum,
//     substract,
//     multiply,
//     division,
//     empty
// }

export const useCalculator = () => {


    const [result, setResult] = useState<string>('101')

    const [operationResult, setOperationResult] = useState('')

    const lastOperation = useRef<Operators>(Operators.empty)

    const actions = {
        clean: () => {
            setResult('0'),
                setOperationResult('')
        },

        addNumber: (number: string) => {
            if (result.includes('.') && number === '.') return;

            if (result === '0') {
                if (number === '.') {
                    setResult('0' + '.')
                } else {
                    setResult(number)
                }
            } else {
                setResult(result + number)

            }

        },
        addRemoveSimbols: () => {
            (result.includes('-'))
                ? setResult(result.slice(1))
                : setResult('-' + result)
        },
        deleteLastNumber: () => {

            let negative: string = '';
            let actualNumber: string = result;

            if (actualNumber.includes('-')) {
                negative = '-';
                actualNumber = result.substring(1);
            }


            (result.length > 1)
                ? setResult(negative + actualNumber.slice(0, -1))
                : setResult('0')
        },
        division: () => {
            lastOperation.current = Operators.division
            actions.pressOperation();
        },
        multiply: () => {
            lastOperation.current = Operators.multiply
            actions.pressOperation();
        },
        sum: () => {
            lastOperation.current = Operators.sum
            actions.pressOperation();


        },
        substract: () => {
            lastOperation.current = Operators.substract
            actions.pressOperation();
        },
        calculate: () => {
            switch (lastOperation.current) {
                case Operators.sum:
                    setResult(operations.sum(result,operationResult))
                    break;
                case Operators.substract:
                    setResult(operations.subtraction(result,operationResult))
                    break;
                case Operators.multiply:
                    setResult(operations.multiply(result,operationResult))
                    break;
                case Operators.division:
                    setResult(operations.division(result,operationResult))
                    break;                    
            }
            setOperationResult('0')
        },

        pressOperation: () => {
            if (result.endsWith('.')) {
                setOperationResult(result.slice(0, -1));
            } else {
                setOperationResult(result);
            }
            setResult('0');
        }


        

    }


    return {
        result,lastOperation,operationResult,actions
    }
}

