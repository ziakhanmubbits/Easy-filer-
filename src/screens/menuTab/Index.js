import RBSheet from 'react-native-raw-bottom-sheet';
import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Share, ScrollView, Modal, Modal2,TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";
import FontFamily from '../../assets/customFonts/customFonts';

const itemList = [
  {
    id: '1',
    title: 'Agent',
    icon: <MaterialCommunityIcons name='account-tie' size={40} color={'red'} />
  },
  {
    id: '2',
    title: 'Promo code',
    icon: <Foundation name='ticket' size={40} color={'red'} />
  },
  {
    id: '3',
    title: 'Payment History',
    icon: <MaterialCommunityIcons name='history' size={40} color={'red'} />
  },
  {
    id: '4',
    title: 'Share App',
    icon: <FontAwesome5 name='share-alt-square' size={40} color={"#EB0414"} />
  },
  {
    id: '5',
    title: 'Expence Module',
    icon: <Octicons name='file-directory' size={32} color={'red'} />
  },
  {
    id: '6',
    title: 'Suggest Us',
    icon: <MaterialCommunityIcons name='message-star' size={40} color={'red'} />
  },
  {
    id: '7',
    title: 'Account Setting',
    icon: <Ionicons name='settings' size={40} color={"#EB0414"} />
  },
  {
    id: '8',
    title: 'Signout',
    icon: <Ionicons name='log-out' size={40} color={"#EB0414"} />
  },

]



const AddBottomSheet = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisible2, setModalVisible2] = useState(false)
  const [promoID, setPromoID] = useState('')
  const [agentID, setAgentID] = useState('');
  const refRBSheet = useRef();
  const navigation = useNavigation()


  const LogOut = async () => {
    AsyncStorage.clear()
    navigation.replace('Login')
  }

  const onAddButtonPress = () => {
    refRBSheet.current.open()
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Lets share EasyFiler in social Media',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onSelect = (id) => {
    if (id === 0) {
      console.log(id)
      onAgent();
    } else if (id === 1) {
      console.log(id)
      onPromoCode();
    } else if (id === 2) {
      console.log(id)
      onHistory();
    } else if (id === 3) {
      console.log(id)
      refRBSheet.current.close()
      onShare();
    } else if (id === 4) {
      console.log(id)
      onExpenceModule()
    } else if (id === 5) {
      console.log(id)
      onSuggest()
    } else if (id === 6) {
      console.log(id)
      onSetting()
    } else if (id === 7) {
      console.log(id);
      LogOut();
    }
  }
  const onAgent = () => {
    setModalVisible(true)
    refRBSheet.current.close()
  }
  const onPromoCode = () => {
    setModalVisible2(true)
    refRBSheet.current.close()
  }
  const onHistory = () => {
    navigation.navigate('PaymentHistory')
    refRBSheet.current.close()
  }
  const onSuggest = () => {
    navigation.navigate('SuggestionUs')
    refRBSheet.current.close()
  }
  const onSetting =() =>{
    navigation.navigate('Setting')
    refRBSheet.current.close()
  }
  const onExpenceModule=()=>{
    navigation.navigate('ExpenceModule')
    refRBSheet.current.close()
  }
  return (
    <View>
      <TouchableOpacity style={{
        top: "27%", marginHorizontal: '3%',
        marginLeft: '5%', left: 15,marginBottom:"5%"
      }} onPress={onAddButtonPress}>
        <AntDesign name='appstore1' size={25} color={"red"} />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={290}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}>
        <View style={{
          height: responsiveScreenHeight(4),
          width: responsiveScreenWidth(100),
          backgroundColor: "red",
          bottom: 25,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Text style={{
            fontSize: 18,
            fontWeight: "700",
            color: 'white'
          }}>Menu</Text>
        </View>
        <View>
          <ScrollView style={styles.contentStyle}>
            <View style={styles.listview}>
              {
                itemList.map((nameInList, id) => {
                  return (
                    <TouchableOpacity key={id} onPress={() => onSelect(id)}>
                      <View style={styles.filesview}>
                        <Text>{nameInList.icon}</Text>
                        <Text style={styles.textlist}>{nameInList.title}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </ScrollView>
        </View>
      </RBSheet>
      <View>
        <Modal
          visible={modalVisible}
          animationType='fade'
          transparent>
          <View style={styles.modalView}>
            <View style={styles.modalViewInside}>

              <View >
                <TouchableOpacity style={styles.crossbtn} onPress={() => setModalVisible(false)}>
                  <Entypo style={{ alignSelf: "flex-end" }} name='circle-with-cross' size={35} color={'red'} />
                </TouchableOpacity>
              </View>

              <View>
                <MaterialCommunityIcons name='account-tie' size={50} color={'red'} />
              </View>

              <View>
                <Text style={styles.usertext}>User Agent Tracking ID</Text>
              </View>

              <View style={styles.input}>
                <TextInput
                  style={Style.placeholder1}
                  value={agentID}
                  placeholder="Enter Agent ID"
                  placeholderTextColor={'black'}
                  onChangeText={(name) => setAgentID(name)}
                  
                />
              </View>

              <View>
                <TouchableOpacity style={styles.applybtn}>
                  <Text style={styles.applybtntext}>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View>
        <Modal
          visible={modalVisible2}
          animationType='fade'
          transparent>
          <View style={styles.modalView}>
            <View style={styles.modalViewInside}>

              <View >
                <TouchableOpacity style={styles.crossbtn} onPress={() => setModalVisible2(false)}>
                  <Entypo style={{ alignSelf: "flex-end" }} name='circle-with-cross' size={35} color={'red'} />
                </TouchableOpacity>
              </View>

              <View>
                <Foundation name='ticket' size={40} color={'red'} />
              </View>

              <View>
                <Text style={styles.usertext}>if you have promo code Enter it</Text>
              </View>

              <View style={styles.input}>
                <TextInput
                  style={Style.placeholder1}
                  value={promoID}
                  placeholder="Enter Promo Code"
                  placeholderTextColor={'black'}
                  onChangeText={(name) => setPromoID(name)}
                 
                />
              </View>

              <View>
                <TouchableOpacity style={styles.applybtn}>
                  <Text style={styles.applybtntext}>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

export default AddBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 50
  },
  bottomSheetTitle: {
    fontSize: 24,
    fontWeight: '500'
  },
  placeholder1: {
    paddingHorizontal:"3%",
    // marginTop:"4%",
    borderWidth: 1,
    borderColor: "black",
    padding:"1%",
    width: responsiveWidth(90),
    height:responsiveHeight(7),
    borderRadius: 5,
    color:"black"
},
  contentStyle: {
    flexGrow: 1
  },
  listview: {
    flexDirection: "row",
    marginLeft: "2.7%",
    flexWrap: 'wrap'
  },
  filesview: {
    backgroundColor: "gainsboro",
    height: responsiveHeight(10),
    width: responsiveWidth(18),
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "1%",
    marginTop: '2%'
  },
  textlist: {
    color: 'black',
    fontSize: 13,
    fontFamily: FontFamily.OpenSansBold,
    alignSelf: "center",
    marginTop: "5%",
    fontWeight: '600'
  },
  modalView: {
    flex: 1
  },
  modalViewInside: {
    height: responsiveHeight(30),
    width: responsiveWidth(80),
    alignSelf: "center",
    borderRadius: 10,
    marginTop: "70%",
    alignItems: "center",
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtView: {
    marginTop: "10%"
  },
  textstyle: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: FontFamily.OpenSansBold,
    color: 'black'
  },
  crossbtn: {
    marginLeft: "80%",
    marginTop: "2%"
  },
  usertext: {
    fontSize: 15,
    color: "black",
    fontWeight: "700",
    fontFamily: FontFamily.OpenSansBold
  },
  input: {
    width: responsiveScreenWidth(70),
    marginTop: '4%'
  },
  applybtn: {
    width: responsiveScreenWidth(30),
    height: responsiveHeight(5),
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: '6%',
    marginLeft: '45%',
    alignItems: "center",
    justifyContent: "center"
  },
  applybtntext: {
    color: 'white',
    fontSize: 15,
    fontFamily: FontFamily.OpenSansBold
  }
});