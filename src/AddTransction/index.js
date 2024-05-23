import { View,Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TransferCehck from './TransferCehck'
import Expencescheck from './Expencescheck'
import IncomeChck from './IncomeChck'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


const AddTransction = () => {
    const navigation = useNavigation();
    const tab = createMaterialTopTabNavigator();
    return (
        <View style={Style.main}>
            <View style={Style.headr}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons style={Style.icn} name='arrow-back-circle' size={35} color={'#FFF'} />
                </TouchableOpacity>
                <Text style={Style.hdrtxt}>Add Transction</Text>
            </View>
                 <View style={Style.uprview1}>
                        <tab.Navigator screenOptions={{
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
                             <tab.Screen name='Expences' component={Expencescheck} />
                            <tab.Screen name='Income' component={IncomeChck} />
                            <tab.Screen name='Transfer' component={TransferCehck} />
                        </tab.Navigator>
                </View>
        </View>
    )
}

export default AddTransction
