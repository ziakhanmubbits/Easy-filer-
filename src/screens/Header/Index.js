import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderMomin = () => {
  return (
    <View style={Style.container}>
      <View style={Style.touchableview}>
        <View style={Style.touchableopacity}>
            <Text style={Style.touchabletext}>Momin</Text>
            <TouchableOpacity style={{backgroundColor:"white",borderRadius:20}}>
            <AntDesign 
            name='caretdown' color={'grey'} size={12}
            >
            </AntDesign>
            </TouchableOpacity>
             
        </View>
      </View>
      <View style={Style.view3}>
        <View style={Style.view3style}>
            <TouchableOpacity>
            <Entypo
            Style={Style.icon2} 
            name='bell' color={'red'} size={20}
            >
            </Entypo>
            </TouchableOpacity>
            <TouchableOpacity>
            <Ionicons
            Style={Style.icon2} 
            name='call' color={'red'} size={19}
            >
            </Ionicons>
            </TouchableOpacity>
         <TouchableOpacity>
         <Entypo
            Style={Style.icon2} 
            name='message' color={'red'} size={22}
            >
            </Entypo>
         </TouchableOpacity>
             
        </View>
      </View>
    </View>
  )
}

export default HeaderMomin;