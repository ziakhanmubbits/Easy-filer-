import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Style from './Style';
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import Button from '../../../../../../Components/Index';
import { useNavigation } from '@react-navigation/native';

const PropertyRent = () => {
  const navigation = useNavigation();
  const [bgcolor, setBgColor] = useState("firebrick")
  const [text, settext] = useState("white")
  const [text1, settext1] = useState("firebrick")
  const [bgcolor1, setBgColor1] = useState("white")

  return (
    <View style={Style.container}>
      <ScrollView>
        <View style={Style.imageview}>
          <Image source={require('../../../../../../../../src/assets/pictures/image32.png')}
            style={Style.image}
          />
          <Text style={Style.txt1}>Received rent from your property</Text>
          <Text style={Style.txt2}>(i.e from 1st July 2021 to 30th June 2022)</Text>
        </View>
        <View style={Style.view1}>
          <Text style={Style.txt3}>Please enter the rent received from your property</Text>
          <View style={{ alignItems: "center", marginTop: "3%" }}>
            <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Amount'
              placeholderTextColor={"grey"}
            />
          </View>
        </View>
        <View>
          <View style={[Style.hideview]}>
            <Text style={Style.text5}>Did your tenant deduct any tax on your rent.</Text>
            <View style={Style.switchtoggleview}>
              <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor }}
                onPress={() => {
                  // setBgColor
                  if (bgcolor === 'white') {
                    setBgColor1('white')
                    setBgColor('firebrick')
                    settext1('firebrick')
                    settext('white')
                  }
                }}>
                <Text style={{ color: text }}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor1 }}
                onPress={() => {
                  if (bgcolor1 === 'white') {
                    setBgColor1('firebrick')
                    setBgColor('white')
                    settext1('white')
                    settext('firebrick')
                  }
                }}>
                <Text style={{ color: text1 }}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {
              bgcolor1 === 'firebrick' &&
              (
                <View style={{ alignItems: "center" }}>
                  <TextInput style={Style.placeholder1} textAlign={'center'} placeholder='Amount'
                    placeholderTextColor={"grey"}
                  />
                </View>
              )
            }
          </View>
        </View>
      </ScrollView>

      <Button
        onPressBack={() => navigation.navigate('RentSale')}
      />
    </View>

  )
}
export default PropertyRent;