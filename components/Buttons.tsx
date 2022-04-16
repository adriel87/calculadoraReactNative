import React from 'react'
import { View, StyleSheet } from 'react-native';
import ButtonsList from './ButtonsList';

interface butoonsI {
    func: { (): void }[]
}

const Buttons = ({ func }: butoonsI) => {
    return (
        <View style={styles.container}>

            <ButtonsList
                firstElement={{
                    textValue: 'C',
                    handler: func[0]
                }}
                secondElement={{
                    textValue: '+/-',
                    handler: func[11]
                }}
                thirdElement={{
                    textValue: '%',
                    handler: func[12]


                }}
                fourthElement={{
                    textValue: '/',
                    handler: func[13]


                }}
                bgColor='#72757e'


            />
            <ButtonsList
                firstElement={{
                    textValue: '7',
                    handler: func[7]


                }}
                secondElement={{
                    textValue: '8',
                    handler: func[8]


                }}
                thirdElement={{
                    textValue: '9',
                    handler: func[9]


                }}
                fourthElement={{
                    textValue: 'X',
                    handler: func[14]


                }}
                bgColor='#2cb67d'

            />
            <ButtonsList
                firstElement={{
                    textValue: '4',
                    handler: func[4]


                }}
                secondElement={{
                    textValue: '5',
                    handler: func[5]


                }}
                thirdElement={{
                    textValue: '6',
                    handler: func[6]


                }}
                fourthElement={{
                    textValue: '-',
                    handler: func[15]


                }}
                bgColor='#2cb67d'

            />
            <ButtonsList
                firstElement={{
                    textValue: '1',
                    handler: func[1]
                }}
                secondElement={{
                    textValue: '2',
                    handler: func[2]


                }}
                thirdElement={{
                    textValue: '3',
                    handler: func[3]


                }}
                fourthElement={{
                    textValue: '+',
                    handler: func[16]


                }}
                bgColor='#2cb67d'

            />

            <ButtonsList
                firstElement={{
                    textValue: '0',
                    handler: func[18]


                }}
                secondElement={{
                    textValue: '00',
                    handler: func[19]
                }}
                thirdElement={{
                    textValue: '.',
                    handler: func[10]


                }}
                fourthElement={{
                    textValue: '=',
                    handler: func[17]


                }}
                bgColor='#2cb67d'

            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',

    }
});
export default Buttons