import { View, Text, TouchableOpacity, Modal, Pressable, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Style from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../../Components/Index';
import { SmallText } from '../../../../../../Components/Text';



const FreelancerYes = () => {

  const [showModal, setShowModal] = useState(false)
  const navigation = useNavigation();

  const showToast = () => {
    ToastAndroid.show('Kindly Select onption', ToastAndroid.SHORT);
  };

  return (
    <View style={Style.container}>
      <View style={Style.topview}>
        <Text style={Style.topviewtext1}>Please select one of the option below regarding</Text>
        <Text style={Style.topviewtext1}><Text style={Style.txt4}> deduction of withholding taxes </Text> by your client sat</Text>
        <Text style={Style.topviewtext1}>not the time of<Text style={Style.txt4}> payment </Text> at all</Text>
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
                <Text style={Style.modaltext2}>WITHHOLDING TAXES ON PAYMENT:</Text>
                <Text style={Style.modaltext3}>The Government has required certain persons to withhold taxes on payments against various transactions including sale of goods,rendering and execution on contracts.</Text>
                <Text style={Style.modaltext4}>Such withholding taxes are considerd as minimum tax while determining the final tax liability of the business on</Text>
                <Text style={Style.modaltext5}>net-income basis.</Text>
              </View>
            </Pressable>
          </Modal>
        </View>
        <TouchableOpacity style={Style.touchablestyle} onPress={() => setShowModal(true)}>
          <Text style={Style.touchabletext}>Need further clarification on this category?Click here</Text>
        </TouchableOpacity>
      </View>

      <View style={Style.touchableview}>
        
        <TouchableOpacity style={Style.touchablebutton} onPress={()=> navigation.navigate('FreelancerYes1')}>
        <View>
        <Ionicons name='ios-checkmark-circle' size={35} color={'green'} />
        </View>
       <View>
        <SmallText
        text={'ALL clients deducted withholding'}
        style={Style.touchabletext}
        />
        <SmallText
        text={'tax on my payments'}
        style={Style.touchabletext}
        />
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={Style.touchablebutton2} onPress={()=> navigation.navigate('FreelancerYes2')}>
        <View>
        <FontAwesome5 name='times-circle' size={35} color={'red'} />
        </View>
        <View>
        <Text style={Style.touchabletext}>None of my clients deducted any</Text>
        <Text  style={Style.touchabletext}>withholding taxes on my payments</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={Style.touchablebutton2} onPress={()=> navigation.navigate('FreelancerYes3')}>
        <View>
       <AntDesign name='minuscircle' size={35} color={'blue'} />
       </View>
       <View>
       <Text style={Style.touchabletext}>Not all but some clients deducted </Text>
      <Text style={Style.touchabletext}>withholding taxes on my payments</Text>
       </View>
       
        </TouchableOpacity>
      
      </View>

      <Button
        onPressBack={() => navigation.navigate('Freelancer')}
        onPressForward={() => showToast()}
      />
    </View>
  )
}

export default FreelancerYes;
