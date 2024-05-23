import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UIActivityIndicator } from 'react-native-indicators'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'

import axios from 'axios'
import { REGISTRATION_OTP } from '../../../CommonUrl/CommonUrls'
import FontFamily from '../../../assets/customFonts/customFonts'


const Otp = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false)
    const [otpErr, setOtpErr] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const DataSubmit = () => {
        console.log(otp)
        setLoading(true)
        axios.post(REGISTRATION_OTP,
            {
                otp: otp,
                user: userEmail
            })
            .then(function (response) {
                console.log("response:", response.data.status)
                setLoading(false)
                if (response.data.status === true) {
                    navigation.navigate('Login')
                } else if (response.data.status === false) {
                    console.log('errors')
                    setOtpErr('*OTP Validation Error')
                }
            })
            .catch(function (error) {
                console.log("Error:", error)
                setLoading(false)
                if (error.response.status === 404) {
                    ToastAndroid.show("Something went wrong", ToastAndroid.TOP);
                }
                else if (error.response.status === 0) {
                    ToastAndroid.show("Network Error", ToastAndroid.TOP);
                }
            });
        // fetch('http://easyfiler.seoconsultant.com/api/checkOtp', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         otp: otp
        //     })
        // }).then((response) =>
        //     response.json()).then((data) => {
        //         console.log("Result Data", data)
        //         setLoading(false)
        //         if (data.data === 'Validation Error.') {
        //             setOtpErr('Invalid OTP')
        //         } else {
        //             setOtpErr('')
        //             Alert.alert(
        //                 'Congratulation',
        //                 'Your account has been created '
        //             )
        //             navigation.navigate('Login')
        //         }
        //     })
    }
    useEffect(() => {
        GetUser();
    })
    const GetUser = async () => {
        let userName = await AsyncStorage.getItem('EMAIL')
        if (userName !== null) {
            let x = JSON.parse(userName)
            console.log(x)
            setUserEmail(x)
        } else {

        }
    }
    const userData = async () => {
        if (checkotp != null) {
            DataSubmit();
        } else {
            console.log('wrong otp')
        }
    }
    const checkotp = (dgt) => {
        if (dgt != '') {
            setOtp(dgt)
        } else {
            console.log('otp wrong')
        }
    }
    return (
        <View style={styles.mian}>
            <ScrollView contentContainerStyle={styles.scrollview}>
                <View style={styles.intro}>
                    <Fontisto name='locked' size={90} color={"#EB0414"} />
                    <Text style={styles.vrtxt}>
                        OTP Verification
                    </Text>
                    <TextInput placeholder='OTP' style={styles.otpfield}
                        keyboardType={'numeric'}
                        onChangeText={(dgt) => checkotp(dgt)}
                    />
                    <Text style={styles.errtxt}>{otpErr}</Text>
                </View>
                <View>
                    {loading === true ?
                        (
                            <View style={styles.indicator}>
                                <UIActivityIndicator size={40} color={'red'} />
                            </View>
                        ) : (
                            <TouchableOpacity onPress={() => userData()}
                                style={styles.btn}>
                                <Text style={styles.btntxt}>
                                    Continue
                                </Text>
                            </TouchableOpacity>
                        )}
                </View>
            </ScrollView>
        </View>
    )
}

export default Otp
const styles = StyleSheet.create({
    mian: {
        flex: 1,
    },
    scrollview: {
        flexGrow: 1
    },
    picturestyle: {
        height: responsiveScreenHeight(15),
        width: responsiveScreenWidth(20)
    },
    vrtxt: {
        fontSize: responsiveScreenFontSize(3),
        fontFamily: FontFamily.OpenSansBold,
        color: "black",
        marginTop: "1%"
    },
    intro: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: "10%"
    },
    otpfield: {
        height: responsiveScreenHeight(5.5),
        width: responsiveScreenWidth(90),
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#EBE2E2",
        borderColor: "gray",
        marginTop: '5%'
    },
    btn: {
        height: responsiveScreenHeight(5.5),
        width: responsiveScreenWidth(40),
        backgroundColor: "#EB0414",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#EB0414",
        marginTop: "5%",
        alignSelf: "flex-end",
        marginRight: "5%"
    },
    btntxt: {
        color: "white",
        fontSize: 16,
        fontFamily: FontFamily.OpenSansBold
    },
    indicator: {
        marginTop: '10%'
    },
    errtxt: {
        color: "red",
        alignSelf: 'flex-start',
        fontFamily: FontFamily.OpenSansBold
    }
})