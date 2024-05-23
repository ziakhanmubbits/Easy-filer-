import { View, Text,Image,Modal,TouchableOpacity,Pressable,TextInput } from 'react-native'
import React, { useState } from 'react'
import Style from './Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../Components/Index';

const Agriculture = () => {

  const [showModal,setShowModal]=useState(false)
  const navigation = useNavigation();
  return (
    <View style={Style.container}>
         <View style={Style.imageview}>
          <Image source={require('../../../../../../../src/assets/pictures/image7.png')}
            style={Style.image}
          />
          <Text style={Style.txt1}>Agriculture</Text>
          <Text style={Style.txt2}>Enter your agricultural income</Text>
        </View>
        <View style={Style.placeholder1view}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              setShowModal(!showModal);
            }}>
            <Pressable
              onPress={() => {
                setShowModal(false)

              }}
              style={Style.backgroundview}>
              <View style={Style.innercontainer}>
                <Text style={Style.modaltxt1}>
                  Tip
                </Text>
                <Text style={Style.modaltxt2}>Agriculture income is exempt upto the amount of tax paid on agriculture</Text>
                <Text style={Style.modaltxt3}>income under relevant provincial law.</Text>
                
              </View>

            </Pressable>
          </Modal>
          <TouchableOpacity style={{ right: "20%" }} onPress={() => setShowModal(true)}>
            <MaterialCommunityIcons name='information' color={'red'} size={20} />
          </TouchableOpacity>
          <TextInput style={Style.placeholder1} textAlign='center' keyboardType='numeric' placeholder='Amount'
            placeholderTextColor={"grey"}
          />
        </View>
        <Button
               onPressBack={() => navigation.goBack()}
        />
    </View>
  )
}

export default Agriculture;