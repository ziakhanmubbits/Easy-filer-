import { View,ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Style from './style';
import Header from '../ImportHeader/Header';
import { responsiveScreenFontSize, responsiveScreenHeight,responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PersInfo from './PersInfo';
import NTNreg from './NTNreg';
import ChangePass from './ChnagePass';
import FontFamily from '../../assets/customFonts/customFonts';


const AccountSetting = () => {
    const TopTab = createMaterialTopTabNavigator();
  return (
    <View style={Style.mainView}>
      <View style={Style.innerView}>
                <Header />
            </View>
            <View style={{height : responsiveScreenHeight(100)}}>
          <TopTab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: responsiveScreenFontSize(1.3),fontFamily:FontFamily.MONTSERRAT_Medium},
            swipeEnabled: false,
            tabBarPressColor: "red",
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: 'black',
            tabBarStyle: {
              backgroundColor: 'white',
              borderBottomWidth: 0.1,
              borderBottomColor: 'gray',
              width: responsiveScreenWidth(100),
              alignSelf: "center",
            },
            tabBarIndicatorStyle: {
              backgroundColor: 'red',
              height:responsiveScreenHeight(100)
            }
          }}>
            <TopTab.Screen name='Personal Info' component={PersInfo} />
            <TopTab.Screen name='NTN Registration' component={NTNreg} />
            <TopTab.Screen name='Change Password' component={ChangePass} />
          </TopTab.Navigator>
        </View>
    </View>
  )
}

export default AccountSetting;