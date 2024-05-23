import { View, Text, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../ImportHeader/Header';
import Style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import FontFamily from '../../../assets/customFonts/customFonts';
import { useNavigation } from '@react-navigation/native';
import Button from '../../Components/Index';
import Button5 from '../../Components/index5';


const RemoveYesNo = () => {
    const navigation=useNavigation()
  const [userName, setUserName] = useState('')

  useEffect(() => {
    gettingAsyncValue();
  }, [])

  const gettingAsyncValue = async () => {
    let userName = await AsyncStorage.getItem('NAME');
    if (userName !== null) {
      const name = JSON.parse(userName);
      setUserName(name)
      console.log('username', name)
    }
  };

 
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={Style.innerView}>
        <Header />
      </View>
      <View style={Style.toptextview}>
        <View style={{ margin: "5%" }}>
          <Text style={Style.toptext1}>Remove Business From NTN</Text>
          <Text style={Style.toptext2}><Text style={Style.toptext3}>{userName},</Text>Please select the option best suited you</Text>
        </View>
      </View>
      <View style={Style.buttonview}>
        <Text style={Style.viewtext}>The Person is Registered for Sales Tax?</Text>
        <View style={Style.button}>
            <TouchableOpacity style={Style.buttonstyle}>
                <Text style={Style.buttontext}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={Style.buttonstyle} onPress={() => navigation.navigate('RemovalForm3')}>
                <Text style={Style.buttontext}>No</Text>
            </TouchableOpacity>
        </View>
      </View>
      <Button5
      onPressBack={() => navigation.goBack()}
      />
    </View >
  )
}

export default RemoveYesNo;