import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveScreenHeight,responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Header from '../../../ImportHeader/Header'
import FontFamily from '../../../../assets/customFonts/customFonts'
import Business from './BusinessInfo'




const BusinessIncome = () => {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <View style={styles.main}>
      <View style={styles.innerView}>
        <Header />
      </View>
      
        <View style={styles.uprView}>
          <Text style={styles.vtxt1}>IRIS Profile Update</Text>
          <Text style={styles.vtxt2}>Please Follow the process to update your NTN particulars with FBR</Text>
        </View>
        {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
        <View style={styles.lowerView}>
          <TopTab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 13, fontFamily:FontFamily.OpenSansSemiBold },
            swipeEnabled: false,
            tabBarPressColor: "red",
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: 'black',
            tabBarStyle: {
              backgroundColor: '#fffafa',
              borderTopStartRadius: 25,
              borderTopEndRadius: 25,
              borderBottomWidth: 0.1,
              borderBottomColor: 'gray',
              width: responsiveScreenWidth(100),
              alignSelf: "center",
            },
            tabBarIndicatorStyle: {
              backgroundColor: 'transparent'
            }
          }}>
            <TopTab.Screen name='Personal Information' component={Business} />    
          </TopTab.Navigator>
        </View>
      {/* </ScrollView> */}
    </View>
  )
}

export default BusinessIncome
const styles = StyleSheet.create({
  main: {
   flex:1,
    backgroundColor: '#EB0414'
  },
  uprView: {
    height: responsiveScreenHeight(10),
    marginTop:'5%',
    marginLeft:'5%'
  },
  lowerView: {
    flexGrow:1,
    width: responsiveScreenWidth(100),
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20
  },
  hdrText: {
    color: "white",
    fontSize: 18,
    fontWeight: '800',
    marginLeft: '3%',
    marginTop: "2%",
    fontFamily: FontFamily.OpenSansBold
  },
  InstructionTxt: {
    color: "white",
    fontSize: 15,
    fontWeight: '500',
    marginLeft: '3%',
    fontFamily: FontFamily.OpenSansBold
  },
  innerView: {
    height: responsiveHeight(7),
    width: responsiveWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
  },
  vtxt1:{
    fontSize: responsiveFontSize(2.6),
    color:"white",
    fontFamily: FontFamily.OpenSansBold
  },
  vtxt2:{
    color:"white",
    width:responsiveWidth(80),
    fontSize: responsiveFontSize(1.7),
    marginTop:"1%",
    fontFamily: FontFamily.OpenSansSemiBold
  },
})