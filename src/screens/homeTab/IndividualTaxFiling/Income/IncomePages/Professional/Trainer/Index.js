import { View, Text,Modal,TouchableOpacity,Pressable,ToastAndroid } from 'react-native'
import React,{ useState } from 'react'
import Style from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../../Components/Index';


const Trainer = () => {
  const navigation=useNavigation();

  const [showModal,setShowModal]=useState(false)

  const showToast = () => {
    ToastAndroid.show('Kindly Select one', ToastAndroid.SHORT);
  };


  return (
    <View style={Style.container}>
     <View style={{justifyContent:"center",alignItems:"center",marginTop:"10%"}}>
      <Text style={{color:"black",fontSize:18,fontWeight:"300"}}>Please select one of the options below regarding</Text>
      <Text style={{color:"black",fontSize:18}}><Text style={{color:"black",fontSize:18, }}>deduction of withholding taxe</Text> by your client sat</Text>
      <Text  style={{color:"black",fontSize:18}}>the time of payment</Text>
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
        <TouchableOpacity style={Style.touchablestyle} onPress={()=>setShowModal(true)}>
          <Text style={Style.touchabletext}>Need further clarification on this category?Click here</Text>
        </TouchableOpacity>
      </View>
      
      <View style={Style.touchable1view}>
        <TouchableOpacity style={Style.touchable1viewstyle}
        onPress={()=>navigation.navigate('Screen1')}
        >
          <View>
          <Ionicons name='ios-checkmark-circle' size={35} color={'green'}/>
          </View>
       
        <View style={Style.touchable1text}>
        <Text style={Style.touchable1text1}>ALL clients deducted withholding tax on </Text>
        <Text style={Style.touchable1text2}>my payments</Text>
        </View>
      
        </TouchableOpacity>
       
      </View>  
      <View style={Style.touchable2view}>
        <TouchableOpacity style={Style.touchable2viewstyle}
        onPress={()=>navigation.navigate('Screen2')}
        >
          <View>
          <FontAwesome5 name='times-circle' size={35} color={'red'}/>
          </View>
       
        <View style={Style.touchable2text}>
        <Text style={Style.touchable2text1}>None of my clients deducted any </Text>
        <Text style={Style.touchable2text2}>withholding taxes on my payments</Text>
        </View>
      
        </TouchableOpacity>
       
      </View> 
      
      <View style={Style.touchable3view}>
        <TouchableOpacity style={Style.touchable3viewstyle}
            onPress={()=>navigation.navigate('Screen3')}
        >
          <View>
          <AntDesign name='minuscircle' size={35} color={'blue'}/>
          </View>
       
        <View style={Style.touchable3text}>
        <Text style={Style.touchable3text1}>Not all but some clients deducted </Text>
        <Text style={Style.touchable3text2}>withholding taxes on my payments</Text>
        </View>
      
        </TouchableOpacity>
       
      </View> 
      <Button
          onPressBack={() => navigation.navigate('Professional')}
          onPressForward={() => showToast()}
      />
    </View>
  )
}

export default Trainer;