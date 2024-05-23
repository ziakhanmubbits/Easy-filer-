import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable
} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useRef } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import Style from './Style'
import { responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import FontFamily from '../../assets/customFonts/customFonts'


const Header = () => {

  const refRBSheet = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

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
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={Style.imageview}>
            <Image source={require('../../../src/assets/pictures/image62.png')} style={Style.icon2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={Style.imageview}>
            <Image source={require('../../../src/assets/pictures/image64.png')} style={Style.icon3} />
        </TouchableOpacity>
      </View>
      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={250}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
            },
            draggableIcon: {
              backgroundColor: "grey",
              width: responsiveScreenWidth(60),
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
            <View><Entypo name='star' color={"orange"} size={20} style={Style.rbicon} /></View>
          </View>
          <View style={Style.rblastview}>
            <TouchableOpacity style={Style.btnrb}
              onPress={() => navigation.navigate('AddNewAccount')}
            >
              <Text style={Style.btntxt}>
                Add New Account
              </Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.6)', }}>

          <View style={Style.modalmainview}>
          <View style={{alignSelf:"flex-end",width:responsiveScreenWidth(9),marginTop:responsiveScreenHeight(1)}}>
              <TouchableOpacity style={{ width: responsiveScreenWidth(5), height: responsiveScreenHeight(3) }} onPress={() => setModalVisible(false)}>
                <Image source={require('../../../src/assets/pictures/image74.png')} style={Style.image}/>
              </TouchableOpacity>
            </View>
            <View style={{ width: responsiveScreenWidth(70), marginTop: responsiveScreenHeight(1), alignItems: "center" }}>
              <Text style={Style.modaltext}>How do you want to connect with us.</Text>
              <Text style={{ color: "black", fontSize: responsiveScreenFontSize(1.6), fontFamily: FontFamily.MONTSERRAT_Regular }}>Please select below any option from below</Text>
            </View>
            <View style={Style.view2}>
              <TouchableOpacity style={Style.touchview}>
                <View style={{ width: responsiveScreenWidth(4), height: responsiveScreenHeight(3) }}>
                  <Image source={require('../../../src/assets/pictures/arroba.png')} style={Style.image} />
                </View>
                <Text style={Style.text}>e-email</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.touchview}>
                <View style={{ width: responsiveScreenWidth(4), height: responsiveScreenHeight(3) }}>
                  <Image source={require('../../../src/assets/pictures/telephone.png')} style={Style.image} />
                </View>
                <Text style={Style.text}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.touchview}>
                <View style={{ width: responsiveScreenWidth(4), height: responsiveScreenHeight(3) }}>
                  <Image source={require('../../../src/assets/pictures/whatsapp.png')} style={Style.image} />
                </View>
                <Text style={Style.text}>Whatsapp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Header
