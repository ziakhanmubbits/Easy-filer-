import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Header from '../../../ImportHeader/Header';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native-paper';
import Style from './Style';
import Button from '../../../Components/Index';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setuserEmail, setuserPhone } from '../../../../store/mySaleryCalculatorReducer';
import axios from 'axios';
import { BASE_URL } from '../../../../CommonUrl/CommonUrls';
import AnimatedLottieView from 'lottie-react-native';
import FontFamily from '../../../../assets/customFonts/customFonts';

const AopRegistrationForm = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  //states
  const [businessName, setBusinessName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessNameError, setBusinessNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [loading, setLoading] = useState(true)
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [array, setArray] = useState([])
  const inputRefs = {
    inputRef1: useRef(null),
    inputRef2: useRef(null),
    inputRef3: useRef(null),
    inputRef4: useRef(null),
  };

  useEffect(() => {
    gettingAsyncValue();
  }, [])

  const gettingAsyncValue = async () => {
    let userEmail = await AsyncStorage.getItem('Email');
    let userID = await AsyncStorage.getItem('USER ID');
    if (userEmail !== null) {
      const mail = JSON.parse(userEmail);
      setEmail(mail)
      saveEmail(mail)
      const id = userID;
      fetchData(id)
    }
  };

  const incorporationtypeId = useSelector((state) => state.salary.incorporationtypeId);
  const registrationAop = useSelector((state) => state.salary.registrationAop) || 0;

  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        BASE_URL + `users/${id}/business-incorporations?incorporationtype_id=${incorporationtypeId}`
      );
      const business = response.data.business_incorporations;
      if (Object.keys(business).length > 0) {
        const BusinessArray = Object.values(business);
        const lastIndex = BusinessArray.length - 1;
        const lastBusinessData = BusinessArray[lastIndex];
        setBusinessName(lastBusinessData.business_name)
        setPhoneNumber(lastBusinessData.phone)
      } else {
        setBusinessName('');
        setPhoneNumber('');
      }
      setLoading(false);
    } catch (error) {
      console.log('Error fetching API:', error);
      setLoading(false);
    }
  };

  // //store values in these variables
  const saveBusinessName = (text) => {
    dispatch(setName(text))
  }
  const saveEmail = (text) => {
    dispatch(setuserEmail(text))
  }
  const saveNumber = (text) => {
    dispatch(setuserPhone(text))
  }

  //useref method
  const handleTextInputFocus = (ref) => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  //validation method
  const validation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (businessName === '') {
      setBusinessNameError(true)
      handleTextInputFocus(inputRefs.inputRef1);
    } else if (!email || !emailRegex.test(email)) {
      setEmailError(true)
      handleTextInputFocus(inputRefs.inputRef2);
    } else if (!phoneNumber) {
      setPhoneNumberError(true)
      handleTextInputFocus(inputRefs.inputRef3);
    } else {
      navigation.navigate('AopFormUpload')
    }
  }

  const additionalFields = (
    <View>
      <View style={{ marginTop: responsiveScreenHeight(2), flexDirection: "row", justifyContent: "space-around", width: responsiveScreenWidth(100) }}>
        <TextInput
          style={Style.placeholder3}
          outlineStyle={Style.placeholder4}
          outlineColor='black'
          activeOutlineColor={'black'}
          label="Name of Partner 1"
          keyboardType='numeric'
          maxLength={13}
          mode="outlined" />
        <TextInput
          style={Style.placeholder3}
          outlineStyle={Style.placeholder4}
          outlineColor='black'
          activeOutlineColor={'black'}
          label="%age of partner 1"
          keyboardType='numeric'
          maxLength={13}
          mode="outlined" />
      </View>
      <View style={{ marginTop: responsiveScreenHeight(2), flexDirection: "row", justifyContent: "space-around", width: responsiveScreenWidth(100) }}>
        <TextInput
          style={Style.placeholder3}
          outlineStyle={Style.placeholder4}
          outlineColor='black'
          activeOutlineColor={'black'}
          label="Name of Partner 2"
          keyboardType='numeric'
          maxLength={13}
          mode="outlined" />
        <TextInput
          style={Style.placeholder3}
          outlineStyle={Style.placeholder4}
          outlineColor='black'
          activeOutlineColor={'black'}
          label="%age of partner 2"
          keyboardType='numeric'
          maxLength={13}
          mode="outlined" />
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={Style.innerView}>
        <Header />
      </View>
      <View style={Style.toptextview}>
        <View style={{ margin: "5%" }}>
          <Text style={Style.toptext1}>Ntn Registration of AOP Partnership</Text>
          <Text style={Style.toptext2}>EasyFiler has made process the simplest for you,so that</Text>
          <Text style={Style.toptext2}>you know what you are doing and how you are doing it.</Text>
        </View>
      </View>
      {loading ?
        (
          <View style={Style.loader}>
            <AnimatedLottieView source={require('../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
          </View>
        )
        :
        (
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ backgroundColor: "white", }}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                  <TextInput
                    ref={inputRefs.inputRef1}
                    style={[Style.placeholder1, { color: businessNameError ? 'red' : 'black' }]}
                    outlineStyle={[Style.placeholder2, { borderColor: businessNameError ? 'red' : 'black' }]}
                    outlineColor='black'
                    activeOutlineColor={businessNameError ? 'red' : 'black'}
                    label="Business Name"
                    value={businessName}
                    onChangeText={(text) => {
                      setBusinessName(text);
                      saveBusinessName(text);
                      setBusinessNameError(false)
                    }}
                    mode="outlined" />
                </View>
                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                  <TextInput
                    ref={inputRefs.inputRef2}
                    style={[Style.placeholder1, { color: emailError ? 'red' : 'black' }]}
                    outlineStyle={[Style.placeholder2, { borderColor: emailError ? 'red' : 'black' }]}
                    outlineColor='black'
                    activeOutlineColor={emailError ? 'red' : 'black'}
                    label="Address"
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                      saveEmail(text);
                      setEmailError(false)
                    }}
                    mode="outlined" />
                </View>
                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                  <TextInput
                    ref={inputRefs.inputRef3}
                    style={[Style.placeholder1, { color: phoneNumberError ? 'red' : 'black' }]}
                    outlineStyle={[Style.placeholder2, { borderColor: phoneNumberError ? 'red' : 'black' }]}
                    outlineColor='black'
                    activeOutlineColor={phoneNumberError ? 'red' : 'black'}
                    label="Principle Activity"
                    value={phoneNumber}
                    keyboardType='numeric'
                    maxLength={11}
                    onChangeText={(text) => {
                      setPhoneNumber(text);
                      setPhoneNumberError(false)
                      saveNumber(text);
                    }}
                    mode="outlined" />
                </View>
                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                  <TextInput
                    ref={inputRefs.inputRef3}
                    style={[Style.placeholder1, { color: phoneNumberError ? 'red' : 'black' }]}
                    outlineStyle={[Style.placeholder2, { borderColor: phoneNumberError ? 'red' : 'black' }]}
                    outlineColor='black'
                    activeOutlineColor={phoneNumberError ? 'red' : 'black'}
                    label="Phone Number"
                    value={phoneNumber}
                    keyboardType='numeric'
                    maxLength={11}
                    onChangeText={(text) => {
                      setPhoneNumber(text);
                      setPhoneNumberError(false)
                      saveNumber(text);
                    }}
                    mode="outlined" />
                </View>
                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                  <TextInput
                    ref={inputRefs.inputRef3}
                    style={[Style.placeholder1, { color: phoneNumberError ? 'red' : 'black' }]}
                    outlineStyle={[Style.placeholder2, { borderColor: phoneNumberError ? 'red' : 'black' }]}
                    outlineColor='black'
                    activeOutlineColor={phoneNumberError ? 'red' : 'black'}
                    label="Email Adress"
                    value={phoneNumber}
                    keyboardType='numeric'
                    maxLength={11}
                    onChangeText={(text) => {
                      setPhoneNumber(text);
                      setPhoneNumberError(false)
                      saveNumber(text);
                    }}
                    mode="outlined" />
                </View>
                <View style={{ marginTop: responsiveScreenHeight(2), flexDirection: "row", justifyContent: "space-around", width: responsiveScreenWidth(100) }}>
                  <TextInput
                    style={Style.placeholder3}
                    outlineStyle={Style.placeholder4}
                    outlineColor='black'
                    activeOutlineColor={'black'}
                    label="Name of Partner"
                    keyboardType='numeric'
                    maxLength={13}
                    mode="outlined" />
                  <TextInput
                    style={Style.placeholder3}
                    outlineStyle={Style.placeholder4}
                    outlineColor='black'
                    activeOutlineColor={'black'}
                    label="%age of partner"
                    keyboardType='numeric'
                    maxLength={13}
                    mode="outlined" />
                </View>
                  {showAdditionalFields && additionalFields}
              </View>
              <View style={{ marginTop: responsiveScreenHeight(2) }}>
                <TouchableOpacity style={{ backgroundColor: "darkred", width: responsiveScreenWidth(15), alignItems: "center", justifyContent: "center", height: responsiveScreenHeight(4), marginLeft: responsiveScreenWidth(5), borderRadius: 5 }}
                  onPress={() => setShowAdditionalFields(!showAdditionalFields)} >
                  <Text style={{ color: "white", fontSize: responsiveScreenFontSize(2), fontFamily: FontFamily.MONTSERRAT_Regular }}>Add +</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: responsiveScreenHeight(2), alignItems: "center", justifyContent: "center" }}>
                <TextInput
                  ref={inputRefs.inputRef3}
                  style={[Style.placeholder1, { color: phoneNumberError ? 'red' : 'black' }]}
                  outlineStyle={[Style.placeholder2, { borderColor: phoneNumberError ? 'red' : 'black' }]}
                  outlineColor='black'
                  activeOutlineColor={phoneNumberError ? 'red' : 'black'}
                  label="Total Investment"
                  value={phoneNumber}
                  keyboardType='numeric'
                  maxLength={11}
                  onChangeText={(text) => {
                    setPhoneNumber(text);
                    setPhoneNumberError(false)
                    saveNumber(text);
                  }}
                  mode="outlined" />
              </View>
            </View>
          </ScrollView>
        )}
      <Button
        onPressBack={() => navigation.goBack()}
        onPressForward={() => validation()}
      />
    </View>
  )
}

export default AopRegistrationForm;