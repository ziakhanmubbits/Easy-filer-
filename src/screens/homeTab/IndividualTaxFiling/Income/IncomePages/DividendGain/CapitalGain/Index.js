import { View, Text,ScrollView, SafeAreaView,TextInput } from 'react-native'
import React from 'react'
import Style from './Style';
import Button from '../../../../../../Components/Index';
import { useNavigation } from '@react-navigation/native';

const CapitalGain = () => {
  const navigation=useNavigation();
  return (
    <View style={Style.container}>
    
        <ScrollView>
          <View style={Style.view1}>
            <Text style={Style.txt1}>Capital Gain on <Text style={Style.txt2}>Shares/Mutual Funs</Text></Text>
            <Text style={Style.txt3}>NCCPL will send you an OTP on your mobile number(in</Text>
            <Text style={Style.txt3}>case of Local individual)or email(incase of any other</Text> 
            <Text style={Style.txt3}>person)after validation of following information from their</Text>
            <Text style={Style.txt3}>record:</Text>
          </View>
          <View style={Style.view2}>
          <Text style={Style.view2txt}>Net Capital Gain</Text>
          <View style={Style.view3}>
            
                    <TextInput style={Style.placeholder}  placeholder='Amount'
                      placeholderTextColor={"grey"}
                    />
                  </View>
                  </View>
                  <View style={Style.view4}>
          <Text style={Style.view2txt}>Capital Gain Tax (CGT) Liability</Text>
          <View style={Style.view3}>
            
                    <TextInput style={Style.placeholder}  placeholder='Amount'
                      placeholderTextColor={"grey"}
                    />
                  </View>
                  </View>
                  <View style={Style.view4}>
          <Text style={Style.view2txt}>Tax Deducted</Text>
          <View style={Style.view3}>
            
                    <TextInput style={Style.placeholder}  placeholder='Amount'
                      placeholderTextColor={"grey"}
                    />
                  </View>
                  </View>
                  <View style={Style.view4}>
          <Text style={Style.view2txt1}>Cost of Shares/Mutual Funds held at June 30,2022</Text>
          <View style={Style.view3}>
            
                    <TextInput style={Style.placeholder}  placeholder='Amount'
                      placeholderTextColor={"grey"}
                    />
                  </View>
                  </View>
        </ScrollView>
        <Button
        onPressBack={() => navigation.navigate('DividendGain')}
        />
    </View>
  )
}

export default CapitalGain;