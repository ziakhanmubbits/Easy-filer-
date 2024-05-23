import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, ToastAndroid, Modal } from 'react-native'
import React, { useState, useRef } from 'react'
import Style from './Style'
import PhoneInput from 'react-native-phone-number-input'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useTogglePasswordVisibility } from '../../../../src/screens/Components/useTogglePasswordVisibility';
import { useTogglePasswordVisibility2 } from '../../../../src/screens/Components/useTogglePasswordVisibility2'
import axios from 'axios'
import { SIGNUP_USER } from '../../../CommonUrl/CommonUrls'
import AnimatedLottieView from 'lottie-react-native'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-paper';


const SignUp = ({ navigation }) => {
    const phoneInput = useRef(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [cnic, setCnic] = useState('')
    const [nameError, setNameError] = useState(false)
    const [nameErr, setNameErr] = useState('');
    const [errNum, setErrNum] = useState("");
    const [password, setPassword] = useState("");
    const [passErr, setPassErr] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const [mailError, setMailError] = useState(false)
    const [numberError, setNumberError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPassError, setConfirmPassError] = useState(false)
    const [cnicError, setCnicError] = useState(false)
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } =
        useTogglePasswordVisibility2();
    const inputRefs = {
        inputRef1: useRef(null),
        inputRef2: useRef(null),
        inputRef3: useRef(null),
        inputRef4: useRef(null),
        inputRef5: useRef(null),
        inputRef6: useRef(null),
    };



    const DataSubmit = () => {
        setLoading(true)
        console.log('calling')
        axios.post(SIGNUP_USER,
            {
                name: name,
                email: email,
                cnic:cnic,
                phone: phoneNumber,
                password: password
            })
            .then(function (response) {
                setLoading(false)
                console.log(" Signup response:", response.data)
                if (response.data.status === true) {
                    console.log('we have sent you otp to your email')
                    navigation.navigate('Login')
                } else if (response.data.status === false) {
                    setModalVisible(true)
                }else if(error.response.status === 401){
                    ToastAndroid.show("Something went wrong", ToastAndroid.TOP);
                    setLoading(false)
                }else if(error.response.status === 503){
                    ToastAndroid.show("No internet", ToastAndroid.TOP);
                    setLoading(false)
                }
            })
            .catch(function (error) {
                console.log("Error:", error)
                setLoading(false)
            });
    }

    //useref method
    const handleTextInputFocus = (ref) => {
        if (ref.current) {
            ref.current.focus();
        }
    };

    const userData = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name) {
            setNameError(true)
            handleTextInputFocus(inputRefs.inputRef1);
        } else if (!email || !emailRegex.test(email)) {
            setMailError(true)
            handleTextInputFocus(inputRefs.inputRef2);
        } else if (!cnic) {
            setCnicError(true)
            handleTextInputFocus(inputRefs.inputRef6);
        }
        else if (!phoneNumber) {
            setNumberError(true)
            handleTextInputFocus(inputRefs.inputRef3);
        } else if (!password) {
            setPasswordError(true)
            handleTextInputFocus(inputRefs.inputRef4);
        } else if (!confirmPassword) {
            setConfirmPassError(true)
            handleTextInputFocus(inputRefs.inputRef5);
        } else if (password !== confirmPassword) {
            // Passwords do not match, show an error
            setConfirmPassError(true);
        } else {
            await AsyncStorage.setItem("NAME", JSON.stringify(name));
            await AsyncStorage.setItem("Email", JSON.stringify(email));
            await AsyncStorage.setItem('UserCnic', cnic)
            await AsyncStorage.setItem('UserPhone', phoneNumber)
            DataSubmit();

        }
    }
    const handleSubmit = (phoneNumber) => {
        const isValid = phoneInput.current?.isValidNumber(phoneNumber);
        if (isValid) {
            console.log("SUBMITTED! ", phoneNumber)
            setPhoneNumber(phoneNumber)
            setErrNum('')
        } else {
            setErrNum('Not valid number')
        }
    }

    return (
        <View style={Style.outview}>
            <ScrollView contentContainerStyle={Style.CntntStyle}>
                <View style={Style.txtView}>
                    <View style={{ width: responsiveScreenWidth(20), height: responsiveScreenHeight(10), marginTop: responsiveScreenHeight(1) }}>
                        <Image source={require('../../../../src/assets/pictures/sp1.png')} style={{ width: "100%", height: "100%", resizeMode: "contain", borderRadius: 10 }} />
                    </View>
                    <Text style={Style.uprtxt}>
                        Create your account
                    </Text>
                </View>
                <View>
                    <View style={Style.box1}>
                        <TextInput
                            ref={inputRefs.inputRef1}
                            style={[Style.placeholder1, { color: nameError ? 'red' : 'black' }]}
                            outlineStyle={[Style.placeholder2, { borderColor: nameError ? 'red' : 'black' }]}
                            outlineColor='black'
                            activeOutlineColor={nameError ? 'red' : 'black'}
                            label="UserName"
                            value={name}
                            onChangeText={(text) => {
                                setName(text);
                                setNameError(false);
                            }}
                            mode="outlined" />
                    </View>
                    <View style={Style.box} >
                        <TextInput
                            ref={inputRefs.inputRef2}
                            style={[Style.placeholder1, { color: mailError ? 'red' : 'black' }]}
                            outlineStyle={[Style.placeholder2, { borderColor: mailError ? 'red' : 'black' }]}
                            outlineColor='black'
                            activeOutlineColor={mailError ? 'red' : 'black'}
                            label="Email"
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text);
                                setMailError(false);
                            }}
                            mode="outlined" />
                    </View>
                    <View style={Style.box} >
                        <TextInput
                            ref={inputRefs.inputRef6}
                            style={[Style.placeholder1, { color: cnicError ? 'red' : 'black' }]}
                            outlineStyle={[Style.placeholder2, { borderColor: cnicError ? 'red' : 'black' }]}
                            outlineColor='black'
                            activeOutlineColor={cnicError ? 'red' : 'black'}
                            label="Cnic"
                            value={cnic}
                            keyboardType='numeric'
                            maxLength={13}
                            onChangeText={(text) => {
                                setCnic(text);
                                setCnicError(false);
                            }}
                            mode="outlined" />
                    </View>
                    <View style={Style.box2}>
                        <TextInput
                            ref={inputRefs.inputRef3}
                            style={[Style.placeholder1, { color: numberError ? 'red' : 'black' }]}
                            outlineStyle={[Style.placeholder2, { borderColor: numberError ? 'red' : 'black' }]}
                            outlineColor='black'
                            activeOutlineColor={numberError ? 'red' : 'black'}
                            label="Phone Number"
                            keyboardType='numeric'
                            value={phoneNumber}
                            onChangeText={(text) => {
                                setPhoneNumber(text);
                                setNumberError(false);
                            }}
                            mode="outlined"
                            maxLength={11}
                        />
                    </View>
                    <View style={Style.passbox}>
                        <View style={Style.input}>
                            <TextInput
                                ref={inputRefs.inputRef4}
                                style={[Style.placeholder1, { color: passwordError ? 'red' : 'black' }]}
                                outlineStyle={[Style.placeholder2, { borderColor: passwordError ? 'red' : 'black' }]}
                                outlineColor='black'
                                activeOutlineColor={passwordError ? 'red' : 'black'}
                                label="Password"
                                secureTextEntry={passwordVisibility}
                                value={password}
                                onChangeText={(text) => {
                                    setPassword(text);
                                    setPasswordError(false);
                                }}
                                mode="outlined"
                            />
                        </View>
                        <View style={Style.icn}>
                            <Pressable onPress={handlePasswordVisibility}>
                                <MaterialCommunityIcons name={rightIcon} size={20} color='black' />
                            </Pressable>
                        </View>
                    </View>
                    <View style={Style.passbox}>
                        <View style={Style.input}>
                            <TextInput
                                ref={inputRefs.inputRef5}
                                style={[Style.placeholder1, { color: confirmPassError ? 'red' : 'black' }]}
                                outlineStyle={[Style.placeholder2, { borderColor: confirmPassError ? 'red' : 'black' }]}
                                outlineColor='black'
                                activeOutlineColor={confirmPassError ? 'red' : 'black'}
                                label="Confirm Password"
                                secureTextEntry={passwordVisibility2}
                                value={confirmPassword}
                                onChangeText={(text) => {
                                    setConfirmPassword(text);
                                    setConfirmPassError(false);
                                }}
                                mode="outlined"
                            />
                        </View>
                        <View style={Style.icn}>
                            <Pressable onPress={handlePasswordVisibility2}>
                                <MaterialCommunityIcons name={rightIcon2} size={20} color='black' />
                            </Pressable>
                        </View>
                    </View>
                    <Text style={Style.error}>{passErr}</Text>
                </View>
                <View style={Style.ltr}>
                    <Text style={Style.mixltr}>
                        Use 6 or more character with mix of letters and number
                    </Text>
                </View>
                <View style={Style.btnView}>
                    {loading === true ?
                        (
                            <View style={Style.loader}>
                                <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader')} autoPlay loop />
                            </View>
                        ) : (
                            <TouchableOpacity style={Style.btn}
                                onPress={() =>
                                    userData()
                                }>
                                <Text style={Style.btntxt}>
                                    Sign up
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
                <View style={Style.lastView}>
                    <Text style={Style.lasttxt1}>
                        Already Signup:
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={Style.lasttxt}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)', }}>

                    <View style={Style.modalmainview}>
                        <View style={{ width: responsiveScreenWidth(70), marginTop: responsiveScreenHeight(5), alignItems: "center" }}>
                            <Text style={Style.modaltext}>The email has already been taken.</Text>
                        </View>
                        <View style={Style.modalbuttonview}>
                            <TouchableOpacity title="OK" onPress={() => setModalVisible(false)} style={Style.modalbutton}>
                                <Text style={Style.modalbuttontext}>OK</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}
export default SignUp
