import { View, Text,TextInput } from 'react-native'
import React from 'react'
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../../Components/Index';

const PensionerBenefits = () => {

  const navigation = useNavigation();
  return (
    <View style={Style.container}>
    <View style={Style.view1}>
            <Text style={Style.txt}>Pensioner Benefits</Text>
        </View>
        <View style={Style.textinputview}>
      <TextInput style={Style.placeholder1}  keyboardType='numeric' placeholder='Enter Profit Amount'
            placeholderTextColor={"grey"}
          />
          
      </View>
      <Button
         onPressBack={() => navigation.navigate('ProfitSaving')}
      />
    </View>
  )
}

export default PensionerBenefits;