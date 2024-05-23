import { View, Text, ScrollView, TouchableOpacity, Image,TextInput } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UIActivityIndicator } from 'react-native-indicators'
import Style from './Style'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import axios from 'axios'


const ForgetOtp = () => {
    const navigation = useNavigation();
   
    const chnagePass=async()=>{
        try{
            const res=await axios.post
        }catch(error){
            console.log('Error',error)
        }
    }
    return (
        <View style={Style.mian}>
            <ScrollView contentContainerStyle={Style.scrollview}>
                <View style={Style.intro}>
                <View style={{ width: responsiveScreenWidth(20), height: responsiveScreenHeight(15) }}>
                        <Image source={require('../../../../src/assets/pictures/forgot-password.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
                    </View>
                    <Text style={Style.vrtxt}>
                        Create New Password
                    </Text>
                    <View style={Style.otpfield}>
                    <TextInput
                            value={otp}
                            style={Style.placeholder1}
                            placeholder='New Password'
                            placeholderTextColor={"black"}
                            onChangeText={(txt) => {
                               checkotp(txt)
                            }}/>
                    </View>
                    <View style={Style.otpfield}>
                    <TextInput
                            value={otp}
                            style={Style.placeholder1}
                            placeholder='Confirm New Password'
                            placeholderTextColor={"black"}
                            onChangeText={(txt) => {
                               checkotp(txt)
                            }}/>
                    </View>
                </View>
                <Text style={Style.erropttext}>{err}</Text>
                <View>
                    {
                        loading === true ?
                            (
                                <View>
                                    <UIActivityIndicator style={{marginTop:'5%'}} size={40} color={'red'} />
                                </View>
                            ) : (
                                <TouchableOpacity onPress={() => userData()}
                                    style={Style.btn}>
                                    <Text style={Style.btntxt}>
                                        Continue
                                    </Text>
                                </TouchableOpacity>
                            )
                    }

                </View>
            </ScrollView>
        </View>
    )
}

export default ForgetOtp
