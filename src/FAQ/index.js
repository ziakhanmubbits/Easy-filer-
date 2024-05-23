import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../ImportHeader/Header'
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'

const FAQ = () => {
  return (
    <View style={styles.main}>
      <View style={styles.innerView}>
     <Header />
      </View>
      <View style={styles.txt}>
      <Text>FAQ</Text>
      </View>
  
    </View>
  )
}

export default FAQ

const styles=StyleSheet.create({
  main:{
    flex:1
  },
  innerView: {
    height: responsiveHeight(7),
    width: responsiveWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
  },
  txt:{
    justifyContent:"center",
    alignItems:"center",
    height: responsiveHeight(95)
  }
})