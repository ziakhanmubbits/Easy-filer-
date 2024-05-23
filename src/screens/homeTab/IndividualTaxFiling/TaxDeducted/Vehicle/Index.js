import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Modal, Text, TextInput, ToastAndroid, TouchableOpacity, View, Alert, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../../../../CommonUrl/CommonUrls';
import { useAddTaxDeductionPostMutation, useGetActivityQuery, useGetVehiclesQuery } from '../../../../../Services/GetApiCall';
import { Fonts } from '../../../../../assets/Styles/Fonts';
import { setActivityId, setVehicleId, setVehicleItemId } from '../../../../../store/myReducer';
import Style from './Style';
import Button from '../../../../Components/Index';
import AnimatedLottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';


const Vehicle = () => {

  const dispatch = useDispatch();
  const navigation=useNavigation();

  const showToast = () => {
    if (activityType && vehicleType && registrationNo && deduction) {
      ToastAndroid.show('Vehicle Withhold Added Successfully', ToastAndroid.SHORT);
    }
  };

  const [activityType, setActivityType] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [registrationNo, setRegistrationNo] = useState('');
  const [deduction, setDeduction] = useState('');
  const [showModal, setShowModal] = useState(false)
  const [dropdownError, setDropdownError] = useState(false);
  const [vehicleDropDownError, setVehicleDropDownError] = useState(false);
  const [vehicleRegError, setVehicleRegError] = useState(false);
  const [taxDeductedError, setTaxDeductedError] = useState(false);
  const [array, setArray] = useState([]);
  const [taxDeductionId, setTaxDeductionId] = useState('')
  const [loading, setLoading] = useState(false)



  const saveVehcile = (id) => {
    dispatch(setVehicleId(id))
  }

  const saveActivity = (id) => {
    dispatch(setActivityId(id))
  }

  const saveVehicleItemId = (id) => {
    dispatch(setVehicleItemId(id))
  }

  // useEffect(() => {
  //   fetchData();
  // }, [])

  //Activity Api
  const { data, isLoading, isError } = useGetActivityQuery();


  //VehcilesType Api
  const { data: vehicles } = useGetVehiclesQuery();

  const deductionTypeId = useSelector((state) => state.myReducer.deductionTypeId);
  const activityId = useSelector((state) => state.myReducer.activityId);
  const vehicleId = useSelector((state) => state.myReducer.vehicleId);
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const taxDeductedName = useSelector((state) => state.myReducer.taxDeductedName);



  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await axios.get(BASE_URL + `taxfillings/${taxFilingId}/taxdeducts?deductiontype_id=${deductionTypeId}`)
      const taxDeduction = res.data.taxdeducts
      const taxDeductionArray = Object.values(taxDeduction);
      setArray(taxDeductionArray)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log('error', error)

    }
  }

  const deleteDeduction = async (id) => {
    setLoading(true)
    try {
      await axios.delete(
        BASE_URL + `taxfillings/${taxFilingId}/taxdeducts/${id}`
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
    setActivityType(null);
    setVehicleType(null);
    setRegistrationNo('');
    setDeduction('');
  };


  //TAX DEDUCTION POTS API
  const [addpost, isLoader] = useAddTaxDeductionPostMutation();

  const addtaxDeduction = async () => {
    if (!activityType) {
      setDropdownError(true);
      // return;
    }

    else if (!vehicleType) {
      setVehicleDropDownError(true);
      // return;
    }

    else if (!registrationNo) {
      setVehicleRegError(true);
      // return; 
    }

    else if (!deduction) {
      setTaxDeductedError(true);
      // return; 
    } else {

      const postParams = {
        registration_no: registrationNo,
        consumer_no: '',
        tax_deducted: deduction,
        tax_paid_property_purchase: '',
        tax_paid_property_sale: '',
        tax_paid_on_education: '',
        tax_paid_fund_withdraw: '',
        deductiontype_id: deductionTypeId,
        activity_id: activityId,
        vehicle_id: vehicleId,
        utility_id: '',
        provider_id: '',
      }
      try {
        const res = await addpost({ postParams, taxFilingId })
        if (res.data) {
          showToast()
          resetFormFields();
          // navigation.navigate('TaxSavings')
        }
      } catch (error) {
        console.log('Error', error)

      }
    }
  }



  return (
    <><View style={Style.screennameview}>
      <View style={{ justifyContent: "center", marginVertical: "2%" }}>
        <Text style={Style.screennametext}>{taxDeductedName} WithHold</Text>
      </View>
    </View><View style={Style.container}>
        {isLoading || isLoader.isLoading ?
          (
            < View style={Style.loader}>
              <AnimatedLottieView source={require('../../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
            </View>
          )
          :
          (
            <>
              <View style={Style.icntxtinput}>

                <Dropdown
                  style={[Style.dropdown,{borderColor:dropdownError ? 'red':'black'}]}
                  placeholderStyle={{
                    fontSize: Fonts.f16,
                    color: 'black',
                    color: dropdownError ? 'red' : 'black',
                  }}
                  selectedTextStyle={{
                    fontSize: Fonts.f16,
                    color: 'black',
                  }}
                  containerStyle={{
                    height: '30%',
                    backgroundColor: 'white',
                  }}
                  iconColor={ dropdownError ? 'red' : 'black'}
                  itemTextStyle={{
                    color: 'black',
                    fontSize: Fonts.f14,
                  }}
                  data={data?.activities}
                  labelField="name"
                  valueField="name"
                  placeholder={'Types Of Activity'}
                  value={activityType}
                  onChange={item => {
                    setActivityType(item.name);
                    saveActivity(item.id);
                    setDropdownError(false);;
                  }} />

              </View><View style={{ marginTop: "6%" }}>
                <View style={Style.icntxtinput2}>
                  {vehicles && (
                    <Dropdown
                      style={[Style.dropdown,{borderColor:vehicleDropDownError ? 'red':'black'}]}
                      placeholderStyle={{
                        fontSize: Fonts.f16,
                        color: 'black',
                        color: vehicleDropDownError ? 'red' : 'black',
                      }}
                      selectedTextStyle={{
                        fontSize: Fonts.f16,
                        color: 'black',
                      }}
                      containerStyle={{
                        height: '50%',
                        backgroundColor: 'white',
                      }}
                      iconColor={vehicleDropDownError ? 'red' : 'black'}
                      itemTextStyle={{
                        color: 'black',
                        fontSize: Fonts.f14,
                      }}
                      data={vehicles.vehicles}
                      labelField="name"
                      valueField="name"
                      placeholder={'Type Of Vehicle'}
                      value={vehicleType}
                      onChange={item => {
                        [setVehicleType(item.name), saveVehcile(item.id), setVehicleDropDownError(false)];
                      }} />
                  )}
                </View>
              </View><View style={{ flexDirection: "column" }}>
                <TextInput style={[
                  Style.placeholder1,
                  vehicleRegError && { borderColor: 'red', color: 'red' },
                ]}
                  placeholder='Vehicle Registration Number'
                  placeholderTextColor={vehicleRegError ? 'red':"grey"}
                  value={registrationNo}
                  onChangeText={text => [setRegistrationNo(text), setVehicleRegError(false)]} />

                <TextInput style={[
                  Style.placeholder1,
                  taxDeductedError && { borderColor: 'red', color: 'red' },
                ]}
                  keyboardType='numeric'
                  placeholder='Tax Deducted'
                  placeholderTextColor={taxDeductedError ? 'red':"grey"}
                  value={deduction}
                  onChangeText={text => [setDeduction(text), setTaxDeductedError(false)]} />

              </View>
              <View style={{ flexDirection: "row", marginTop: "3%" }}>
                <TouchableOpacity style={{ backgroundColor: "firebrick", justifyContent: "center", width: responsiveWidth(44), height: responsiveHeight(6), borderRadius: 3 }}
                  onPress={() => [addtaxDeduction()]}
                >
                  <Text style={{ color: "white", justifyContent: "center", textAlign: "center" }}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "dodgerblue", justifyContent: "center", width: responsiveWidth(44), height: responsiveHeight(6), borderRadius: 3, marginLeft: "1.5%" }}
                  onPress={() => {
                    fetchData()
                    setShowModal(true)
                  }}
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
          >
            <View
              style={Style.modalviewstyle}>
              <View style={Style.innercontainer}>
                <View style={Style.modaltxtview}>
                  <Text style={Style.modaltxt}>Vehicle List</Text>
                  <TouchableOpacity onPress={() => { setShowModal(false); }}>
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
                        renderItem={({ item, id }) => {
                          return (
                            <View style={Style.item} >

                              <View style={Style.flatlisttxt}>
                                <View>
                                  <Text style={Style.modaltxt1}>Vehicle : <Text style={Style.modaltxt2}>{item.vehicle_id}</Text></Text>
                                  <Text style={Style.modaltxt1}>RegNo :   <Text style={Style.modaltxt2}>{item.registration_no}</Text></Text>
                                  <Text style={Style.modaltxt1}>Tax : <Text style={Style.modaltxt2}>{item.tax_deducted}</Text></Text>
                                </View>
                                <View style={{ width: responsiveScreenWidth(5.5), height: responsiveScreenHeight(3.3), marginTop: "2%" }}>
                                  <TouchableOpacity onPress={() => deleteDeduction(item.id)}>
                                    <Image source={require('../../../../../../src/assets/pictures/image71.png')}
                                      style={{ width: "100%", height: "100%" }}
                                    />
                                  </TouchableOpacity>
                                </View>
                              </View>


                            </View>
                          );
                        }}
                        keyExtractor={(item) => {
                          return item.id;
                        }} />
                    )
                  }

                </View>



              </View>
            </View>
          </Modal>
        </View >
        <Button
         onPressBack={() => navigation.navigate('TaxD')}
         onPressForward={()=> navigation.navigate('wealth')}
        />

      </View ></>

  )

}

export default Vehicle;
