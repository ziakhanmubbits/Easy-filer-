import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Style from './Style';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import { TextInput } from 'react-native-paper';
import Header from '../../../ImportHeader/Header';
import Button from '../../../Components/Index';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setCommencementDate, setName, setPassword, setPin, setuserEmail, setuserPhone } from '../../../../store/mySaleryCalculatorReducer';
import axios from 'axios';
import { BASE_URL } from '../../../../CommonUrl/CommonUrls';
import AnimatedLottieView from 'lottie-react-native';


const RemoveRegistrationForm = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch()

  const [businessName, setBusinessName] = useState('')
  const [email, setEmail] = useState('')
  const [dateText, setDateText] = useState('')
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [getDate, setGetDate] = useState('')
  const [irisPin, setIrisPin] = useState('')
  const [irisPassword, setIrisPassword] = useState('')
  const [showAlternateText, setShowAlternateText] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessNameError, setBusinessNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [dateError, setDateError] = useState(false)
  const [irisPinError, setIrisPinError] = useState(false)
  const [irisPasswordError, setIrisPasswordError] = useState(false)
  const [loading, setLoading] = useState(true)
  const inputRefs = {
    inputRef1: useRef(null),
    inputRef2: useRef(null),
    inputRef3: useRef(null),
    inputRef4: useRef(null),
    inputRef5: useRef(null),
    inputRef6: useRef(null),
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
  const saveIrisPin = (text) => {
    dispatch(setPin(text))
  }
  const saveIrisPassword = (text) => {
    dispatch(setPassword(text))
  }
  const saveCommencementDate = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    dispatch(setCommencementDate(formattedDate));
  }


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
  // console.log('incorporationtypeId',incorporationtypeId)
  const registrationRemove = useSelector((state) => state.salary.registrationRemove) || 0;
  // console.log('registrationRemove',registrationRemove)
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
        // console.log('lastBusinessData', lastBusinessData)
        setBusinessName(lastBusinessData.business_name)
        setPhoneNumber(lastBusinessData.phone)
        setDateText(lastBusinessData.commencement_date)
        setIrisPin(lastBusinessData.iris_pin)
        setIrisPassword(lastBusinessData.iris_password)
      } else {
        setBusinessName('');
        setPhoneNumber('');
        setDateText('');
        setPin('');
        setPassword('');
      }

      setLoading(false);
    } catch (error) {
      console.log('Error fetching API:', error);
      setLoading(false);
    }
  };


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
    } else if (!dateText) {
      setDateError(true)
      handleTextInputFocus(inputRefs.inputRef4);
    } else if (!irisPin) {
      setIrisPinError(true)
      handleTextInputFocus(inputRefs.inputRef5);
    } else if (!irisPassword) {
      setIrisPasswordError(true)
      handleTextInputFocus(inputRefs.inputRef6);
    } else {
      navigation.navigate('RemoveFormUpload')
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={Style.innerView}>
        <Header />
      </View>
      <View style={Style.toptextview}>
        <View style={{ margin: "5%" }}>
          <Text style={Style.toptext1}>Remove Business from NTN</Text>
          <Text style={Style.toptext2}>EasyFiler has made process the simplest for you,so that</Text>
          <Text style={Style.toptext2}>you know what are you doing and how you are doing it.</Text>
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
                    label="Enter Business Name"
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
                    label="Email"
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
                    label="Phone Number"
                    keyboardType='numeric'
                    maxLength={11}
                    value={phoneNumber}
                    onChangeText={(text) => {
                      setPhoneNumber(text);
                      saveNumber(text);
                      setPhoneNumberError(false)
                    }}
                    mode="outlined" />
                </View>
                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                  <TouchableOpacity style={Style.accview}>
                    <TouchableOpacity style={Style.accinput}>
                      <TextInput
                        ref={inputRefs.inputRef4}
                        style={[Style.placeholder1, { color: dateError ? 'red' : 'black' }]}
                        outlineStyle={[Style.placeholder2, { borderColor: dateError ? 'red' : 'black' }]}
                        outlineColor='black'
                        activeOutlineColor={dateError ? 'red' : 'black'}
                        label="Start Date"
                        value={dateText}
                        mode="outlined"
                        onPressIn={() => setOpen(true)} />
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
                <View>
                  <DatePicker
                    modal
                    value={getDate}
                    mode='date'
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                      setOpen(false);
                      setDate(date);
                      saveCommencementDate(date);
                      setDateError(false);
                      setDateText(moment(date).format('YYYY-MM-DD'));
                    }}
                    onCancel={() => {
                      setOpen(false);
                    }} />
                </View>
                {showAlternateText ?
                  (
                    <View></View>
                  )
                  :
                  (
                    <><View style={{ marginTop: responsiveScreenHeight(2) }}>
                      <TextInput
                        ref={inputRefs.inputRef5}
                        style={[Style.placeholder1, { color: irisPinError ? 'red' : 'black' }]}
                        outlineStyle={[Style.placeholder2, { borderColor: irisPinError ? 'red' : 'black' }]}
                        outlineColor='black'
                        activeOutlineColor={irisPinError ? 'red' : 'black'}
                        label="IRIS Pin"
                        value={irisPin}
                        onChangeText={(text) => {
                          setIrisPin(text);
                          saveIrisPin(text);
                          setIrisPinError(false)
                        }}
                        mode="outlined" />
                    </View><View style={{ marginTop: responsiveScreenHeight(2) }}>
                        <TextInput
                          ref={inputRefs.inputRef6}
                          style={[Style.placeholder1, { color: irisPasswordError ? 'red' : 'black' }]}
                          outlineStyle={[Style.placeholder2, { borderColor: irisPasswordError ? 'red' : 'black' }]}
                          outlineColor='black'
                          activeOutlineColor={irisPasswordError ? 'red' : 'black'}
                          label="IRIS Password"
                          value={irisPassword}
                          onChangeText={(text) => {
                            setIrisPassword(text);
                            saveIrisPassword(text);
                            setIrisPasswordError(false)
                          }}
                          mode="outlined" />
                      </View></>
                  )}
                <View style={showAlternateText ? Style.alternateBottomView : Style.bottomview}>
                  <View style={showAlternateText ? Style.alternateiconview : Style.iconview}>
                    <Image source={require('../../../../../src/assets/pictures/warning.png')} style={Style.img} />
                  </View>
                  <View style={{ width: responsiveScreenWidth(76), justifyContent: "center" }}>
                    {showAlternateText ? (
                      <View>
                        <Text style={{ color: "black" }}>It is very important that your mobile number</Text>
                        <Text style={{ color: "black" }}>shouldbe in FBR'S records.if your number is not</Text>
                        <Text style={{ color: "black" }}>in FBR records,you have to visit FBR in person.</Text>
                        <Text style={{ color: "black" }}>You will be refunded in full for this service.</Text>
                      </View>
                    ) : (
                      <Text style={{ color: "black" }}>If you don't remember your IRIS-FBR Password & PIN,</Text>
                    )}
                    <TouchableOpacity onPress={() => setShowAlternateText(!showAlternateText)}>
                      <Text style={{ color: "red", textDecorationLine: "underline" }}>
                        Click Here
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
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
export default RemoveRegistrationForm;
