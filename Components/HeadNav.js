import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeadNav = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All News</Text>
    </View>
  )
}

export default HeadNav

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:55,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        elevation:10
    },
    heading:{
        fontSize:20,
        fontWeight:'400',
        color:'#08004F'
    }
})