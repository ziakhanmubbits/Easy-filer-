import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect,useRef } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import Entypo from 'react-native-vector-icons/Entypo'
import Style from './Style'
import { useNavigation } from '@react-navigation/native'
import { responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'

const NewHeader = () => {
  const refRBSheet = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const navigation= useNavigation();

  useEffect(() => {
    GettinAsyncValue();
  })
  const GettinAsyncValue = async () => {
    let userName = await AsyncStorage.getItem('NAME')
    let userEmail = await AsyncStorage.getItem('EMAIL')

    if (userName !== null || userEmail !== null) {
      const x = JSON.parse(userName)
      setName(x)
      const NameCharater = x['0']
      // console.log(NameCharater)
      setFirstName(NameCharater)
      const emailreq = JSON.parse(userEmail)
      // console.log(emailreq)
      setEmail(emailreq)
    }
  }
  return (
    <View style={Style.mainView}>
      <View style={Style.innerView2}>
        <Text style={Style.txt}>
          {name}
        </Text>
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <MaterialCommunityIcons name='arrow-down-drop-circle' size={20} color={'red'} />
        </TouchableOpacity>
      </View>
      <View style={Style.headerview}>
        <TouchableOpacity>
          <View style={{width:responsiveScreenWidth(5),height:responsiveScreenHeight(3)}}>
            <Image source={require('../../../src/assets/pictures/image76.png')} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{width:responsiveScreenWidth(5),height:responsiveScreenHeight(3)}}>
            <Image source={require('../../../src/assets/pictures/image62.png')} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{width:responsiveScreenWidth(5),height:responsiveScreenHeight(3)}}>
            <Image source={require('../../../src/assets/pictures/image64.png')} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent"
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}>
          <View style={{ alignSelf: "center" }}>
            <View style={Style.characterview}>
              <Text style={Style.character}>{firstName}</Text>
            </View>
            <Text style={Style.btmname}>{name}</Text>
          </View>
          <View style={Style.viewemail}>
            <Text style={Style.emailcolor}>{email}</Text>
          </View>
          <View style={Style.rbview}>
            <View><Text style={Style.rbtext}>PRIMARY</Text></View>
            <View><Entypo name='star' color={"orange"} size={20} style={Style.rbicon}/></View>
          </View>
          <View style={Style.rblastview}>
            <TouchableOpacity style={Style.btnrb}
          onPress={()=> navigation.navigate('AddNewAccount')}
            >
              <Text style={Style.btntxt}>
                Add New Account
              </Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </View>
    </View>
  )
}

export default NewHeader;
