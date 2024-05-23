import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import FontFamily from '../../assets/customFonts/customFonts';

const Chat = () => {
  return (
    <View style={{flex:1,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
    <View >
    <Text style={{color:"black",fontSize:responsiveFontSize(2.5),fontFamily:FontFamily.MONTSERRAT_Medium}}>Under Developement</Text>
    </View>
    </View>
  )
}

export default Chat;