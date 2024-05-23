import { View,ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import NewHeader from '../../NewHeader'
import { responsiveScreenHeight,responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


import PersInfo from './PersInfo'
import NTNreg from './NTNreg'
import ChangePass from './ChangePass'

const Setting = () => {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <View style={styles.main}>
      <ScrollView contentContainerStyle={styles.cntntstyle}>
        <View style={styles.headerView}>
          <NewHeader />
        </View>
        <View style={{height : responsiveScreenHeight(79.4)}}>
          <TopTab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 12, fontWeight: "900" },
            swipeEnabled: false,
            tabBarPressColor: "red",
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: 'black',
            tabBarStyle: {
              backgroundColor: '#fffafa',
              borderBottomWidth: 0.1,
              borderBottomColor: 'gray',
              width: responsiveScreenWidth(100),
              alignSelf: "center",
            },
            tabBarIndicatorStyle: {
              backgroundColor: 'transparent'
            }
          }}>
            <TopTab.Screen name='Personal Info' component={PersInfo} />
            <TopTab.Screen name='NTN Registration' component={NTNreg} />
            <TopTab.Screen name='Change Password' component={ChangePass} />
          </TopTab.Navigator>
        </View>
      </ScrollView>
    </View>
  )
}

export default Setting
const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  cntntstyle: {
    flexGrow: 1
  },
  headerView: {
    height: responsiveScreenHeight(5)
  }
})