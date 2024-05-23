import { View, Text, ScrollView, TouchableOpacity, Pressable, ToastAndroid, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import { responsiveScreenHeight, responsiveScreenWidth, } from 'react-native-responsive-dimensions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTogglePasswordVisibility } from '../../Components/useTogglePasswordVisibility';
import Style from './Style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import { LOGIN_USER } from '../../../CommonUrl/CommonUrls'
import { useDispatch } from 'react-redux'
import AnimatedLottieView from 'lottie-react-native'
import { TextInput } from 'react-native-paper';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passError, setPassError] = useState('');
  const [loading, setLoading] = useState(false)
  const [mailError, setMailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const inputRefs = {
    inputRef1: useRef(null),
    inputRef2: useRef(null),
  };
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const dispatch = useDispatch()


  const DataSubmit = () => {
    setLoading(true)
    axios.post(LOGIN_USER,
      {
        email: email,
        password: password
      })
      .then(function (response) {
        setLoading(false)
        if (response.data.status === true) {
          console.log('UserId', response.data.user.id)
          getUser(response)
        } else if (response.data.error === 'Unauthorised') {
          console.log('errors')
          setPassError('Wrong Password')
        }else if(error.response.status === 404){
          setLoading(false)
          ToastAndroid.show("Something went wrong", ToastAndroid.TOP);
        }else if(error.response.status === 503){
          setLoading(false)
          ToastAndroid.show("No internet connection", ToastAndroid.TOP);
        }
      })
      .catch(function (error) {
        console.log("Erroreeee:", error)
        setLoading(false)
      });
  }
  const getUser = async (response) => {
    let username = response.data.user.name;
    await AsyncStorage.setItem('NAME', JSON.stringify(username))
    let userEmail = response.data.user.email;
    await AsyncStorage.setItem('EMAIL', JSON.stringify(userEmail))
    let userID = response.data.user.id;
    // console.log('hey',response.data.user.id)
    await AsyncStorage.setItem('USER ID', JSON.stringify(userID))
    navigation.navigate('BottomHome')
  }

  //useref method
  const handleTextInputFocus = (ref) => {
    if (ref.current) {
      ref.current.focus();
    }
  };
  const userData = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setMailError(true)
      handleTextInputFocus(inputRefs.inputRef1);
    } else if (!password) {
      setPasswordError(true)
      handleTextInputFocus(inputRefs.inputRef2);
    } else {
      await AsyncStorage.setItem("Email", JSON.stringify(email));
      await AsyncStorage.setItem("PASS", JSON.stringify(password));
      DataSubmit();
      console.log('Email', email, 'Password', password)
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
            Sign in to your account
          </Text>
        </View>
        <View style={Style.box}>
          <TextInput
            ref={inputRefs.inputRef1}
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
        <View style={Style.passbox}>
          <View style={Style.input}>
            <TextInput
              ref={inputRefs.inputRef2}
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
              mode="outlined" />
          </View>
          <View style={Style.icn}>
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons name={rightIcon} size={20} color='black' />
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={Style.textFailed}>
            {passError}
          </Text>
        </View>
        <View style={Style.btnView}>
          {
            loading === true ?
              (
                <View style={Style.loader}>
                  <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader')} autoPlay loop />
                </View>
              )
              :
              (
                <TouchableOpacity
                  onPress={() => userData()}
                  style={Style.btn}>
                  <Text style={Style.btntxt}>
                    Sign in
                  </Text>
                </TouchableOpacity>
              )}
        </View>
        <View style={Style.pasView}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={Style.Forpass}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Style.lastView}>
          <Text style={Style.lasttxt1}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
            <Text style={Style.lasttxt}>
              Create an accoount
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Login;

