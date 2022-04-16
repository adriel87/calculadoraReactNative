import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import { styles } from './src/theme/appThemes';



const App = () => {
  return (
    <SafeAreaView style={ [
      styles.flex,
      styles.BGC,
      styles.globalPadding
    ]}>
      <StatusBar 
        backgroundColor='#16161a'
        barStyle={'light-content'}
      />
      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App