import { View, Text,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Style from './Style';
import { TextInput } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import Button from 'react-native-paper';

const Partnership = () => {
  const navigation = useNavigation();
  return (
 
    <View style={Style.container}>
         <ScrollView>
      <Text style={Style.txt1}>Share of Partnership/AOP (Association of person)</Text>
      <View style={Style.view1}>
      <View style={Style.textinputview1}>
        <TextInput
          placeholder='Name of Partnership / AOP'
          style={[Style.inputcontainer]}
          inactiveOutlineColor='grey'
          activeOutlineColor='grey'
          textColor='black'
          active
        />
      </View>
      <View style={Style.textinputview2}>
        <TextInput
          placeholder='Profit from Partnership / AOP'
          style={[Style.inputcontainer]}
          inactiveOutlineColor='grey'
          activeOutlineColor='grey'
          textColor='black'
          active
        />
      </View>
      <View style={Style.textinputview2}>
        <TextInput
          placeholder='Your business capital in Partnership / AOP'
          style={[Style.inputcontainer]}
          inactiveOutlineColor='red'
          activeOutlineColor='red'
          textColor='black'
          active
        />
      </View>
      <View style={Style.buttonview}>
      <TouchableOpacity style={Style.button1}>
        <Text style={Style.button1txt}>Add Another Partnership / AOP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Style.button2}>
        <Text style={Style.button2txt}>View All AOPS</Text>
      </TouchableOpacity>
      </View>
      </View>
      </ScrollView>

        <Button
         onPressBack={() => navigation.navigate('Inc')}
        />
    </View>
    
  )
}

export default Partnership;