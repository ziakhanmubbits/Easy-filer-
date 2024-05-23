import { View, Text,Image } from 'react-native'
import React from 'react'
import Style from './style'
import Header from '../ImportHeader/Header'

const Notifications = () => {
  return (
    <View style={Style.mian}>
       <View style={Style.innerView}>
        <Header />
      </View>
      <View style={
               Style.view1
            }>
                <View style={Style.imageview}>
                    <Image style={Style.img} source={require('../../../src/assets/pictures/image62.png')} />
                </View>

                <Text style={
                    Style.text
                }>No ! Notifications Found...</Text>
            </View>
    </View>
  )
}

export default Notifications