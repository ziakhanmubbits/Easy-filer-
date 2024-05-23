import RBSheet from 'react-native-raw-bottom-sheet';
import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Share, ScrollView, Modal,Image,TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
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
import { Fonts } from '../../assets/Styles/Fonts';



const itemList = [
  {
    id: 0,
    title: 'History',
    img:(require('../../../src/assets/pictures/transaction-history.png'))
  },
  {
    id: 1,
    title: 'Share App',
    img:(require('../../../src/assets/pictures/sharing.png'))
  },
  {
    id: 2,
    title: 'Setting',
    img:(require('../../../src/assets/pictures/cogwheel.png'))
  },
  {
    id: 3,
    title: 'Signout',
    img:(require('../../../src/assets/pictures/logout.png'))
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

  const onAddButtonPress = ({onPress}) => {
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
    // if (id === 0) {
    //   console.log(id)
    //   onAgent();
    // }
    if (id === 0) {
      console.log(id)
      onHistory();
    }
     else if (id === 1) {
      console.log(id)
      refRBSheet.current.close()
      onShare();
    } 
    // else if (id === 4) {
    //   console.log(id)
    //   onExpenceModule()
    // } 
    // else if (id === 5) {
    //   console.log(id)
    //   onSuggest()
    // } 
    
    else if (id === 2) {
      console.log(id)
      onSetting()
    } 
    else if (id === 3) {
      console.log(id);
      refRBSheet.current.close()
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
    navigation.navigate('AccountSetting')
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
        height={210}
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
            fontSize: responsiveScreenFontSize(2.4),
            fontFamily:FontFamily.MONTSERRAT_Medium,
            color: 'white'
          }}>Menu</Text>
        </View>
        <View>
          {/* <ScrollView style={styles.contentStyle}> */}
            <View style={styles.listview}>
              {
                itemList.map((nameInList, id) => {
                  return (
                    <TouchableOpacity key={id} onPress={() => onSelect(id)}>
                      <View style={{alignItems:"center"}}>
                      <View style={styles.filesview}>
                        <View style={{width:responsiveScreenWidth(8),height:responsiveScreenHeight(7)}}>
                          <Image source={nameInList.img} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
                        </View>
                        <Text style={styles.textlist}>{nameInList.title}</Text>
                      </View>
                      </View>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          {/* </ScrollView> */}
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
                  <Entypo style={{ alignSelf: "flex-end" }} name='circle-with-cross' size={25} color={'red'} />
                </TouchableOpacity>
              </View>

              <View>
                <MaterialCommunityIcons name='account-tie' size={35} color={'red'} />
              </View>

              <View>
                <Text style={styles.usertext}>User Agent Tracking ID</Text>
              </View>

              <View style={styles.input}>
                <TextInput
                style={styles.placeholder1}
                  value={agentID}
                  placeholder="Enter Agent ID"
                  placeholderTextColor={'black'}
                  onChangeText={(name) => setAgentID(name)}
              
                />
              </View>

              <View style={{alignSelf:"flex-end",marginTop:"4%",marginRight:"5%"}}>
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
                  <Entypo style={{ alignSelf: "flex-end" }} name='circle-with-cross' size={25} color={'red'} />
                </TouchableOpacity>
              </View>

              <View>
                <Foundation name='ticket' size={30} color={'red'} />
              </View>

              <View>
                <Text style={styles.usertext}>if you have promo code Enter it</Text>
              </View>

              <View style={styles.input}>
                <TextInput
                style={styles.placeholder1}
                  value={promoID}
                  placeholder="Enter Promo Code"
                  placeholderTextColor={"black"}
                  onChangeText={(name) => setPromoID(name)}
                  
                />
              </View>

              <View style={{alignSelf:"flex-end",marginTop:"4%",marginRight:"5%"}}>
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
  contentStyle: {
    flexGrow: 1
  },
  listview: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
  },
  filesview: {
    backgroundColor: "white",
    // height:responsiveScreenHeight(10),
    width: responsiveScreenWidth(22),
    borderRadius: 5,
    borderWidth:0.4,
    borderColor:"lightgrey",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal:responsiveScreenWidth(1.4),
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  textlist: {
    color: 'black',
    fontSize: responsiveScreenFontSize(1.3),
    fontFamily: FontFamily.MONTSERRAT_Medium,
    textAlign:"center"
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
  placeholder1: {
    paddingHorizontal:"3%",
    // marginTop:"4%",
    borderWidth: 1,
    borderColor: "black",
    padding:"1%",
    width: responsiveWidth(70),
    height:responsiveHeight(7),
    borderRadius: 5,
    color:"black"
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
    fontSize: Fonts.f16,
    color: "black",
    fontFamily: FontFamily.OpenSansSemiBold
  },
  input: {
    width: responsiveScreenWidth(70),
    marginTop: '4%'
  },
  applybtn: {
    width: responsiveScreenWidth(28),
    height: responsiveHeight(5),
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  applybtntext: {
    color: 'white',
    fontSize: Fonts.f17,
    fontFamily: FontFamily.OpenSansSemiBold
  }
});