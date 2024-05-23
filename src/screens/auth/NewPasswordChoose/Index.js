import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Pressable,
  TextInput
} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { UIActivityIndicator } from 'react-native-indicators'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useTogglePasswordVisibility2 } from '../../Components/useTogglePasswordVisibility2'
import Style from './Style'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import { useTogglePasswordVisibility } from '../../Components/useTogglePasswordVisibility'


const NewPasswordChoose = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [err, setErr] = useState('');
  const [err1, setErr1] = useState('');
  const [loading, setLoading] = useState(false)
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } =
    useTogglePasswordVisibility2();

  useEffect(() => {
    GettinAsyncValue();
  })
  const GettinAsyncValue = async () => {
    let abc = await AsyncStorage.getItem('Email')

    if (abc !== null) {
      let x = JSON.parse(abc)
      setEmail(x)
      console.log('email', x)
    }
  }
  const navigation = useNavigation();
  const DataSubmit = () => {
    console.log(email, newPassword, confirmNewPassword)
    setLoading(true)
    fetch('http://easyfiler.seoconsultant.com/api/reset-password', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: newPassword,
        c_password: confirmNewPassword
      })
    }).then((response) =>
      response.json()).then((data) => {
        console.log("Result Data", data)
        setLoading(false)
        if (data === 'errors') {
          setErr('Required')
          setErr1('Required')
        } else if (newPassword === '' && confirmNewPassword === '') {
          setErr('Required')
          setErr1('Required')
        } else {
          setErr('')
          setErr1('')
        }
        navigation.navigate("Login")
      })
  }
  const submitFuction = async () => {
    if (newPassword != '' && confirmNewPassword === '') {
      setErr1('Required')
    } else {
      setErr1('')
    } if (newPassword === '' && confirmNewPassword !== '') {
      setErr('Required')
    } else {
      setErr('')
    }
    DataSubmit();
  }
  return (
    <View style={Style.main}>
      <ScrollView contentContainerStyle={Style.contenStyle}>
        <View style={Style.listview}>
          <FontAwesome5 name='user-lock' size={90} color={"#EB0414"} />
          <Text style={Style.vrtxt}>
            Choose New Password
          </Text>
          <View style={Style.box}>
            <TextInput
             style={Style.placeholder1}
             placeholder='Password'
             placeholderTextColor={"black"}
              value={newPassword}
              secureTextEntry={passwordVisibility}
              onChangeText={(value) => {
                let reg = /^\S*$/;
                if (value.length === '') {
                  setErr('this field is required');
                } else {
                  setErr('')
                } if (!reg.test(value)) {
                  setErr('spaces not allowed');
                } else {
                  setErr('')
                  setNewPassword(value);
                }
              }} />
            <Pressable style={Style.txtinput} onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons name={rightIcon} size={30} color='red' />
            </Pressable>
          </View>
          <Text style={Style.errtxt}>{err}</Text>
          <View style={Style.box1}>
            <TextInput
             style={Style.placeholder1}
             placeholder='Confirm Password'
             placeholderTextColor={"black"}
              value={confirmNewPassword}
              secureTextEntry={passwordVisibility2}

              onChangeText={(value) => {
                let reg = /^\S*$/;
                if (!reg.test(value)) {
                  setErr1('spaces not allowed');
                } else if (value != newPassword) {
                  setErr1('password not match');
                } else {
                  setErr1('')
                } if (value.length === '') {
                  setErr1('this feild is required');
                } else { setConfirmNewPassword(value) }
              }}/>
            <Pressable style={Style.txtinput} onPress={handlePasswordVisibility2}>
              <MaterialCommunityIcons name={rightIcon2} size={30} color='red' />
            </Pressable>
          </View>
          <Text style={Style.errtxt}>{err1}</Text>
        </View>
        <View>
          {loading === true ? (
            <View>
              <UIActivityIndicator style={{ marginTop: '5%' }} size={40} color={'red'} />
            </View>
          ) : (<TouchableOpacity onPress={() => submitFuction()}
            style={Style.btn}>
            <Text style={Style.btntxt}>
              Continue
            </Text>
          </TouchableOpacity>)}
        </View>
      </ScrollView>
    </View>
  )
}

export default NewPasswordChoose
