
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ServiceList from './ServiceList';
import IntellectaulProperty from './IntellectaulProperty';
import IncomeTaxReturn from './IncomeTaxReturn';
import Comapny from './Comapny';


const TopTab = createMaterialTopTabNavigator();

const ServiceTopTab = () => {
  return (
   <TopTab.Navigator screenOptions={{
    tabBarLabelStyle: { fontSize: 12,fontWeight:"900" },
    tabBarItemStyle: { width:"100%" },
    swipeEnabled:false,
    tabBarPressColor:"red",
    tabBarActiveTintColor:"red",
    tabBarInactiveTintColor:'black',
    tabBarStyle: { backgroundColor: 'gainsboro',
    justifyContent: 'center',
    alignContent: 'center' },
    tabBarActiveBackgroundColor:'red',
    tabBarIndicator:false,
  }}
  >
      <TopTab.Screen name='All' component={ServiceList}/>
      <TopTab.Screen name='Intellectual Property' component={IntellectaulProperty}/>
      <TopTab.Screen name='Imcome Tax Return' component={IncomeTaxReturn}/>
      <TopTab.Screen name='Comapny' component={Comapny}/>
   </TopTab.Navigator>
  )
}

export default ServiceTopTab