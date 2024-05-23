import { View, Text, TextInput, Pressable, TouchableOpacity, ActivityIndicator, ToastAndroid, Modal, FlatList,Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Fonts } from '../../../../../assets/Styles/Fonts';
import { Dropdown } from 'react-native-element-dropdown';
import { useAddWealthStatementPostMutation, useGetPropertyTypeQuery } from '../../../../../Services/GetApiCall';
import Style from './Style';
import { useDispatch, useSelector } from 'react-redux';
import { setPropertyId } from '../../../../../store/myReducer';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import { BASE_URL } from '../../../../../CommonUrl/CommonUrls';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Button from '../../../../Components/Index';
import AnimatedLottieView from 'lottie-react-native';

const Property = () => {
  const navigation=useNavigation();
  const dispatch = useDispatch();

  const showToast = () => {
    if (propertyType && adress && cost) {
      ToastAndroid.show('Property Added Successfully', ToastAndroid.SHORT);
    }
  };

  const [propertyType, setPropertyType] = useState('');
  const [adress, setAdress] = useState('');
  const [cost, setCost] = useState('');
  const [propertyTypeError, setPropertyTypeError] = useState(false);
  const [adressError, setAdressError] = useState(false);
  const [costError, setCostError] = useState();
  const [array, setArray] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)


  const saveProperty = (id) => {
    dispatch(setPropertyId(id))
  }


  const propertyId = useSelector((state) => state.myReducer.propertyId);
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const assetypetId = useSelector((state) => state.myReducer.assetypetId);
  const wealthscreenName = useSelector((state) => state.myReducer.wealthscreenName);


  //PropertyType Api
  const { data, isLoading } = useGetPropertyTypeQuery();


  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await axios.get(BASE_URL + `taxfillings/${taxFilingId}/wealthstatements?wealth_type_id=${assetypetId}`)
      const wealthStatement = res.data.wealthStatements
      console.log('wealthStatement', wealthStatement)
      const wealthStatementArray = Object.values(wealthStatement)
      setArray(wealthStatementArray)
      setLoading(false)
    } catch (Error) {
      setLoading(false)
      console.log('Error', Error)

    }
  }


  const deleteDeduction = async (id) => {
    setLoading(true)
    try {

      await axios.delete(
        BASE_URL + `taxfillings/${taxFilingId}/wealthstatements/${id}`
      );

      const updatedArray = array.filter(
        deduction => deduction.id !== id
      );
      setArray(updatedArray);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('Error deleting deduction:', error);
    }
  };


  const resetFormFields = () => {
    setPropertyType(null);
    setAdress('');
    setCost('');
  };

  const [addpost,isLoader] = useAddWealthStatementPostMutation();

  const addWealthStatement = async () => {
    if (!propertyType) {
      setPropertyTypeError(true);
    }else if(!adress) {
      setAdressError(true);
    }else if(!cost) {
      setCostError(true);
    }else {
      const postParams = {
        assets: '',
        address: adress,
        cost: cost,
        registration_no: '',
        account_no: '',
        company_name: '',
        description: '',
        premium_paid: '',
        asset_cost: '',
        value_at_cost: '',
        cash_balance: '',
        institution_name: '',
        amount: '',
        taxfilling_id: taxFilingId,
        property_type_id: propertyId,
        vehicle_id: '',
        bankaccount_id: '',
        possession_type_id: '',
        asset_type_id: '',
        libility_type_id: '',
        wealth_type_id: assetypetId,
      }
      try {
        const res = await addpost({ postParams, taxFilingId })
        console.log('WealthStatement', res.data)
        if (res.data) {
          showToast()
          resetFormFields();
          // navigation.navigate('WealthAssets')
        }
      } catch (error) {
        console.log('Error', error)

      }
    }
  }





  return (

    <><View style={Style.screennameview}>
      <View style={{ justifyContent: "center", marginVertical: "2%" }}>
        <Text style={Style.screennametext}>{wealthscreenName}</Text>
      </View>
    </View>
    <View style={Style.container}>
      <ScrollView>
        {isLoading || isLoader.isLoading ? (
        < View style={Style.loader}>
        <AnimatedLottieView source={require('../../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
      </View>
        ) : (
          <><View style={Style.icntxtinput}>

            <Dropdown
              style={[Style.dropdown,{borderColor:propertyTypeError ? 'red':'black'}]}
              placeholderStyle={{
                fontSize: Fonts.f16,
                color: 'black',
                color: propertyTypeError ? 'red' : 'black'
              }}
              selectedTextStyle={{
                fontSize: Fonts.f16,
                color: 'black',
              }}
              iconColor={ propertyTypeError ? 'red' : 'black'}
              containerStyle={{
                height: '50%',
                backgroundColor: 'white',
              }}
              itemTextStyle={{
                color: 'black',
                fontSize: Fonts.f14,
              }}
              data={data.propertytypes}
              labelField="name"
              valueField="name"
              placeholder={'Select Property Type'}
              value={propertyType}
              onChange={item => {
                [setPropertyType(item.name), saveProperty(item.id), setPropertyTypeError(false)];
              } } />

          </View><View style={{ marginTop: "6%" }}>
            </View><View style={{ flexDirection: "column" }}>

              <TextInput style={[
                Style.placeholder1,
               {borderColor:adressError ? 'red':'grey'}
              ]}
                placeholder='Adress'
                placeholderTextColor={adressError ? 'red':"grey"}
                value={adress}
                onChangeText={text => [setAdress(text), setAdressError(false)]} />

              <TextInput style={[
                Style.placeholder1,
                {borderColor:costError ? 'red':'grey'}
              ]}
                keyboardType='numeric'
                placeholder='Cast'
                placeholderTextColor={costError ? 'red':"grey"}
                value={cost}
                onChangeText={text => [setCost(text), setCostError(false)]} />

            </View><View style={{ flexDirection: "row", marginTop: "3%" }}>
              <TouchableOpacity style={{ backgroundColor: "firebrick", justifyContent: "center", width: responsiveWidth(44), height: responsiveHeight(6), borderRadius: 3 }}
                onPress={() => [addWealthStatement()]}
              >
                <Text style={{ color: "white", justifyContent: "center", textAlign: "center" }}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: "dodgerblue", justifyContent: "center", width: responsiveWidth(44), height: responsiveHeight(6), borderRadius: 3, marginLeft: "1.5%" }}
                onPress={() => [setShowModal(true),fetchData()]}
              >
                <Text style={{ color: "white", textAlign: "center" }}>View Details</Text>
              </TouchableOpacity>
            </View></>
        )}
      
         
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisiblle(!showModal);
            } }>
            <View
              style={Style.modalviewstyle}>
              <View style={Style.innercontainer}>
                <View style={Style.modaltxtview}>
                  <Text style={Style.modaltxt}>Vehicle List</Text>
                  <TouchableOpacity onPress={() => { setShowModal(false); } }>
                    <Entypo name='circle-with-cross' size={20} color={'white'} />
                  </TouchableOpacity>

                </View>
                <View>
                {loading ?
                    (
                      < View style={Style.loader}>
                        <AnimatedLottieView source={require('../../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                      </View>
                    )
                    :
                    (
                  <FlatList
                    data={array.slice(0, 7)}
                    alwaysBounceVertical
                    renderItem={({ item,id }) => {
                      return (
                        <View style={Style.item}>

                          <View style={Style.flatlisttxt}>
                            <View>
                            <Text style={Style.modaltxt1}>Type : <Text style={Style.modaltxt2}>{item.property_type_id}</Text></Text>
                            <Text style={Style.modaltxt1}>Address :   <Text style={Style.modaltxt2}>{item.address}</Text></Text>
                            <Text style={Style.modaltxt1}>Cost : <Text style={Style.modaltxt2}>{item.cost}</Text></Text>
                            </View>
                            <View style={{width:responsiveScreenWidth(5.5),height:responsiveScreenHeight(3.3),marginTop:"2%"}}>
                              <TouchableOpacity onPress={()=> deleteDeduction(item.id)}>
                              <Image source={require('../../../../../../src/assets/pictures/image71.png')} 
                              style={{width:"100%",height:"100%"}}
                              />
                              </TouchableOpacity>
                            </View>
                          </View>


                        </View>
                      );
                    } }
                    keyExtractor={(item) => {
                      return item.id;
                    } } />
                    )}
                </View>

              </View>
            </View>
          </Modal>
        </View>
        </ScrollView>
       <Button
       onPressBack={()=> navigation.goBack()}
       />
      
      </View></>

  )

}

export default Property;