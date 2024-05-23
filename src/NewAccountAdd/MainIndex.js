import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FamilyIndex from './AddFamily/FamilyIndex'
import BusinessIndex from './AddBusiness/BusinessIndex'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import FontFamily from '../../assets/customFonts/customFonts'
const MainIndex = () => {
    const TopTab = createMaterialTopTabNavigator();
    const navigation = useNavigation();
    return (
        <View style={styles.main}>
            <ScrollView contentContainerStyle={styles.scrollstyle}>
                <View style={styles.viewbackgroud}>
                    <View style={styles.uprview}>
                        <Text style={styles.uprtxt}>
                            Please provide the below information which is required to create another profile.
                        </Text>
                        <TouchableOpacity style={styles.uprtxt}
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons size={40} color={'white'} name='arrow-back-sharp' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.uprview1}>
                        <TopTab.Navigator screenOptions={{
                            tabBarLabelStyle: { fontSize: 12, fontWeight: "900" },
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
                            <TopTab.Screen name='Family' component={FamilyIndex} />
                            <TopTab.Screen name='Business' component={BusinessIndex} />
                        </TopTab.Navigator>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default MainIndex
const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    scrollstyle: {
        flexGrow: 1
    },
    viewbackgroud: {
        backgroundColor: "red",
    },
    uprview: {
        height: responsiveScreenHeight(15),
        backgroundColor: "red",
    },
    uprview1: {
        backgroundColor: 'white',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        height: responsiveScreenHeight(69.5),
        width: responsiveScreenWidth(100)
    },
    rowbutton: {
        backgroundColor: "red",
        width: responsiveScreenWidth(30),
        height: responsiveScreenHeight(4),
        marginTop: "2%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    buttontxt: {
        color: "white",
        fontSize: 16,
        fontWeight: "700"
    },
    uprtxt: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600',
        marginTop: '3%',
        width: responsiveScreenWidth(90),
        alignSelf: "center",
        fontFamily: FontFamily.OpenSansBold
    }
})