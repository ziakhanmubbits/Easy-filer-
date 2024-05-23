import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'


const Button5 = (props) => {
    const {onPressBack,onPressForward}=props

  return (
    <View style={Style.container}>
      <View style={Style.view2}>
        <TouchableOpacity style={Style.button1} onPress={onPressBack}>
            <Text style={Style.button1txt}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Button5;