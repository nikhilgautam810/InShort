import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ApiCall from './Components/ApiCall'
import { Provider } from 'react-redux'
import Store from './Components/redux/Store'

const App = () => {


  return (
    
<Provider store={Store}>
  <ApiCall />
</Provider>
    

  )
}

export default App

const styles = StyleSheet.create({
 
})