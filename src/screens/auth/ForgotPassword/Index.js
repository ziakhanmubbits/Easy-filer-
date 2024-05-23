import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, Modal, Pressable, ActivityIndicator } from 'react-native'
import React, { useRef } from 'react'
import { useState } from 'react'
import Style from './Style'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import axios from 'axios'
import { BASE_URL } from '../../../CommonUrl/CommonUrls'
import { useNavigation } from '@react-navigation/native'


const ForgotPassword = () => {
    const navigation=useNavigation()
    const [email, setEmail] = useState('');
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);

    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();

    const [f1, setF1] = useState('')
    const [f2, setF2] = useState('')
    const [f3, setF3] = useState('')
    const [f4, setF4] = useState('')
    const [otp, setOtp] = useState('')

    const dataSubmit = async () => {
        setLoading(true);
        try {
            const res = await axios.post(BASE_URL + 'sessions/forgetpassword', {
                email: 'abdulmomiinn297@gmail.com'
            });
            const user = res.data.user;
            const otp = user.otp;
            console.log('User Object', user);
            console.log('OTP', otp);
            setOtp(otp);

            setLoading(false);
            setModalVisible(true);
        } catch (error) {
            setLoading(false);
            console.log('Error', error);
        }
    }

    const checkOtp = () => {
        const enteredOtp = f1 + f2 + f3 + f4;
        if (enteredOtp == otp) {
            console.log('OTP Matched');
            navigation.navigate('ForgetOtp')
        } else {
            console.log('OTP not Matched')
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
                        Forgot Password
                    </Text>
                    <View style={Style.otpfield}>
                        <TextInput
                            style={Style.placeholder1}
                            value={email}
                            placeholder='Email'
                            placeholderTextColor={"black"}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                </View>
                <Text style={Style.txterremail}>{err}</Text>
                <View>
                    {loading === true ?
                        (
                            <View>
                               <ActivityIndicator size={20} color={'red'}/>
                            </View>
                        )
                        :
                        (
                            <TouchableOpacity onPress={() => dataSubmit(true)}
                                style={Style.btn}>
                                <Text style={Style.btntxt}>
                                    Continue
                                </Text>
                            </TouchableOpacity>
                        )}
                </View>
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <Pressable style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)', }}
                    onPress={() => setModalVisible(false)}
                >

                    <View style={Style.modalmainview}>
                        <View style={{ width: responsiveScreenWidth(70), marginTop: responsiveScreenHeight(5), alignItems: "center" }}>
                            <Text style={Style.modaltext}>OTP Verification</Text>
                        </View>
                        <View style={Style.otpview}>
                            <TextInput
                                style={[Style.inputview, { borderColor: f1.length >= 1 ? 'green' : "#000" }]}
                                ref={et1}
                                keyboardType='numeric'
                                placeholderTextColor={"black"}
                                maxLength={1}
                                value={f1}
                                onChangeText={(txt) => {
                                    setF1(txt);
                                    if (txt.length >= 1) {
                                        et2.current.focus();
                                    }
                                }}
                            />
                            <TextInput
                                style={[Style.inputview, { borderColor: f2.length >= 1 ? 'green' : "#000" }]}
                                ref={et2}
                                keyboardType='numeric'
                                placeholderTextColor={"black"}
                                maxLength={1}
                                value={f2}
                                onChangeText={(txt) => {
                                    setF2(txt);
                                    if (txt.length >= 1) {
                                        et3.current.focus();
                                    } else if (txt.length < 1) {
                                        et1.current.focus()
                                    }
                                }}
                            />
                            <TextInput
                                style={[Style.inputview, { borderColor: f3.length >= 1 ? 'green' : "#000" }]}
                                ref={et3}
                                keyboardType='numeric'
                                placeholderTextColor={"black"}
                                maxLength={1}
                                value={f3}
                                onChangeText={(txt) => {
                                    setF3(txt);
                                    if (txt.length >= 1) {
                                        et4.current.focus();
                                    } else if (txt.length < 1) {
                                        et2.current.focus()
                                    }
                                }}
                            />
                            <TextInput
                                style={[Style.inputview, { borderColor: f4.length >= 1 ? 'green' : "#000" }]}
                                ref={et4}
                                keyboardType='numeric'
                                placeholderTextColor={"black"}
                                maxLength={1}
                                value={f4}
                                onChangeText={(txt) => {
                                    setF4(txt)
                                    if (txt.length < 1) {
                                        et3.current.focus();
                                    }
                                }}
                            />

                        </View>
                        <View style={Style.modalbuttonview}>
                            <TouchableOpacity disabled={
                                f1 !== '' &&
                                    f2 !== '' &&
                                    f3 !== '' &&
                                    f4 !== '' ?
                                    false :
                                    true
                            }
                                onPress={() => checkOtp()}
                                style={[Style.modalbutton, { backgroundColor: f1 !== '' && f2 !== '' && f3 !== '' && f4 !== '' ? 'red' : '#949494' }]}>
                                <Text style={Style.modalbuttontext}>Verify OTP</Text>
                            </TouchableOpacity>
                       
                        </View>

                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}

export default ForgotPassword
