import { View, Text,Pressable, TouchableOpacity,TextInput } from 'react-native'
import React,{useState} from 'react'
import { useTogglePasswordVisibility } from '../../../hooks/useTogglePasswordVisibility';
import { useTogglePasswordVisibility2 } from '../../../hooks/useTogglePasswordVisibility2';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';


import Style from './Style';

const NTNreg = () => {
  const [pin, setPin] = useState('')
  const [password, setPassword] = useState('')
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } =
    useTogglePasswordVisibility2();

  return (
    <View style={{backgroundColor:'#FFF',flex:1}}>
          <View style={Style.passbox}>
        <View style={Style.input}>
          <TextInput
           style={Style.placeholder1}
            value={password}
            secureTextEntry={passwordVisibility}
            placeholder="Password"
            placeholderTextColor={"black"}
            onChangeText={(pass) => {
              if (pass === '') {
                // setPassError('Password required')
              } else {
                // setPassError('')
              }
              setPassword(pass)
            }}/>
        </View>
        <View style={Style.icn}>
          <Pressable onPress={handlePasswordVisibility}>
            <MaterialCommunityIcons name={rightIcon} size={28} color='red' />
          </Pressable>
        </View>
      </View>
      <View style={Style.passbox2}>
        <View style={Style.input2}>
          <TextInput
           style={Style.placeholder1}
            value={pin}
            secureTextEntry={true}
            placeholder="Pin"
            placeholderTextColor={"black"}
            onChangeText={(pass) => {
              if (pass === '') {
                // setPinError('Pin required')
              } else {
                // setPinError('')
              }
              setPin(pass)
            }}/>
        </View>
      </View>
      <View style={Style.btnView}>
        <TouchableOpacity style={Style.UpdateBtn}>
          <Text style={Style.btnTxt}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NTNreg