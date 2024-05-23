import { View, Image, Text,ScrollView } from 'react-native'
import React from 'react'
import Style from './style'
import NewHeader from '../../NewHeader'

const PaymentHistory = () => {
  return (
    <View style={Style.main}>
    <ScrollView contentContainerStyle={Style.contntContianer}>
      <View style={Style.headerView}>
        <NewHeader />
      </View>
      <View style={{
        alignItems:"center",
        justifyContent:"center",
        marginTop:'70%'
      }}>
        <Image style={Style.image} source={require('../../../png/hi.png')} />
        <Text style={{
          color:'black',
          marginTop:"2%",
          marginLeft:"4%",
          fontWeight:'600'
        }}>No ! History Found...</Text>
      </View>
    </ScrollView>
    </View>
  )
}
export default PaymentHistory