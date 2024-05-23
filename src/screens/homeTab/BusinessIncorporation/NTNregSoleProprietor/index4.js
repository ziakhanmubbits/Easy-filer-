import { View, Text, Pressable, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Header from '../../../ImportHeader/Header';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native-paper';
import Style from './Style';
import Button from '../../../Components/Index';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AnimatedLottieView from 'lottie-react-native';
import { useTogglePasswordVisibility } from '../../../Components/useTogglePasswordVisibility';
import { useTogglePasswordVisibility2 } from '../../../Components/useTogglePasswordVisibility2';
import { setAdressOfBusiness, setFbrId, setFbrPassword, setPrincipleActivity, setSoleBusinessName,  } from '../../../../store/mySaleryCalculatorReducer';
import axios from 'axios';
import { BASE_URL } from '../../../../CommonUrl/CommonUrls';


const SoleRegistrationForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [fbrI,setFbrI]=useState('')
  const [fbrPasswor,setFbrPasswor]=useState('')
  const [businessNam, setBusinessNam] = useState('')
  const [adressOfBusines,setAdressOfBusines]=useState('')
  const [principleActivit,setPrincipleActivit]=useState('')
  const [loading, setLoading] = useState(true)
  const [userId,setUserId]=useState('')
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  useTogglePasswordVisibility();
const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } =
  useTogglePasswordVisibility2();


 

  useEffect(() => {
    gettingAsyncValue();
  }, [])

  const gettingAsyncValue = async () => {
    let userEmail = await AsyncStorage.getItem('Email');
    let userID = await AsyncStorage.getItem('USER ID');
    if (userEmail !== null) {
      const mail = JSON.parse(userEmail);
      const id = userID;
      setUserId(id)
      GetApi(id)
    }
  };

  const incorporationtypeId = useSelector((state) => state.salary.incorporationtypeId);
  const registrationSole = useSelector((state) => state.salary.registrationSole) || 0;

  
  //store values in these variables
  const saveBusinessName = (text) => {
    dispatch(setSoleBusinessName(text))
  }
  const saveFbrId = (text) => {
    dispatch(setFbrId(text))
  }
  const saveFbrPassword = (text) => {
    dispatch(setFbrPassword(text))
  }
  const saveAdressOfBusiness = (text) => {
    dispatch(setAdressOfBusiness(text))
  }
  const savePrincipleActivity = (text) => {
    dispatch(setPrincipleActivity(text))
  }

  const GetApi = async (id) => {
    setLoading(true)
    try {
        const res = await axios.get(BASE_URL + `users/${id}/business-incorporations/${registrationSole}`)
        if (registrationSole != 0) {
            console.log('Response', res.data.business_incorporation)
            setFbrI(res.data.business_incorporation.email)
            setFbrPasswor(res.data.business_incorporation.phone)
            setBusinessNam(res.data.business_incorporation.business_name)
            setAdressOfBusines(res.data.business_incorporation.iris_password)
            setPrincipleActivit(res.data.business_incorporation.iris_pin)
            setLoading(false)
        } else {
          setFbrI('')
            setFbrPassword('')
            setFbrPasswor('')
            setBusinessNam('')
            setAdressOfBusines('')
            setLoading(false)
        }

    } catch (error) {
        setLoading(false)
        if (error.response) {
            console.log('Server Error:', error.response.data);
            console.log('Status:', error.response.status);
            console.log('Headers:', error.response.headers);
            ToastAndroid.showWithGravityAndOffset(
                'Server Error. Please try again later.',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            );
        } else if (error.request) {
            console.log('No response received:', error.request);
            ToastAndroid.showWithGravityAndOffset(
                'Please check your internet connection and try again.',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            );
        } else {
            console.log('Error:', error.message);
            ToastAndroid.showWithGravityAndOffset(
                'An unexpected error occurred. Please try again later.',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            );
        }
    }
}

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={Style.innerView}>
        <Header />
      </View>
      <View style={Style.toptextview}>
        <View style={{ margin: "5%" }}>
          <Text style={Style.toptext1}>Ntn Registration of Sole Proprietor</Text>
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
                <View style={Style.passbox}>
                  <View style={Style.input}>
                    <TextInput
                      style={Style.placeholder1}
                      outlineStyle={Style.placeholder2}
                      outlineColor='black'
                      activeOutlineColor={'black'}
                      label="Fbr ID"
                      secureTextEntry={passwordVisibility}
                      value={fbrI}
                      onChangeText={(text) => {
                        setFbrI(text);
                        saveFbrId(text)
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
                      style={Style.placeholder1}
                      outlineStyle={Style.placeholder2}
                      outlineColor='black'
                      activeOutlineColor={'black'}
                      label="FBR Password"
                      secureTextEntry={passwordVisibility2}
                      value={fbrPasswor}
                      onChangeText={(text) => {
                        setFbrPasswor(text);
                        saveFbrPassword(text)
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
                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                  <TextInput
                    style={Style.placeholder1}
                    outlineStyle={Style.placeholder2}
                    outlineColor='black'
                    activeOutlineColor={'black'}
                    label="Business Name"
                    value={businessNam}
                    onChangeText={(text) => {
                      setBusinessNam(text);
                      saveBusinessName(text)
                    }}
                    mode="outlined" />
                </View>
                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                  <TextInput
                    style={Style.placeholder1}
                    outlineStyle={Style.placeholder2}
                    outlineColor='black'
                    activeOutlineColor={'black'}
                    label="Adress of Business"
                    value={adressOfBusines}
                    onChangeText={(text) => {
                      setAdressOfBusines(text);
                      saveAdressOfBusiness(text)
                    }}
                    mode="outlined" />
                </View>
                <View style={{ marginTop: responsiveScreenHeight(2) }}>
                  <TextInput
                    style={Style.placeholder1}
                    outlineStyle={Style.placeholder2}
                    outlineColor='black'
                    activeOutlineColor={'black'}
                    label="Principle Activity"
                    value={principleActivit}
                    onChangeText={(text) => {
                      setPrincipleActivit(text);
                      savePrincipleActivity(text)
                    }}
                    mode="outlined" />
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      <Button
        onPressBack={() => navigation.goBack()}
        onPressForward={() => navigation.navigate('SoleFormUpload')}
      />
    </View>
  )
}

export default SoleRegistrationForm;