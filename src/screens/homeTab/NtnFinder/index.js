import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import Style from './Style';
import Header from '../../ImportHeader/Header';
import { TextInput } from 'react-native-paper'; 

const NTNfinder = () => {
  const [cnicNumber, setCnicNumber] = useState('')
  const [cnicNumberError, setCnicNumberError] = useState('')
  return (
    <View style={Style.mainView}>
      <View style={Style.innerView}>
        <Header />
      </View>
      <ScrollView contentContainerStyle={Style.contentContainer}>
        <View style={Style.v1}>
          <View style={Style.imageview}>
            <Image style={Style.img} source={require('../../../../src/assets/pictures/image48.png')} />
          </View>
          <Text style={Style.txtheder}>NTN Finder</Text>
          <Text style={Style.txttop}>EasyFiler will find and fetch your data from fbr{'\n'} service Please bear with us if it take longer.</Text>
        </View>
        <View style={Style.search}>
          <View>          
            <TextInput
            style={Style.placeholder1}
            outlineStyle={Style.placeholder2}
            outlineColor='black'
            activeOutlineColor={'black'}
            label="Cnic"
            value={cnicNumber}
            onChangeText={(text) => {
              setCnicNumber(text);
            }}
            mode="outlined" />
            </View>

        </View>
        <Text style={Style.texterror}>{cnicNumberError}</Text>
        <View style={Style.txtView}>
          <TouchableOpacity style={Style.txtButton}>
            <Text style={Style.txt}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default NTNfinder;
