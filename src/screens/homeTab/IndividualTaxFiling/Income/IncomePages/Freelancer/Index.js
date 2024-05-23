import { View, Text, Modal, Pressable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Style from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../Components/Index';
import { SmallText } from '../../../../../Components/Text';

const Freelancer = () => {
  const [showModal, setShowModal] = useState(false)
  const navigation = useNavigation();

  const showToast = () => {
    ToastAndroid.show('Kindly Select onption', ToastAndroid.SHORT);
  };

  return (
    <View style={Style.container}>

      <View style={Style.view1}>
        <SmallText
        text={'Did you earn any income from abroad by providing'}
        style={Style.txt1}
        />
          <SmallText
        text={'IT-enabled services or have you registered as it'}
        style={Style.txt2}
        />
          <SmallText
        text={'startup with PSEB in last three years.'}
        style={Style.txt2}
        />
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
                <View style={{ marginTop: "2%" }}>
                  <SmallText
                  text={'Tax Concession for Exporters of IT Enabled Services and Startups'}
                  style={Style.modaltext2}
                  />
                    <SmallText
                  text={'Exports of IT Services are exempt from income tax if exporter of IT services'}
                  style={Style.modaltext2}
                  />
                     <SmallText
                  text={"(i.e.the taxpayer)has brought at least eighty percent of export proceeds"}
                  style={Style.modaltext2}
                  />
                      <SmallText
                  text={"into Pakistan through normal banking channel."}
                  style={Style.modaltext2}
                  />
                </View>
                <View style={{ marginTop: "3%" }}>
                  <SmallText
                  text={'Similarly,Profits and gains of startups that are certified by the Pakistan'}
                  style={Style.modaltext2}
                  />
                   <SmallText
                  text={"Software Export Board(PSEB)are also exempt from income tax in the year"}
                  style={Style.modaltext2}
                  />
                  <SmallText
                  text={"of certified by PSEB and the following two years."}
                  style={Style.modaltext2}
                  />
                </View>
              </View>
            </Pressable>
          </Modal>
        </View>
        <TouchableOpacity style={Style.touchablestyle} onPress={() => setShowModal(true)}>
          <Text style={Style.touchabletext}>Need further clarification on this category?Click here</Text>
        </TouchableOpacity>
      </View>
      <View style={Style.buttonstyle}>
        <Pressable style={Style.touchable1viewstyle}
          onPress={() => navigation.navigate('FreelancerYes')}
        >
          <View>
            <Ionicons name='ios-checkmark-circle' size={35} color={'green'} />
          </View>
          <View style={Style.touchable1text}>
            <Text style={Style.touchable1text1}>Yes</Text>
          </View>
        </Pressable>
        <Pressable style={Style.touchable1viewstyle}
          onPress={() => navigation.navigate('FreelancerNo')}
        >
          <View>
            <Ionicons name='close-circle-sharp' size={35} color={'red'} />
          </View>
          <View style={Style.touchable1text}>
            <Text style={Style.touchable1text1}>No</Text>
          </View>
        </Pressable>
      </View>
      <Button
        onPressBack={() => navigation.navigate('Income')}
        onPressForward={() => showToast()}
      />
    </View>
  )
}

export default Freelancer;