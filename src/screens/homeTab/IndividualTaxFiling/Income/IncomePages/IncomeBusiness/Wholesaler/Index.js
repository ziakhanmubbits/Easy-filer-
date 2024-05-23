import { View, Text, TouchableOpacity, Modal, Pressable, ToastAndroid, ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import Style from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
// import NewHeader from '../NewHeader';
import Button from '../../../../../../Components/Index';
import { useRef } from 'react';
import Animated from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import FontFamily from '../../../../../../../assets/customFonts/customFonts';
import TraderShop1 from '../../TraderShop 1/Index';
import { SmallText } from '../../../../../../Components/Text';



const Wholesaler = () => {

  const [showModal, setShowModal] = useState(false)
  const navigation = useNavigation();

  const showToast = () => {
    ToastAndroid.show('Kindly Select one', ToastAndroid.SHORT);
  };

  

  //getting business screen name
  const businessScreenName = useSelector((state) => state.myReducer.businessScreenName)
  const screenName = useSelector((state) => state.myReducer.screenName)

 
  return (
    <View style={Style.container}>
      <ScrollView>
  
       <View style={Style.screennameview}>
              <View style={{ justifyContent: "center", marginVertical: "2%" }}>
                <Text style={Style.screennametext}>{businessScreenName}</Text>
              </View>
            </View>
            <View style={{alignItems:"center"}}>
      <View style={Style.topview}>
        <Text style={Style.topviewtext1}>All of your applicable withholding tax was <Text>deducted</Text> by your clients or some clients did <Text>not </Text><Text>deducted</Text> at all.</Text>
      </View>
      </View>

      <View style={Style.modalview}>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisiblle(!showModal);
            }}>
            <Pressable
              onPress={() => {
                setShowModal(false)

              }}
              style={Style.modalviewstyle}>
              <View style={Style.innercontainer}>
                <Text style={Style.modaltext1}>
                  Help
                </Text>
                <View>
                <Text style={Style.modaltext2}>WITHHOLDING TAXES ON PAYMENT:</Text>
                <Text style={Style.modaltext3}>The Government has required certain persons to withhold taxes on payments against various transactions including sale of goods,rendering and execution on contracts.</Text>
                <Text style={Style.modaltext4}>Such withholding taxes are considerd as minimum tax while determining the final tax liability of the business on</Text>
                <Text style={Style.modaltext3}>net-income basis.</Text>
                </View>
              </View>
            </Pressable>
          </Modal>
        </View>
        <Animated.View
        style={
          Style.touchablestyle
      
      }>
        <TouchableOpacity style={Style.touchablestyle} onPress={() => setShowModal(true)}>
          <View style={{alignItems:"center",justifyContent:"center"}}>
          <Text style={{color:"black",textAlign:"center",fontSize:responsiveScreenFontSize(1.8),fontFamily:FontFamily.OpenSansRegular}}>
            Need further clarification on this category? Click here
          </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
      </View>

      <View style={Style.touchableview}>
        
        <TouchableOpacity style={Style.touchablebutton} onPress={()=> navigation.navigate('TraderShop1')}>
        <View>
        <Ionicons name='ios-checkmark-circle' size={35} color={'green'} />
        </View>
       <View>
        {/* <Text style={Style.touchabletext}>ALL clients deducted withholding</Text> */}
        <SmallText
        text={'ALL clients deducted withholding'}
        style={Style.touchabletext}
        />
        <SmallText
        text={'tax on my payments'}
        style={Style.touchabletext}
        />
        {/* <Text  style={Style.touchabletext}>tax on my payments</Text> */}
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={Style.touchablebutton2} onPress={()=> navigation.navigate('TraderShop2')}>
        <View>
        <FontAwesome5 name='times-circle' size={35} color={'red'} />
        </View>
        <View>
        <Text style={Style.touchabletext}>None of my clients deducted any</Text>
        <Text  style={Style.touchabletext}>withholding taxes on my payments</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={Style.touchablebutton2} onPress={()=> navigation.navigate('TraderShop3')}>
        <View>
       <AntDesign name='minuscircle' size={35} color={'blue'} />
       </View>
       <View>
       <Text style={Style.touchabletext}>Not all but some clients deducted </Text>
      <Text style={Style.touchabletext}>withholding taxes on my payments</Text>
       </View>
       
        </TouchableOpacity>
      
      </View>
      </ScrollView>

      <Button
        onPressBack={() => navigation.navigate('IncomeBusiness')}
        onPressForward={() => showToast()}
      />

    </View>
  )
}

export default Wholesaler;