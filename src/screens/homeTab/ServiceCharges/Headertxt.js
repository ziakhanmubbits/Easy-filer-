import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Headertxt = () => {
  return (
    <View style={{
        backgroundColor:'gainsboro'
    }}>
        <Ionicons style={{
            marginLeft:'1%',
            marginTop:'1%'
        }} name='ios-arrow-back-circle' size={35} color={"#EB0414"}/>
      <Text style={styles.txt}>Select best suited option,to continue with</Text>
      <Text style={styles.txt1}>registration</Text>
    </View>
  )
}

export default Headertxt

const styles=StyleSheet.create({
    txt:{
        fontSize:18,
        color:"black",
        marginLeft:'5%',
        marginTop:"1%"
    }, 
       txt1:{
        fontSize:18,
        color:"black",
        marginLeft:'5%',

    }
})