import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../ImportHeader/Header'
import { responsiveHeight, responsiveScreenHeight } from 'react-native-responsive-dimensions'
import FontFamily from '../../assets/customFonts/customFonts'


const Index4 = () => {
  return (
    <View style={styles.main}>
      <View style={styles.hdr}>
        <Header />
      </View>
      <View style={styles.innerview}>
       <Text style={styles.carttxt}>My Cart</Text>
      </View>
    </View>
  )
}

export default Index4
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor:'white'
  },
  hdr: {
    height: responsiveScreenHeight(5)
  },
  innerview: {
    height: responsiveHeight(12),
    backgroundColor: "red",
    borderBottomEndRadius:10,
    borderBottomLeftRadius:10
  },
  carttxt:{
    color:"white",
    fontSize:18,
    fontFamily: FontFamily.OpenSansBold,
    marginTop:"2%",
    marginLeft:"2%"
  }
})