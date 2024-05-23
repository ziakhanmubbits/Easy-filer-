import { View, Text, TextInput, Pressable, TouchableOpacity, ToastAndroid, Modal, FlatList,ScrollView,Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import Style from './style';
import { useSelector } from 'react-redux';
import { useAddWealthStatementPostMutation } from '../../../../../Services/GetApiCall';
import axios from 'axios';
import { BASE_URL } from '../../../../../CommonUrl/CommonUrls';
import Button from '../../../../Components/Index';
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';

const Insurence = () => {
  const navigation=useNavigation();
  const showToast = () => {
    if (companyName && description && premiumPaid) {
      ToastAndroid.show('Insurance Added Successfully', ToastAndroid.SHORT);
    }
  };

  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [premiumPaid, setPremiumPaid] = useState('');
  const [companyNameError, setCompanyNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [premiumPaidError, setPremiumPaidError] = useState(false);
  const [array, setArray] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const assetypetId = useSelector((state) => state.myReducer.assetypetId);
  const wealthscreenName = useSelector((state) => state.myReducer.wealthscreenName);


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

  const resetFormFields = () => {
    setCompanyName(null);
    setDescription('');
    setPremiumPaid('');
  };

  const [addpost] = useAddWealthStatementPostMutation();
  const addWealthStatement = async () => {
    if (!companyName) {
      setCompanyNameError(true);
    } else if (!description) {
      setDescriptionError(true);
    } else if (!premiumPaid) {
      setPremiumPaidError(true);
    }else {
      const postParams = {
        assets: '',
        address: '',
        cost: '',
        registration_no: '',
        account_no: '',
        company_name: companyName,
        description: description,
        premium_paid: premiumPaid,
        asset_cost: '',
        value_at_cost: '',
        cash_balance: '',
        institution_name: '',
        amount: '',
        taxfilling_id: taxFilingId,
        property_type_id: '',
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
        <View style={{ flexDirection: "column" }}>
          <TextInput style={[
                Style.placeholder1,
               {borderColor:companyNameError ? 'red':'grey'}
              ]}
            placeholder='Company Name'
            placeholderTextColor={companyNameError ? 'red':"grey"}
            value={companyName}
            onChangeText={text => [setCompanyName(text), setCompanyNameError(false)]} />

          <TextInput  style={[
                Style.placeholder1,
               {borderColor:descriptionError ? 'red':'grey'}
              ]}
            placeholder='Description'
            placeholderTextColor={descriptionError ? 'red':"grey"}
            value={description}
            onChangeText={text => [setDescription(text), setDescriptionError(false)]} />

          <TextInput style={[
                Style.placeholder1,
               {borderColor:premiumPaidError ? 'red':'grey'}
              ]}
            keyboardType='numeric'
            placeholder='Total Insurance Premium Paid'
            placeholderTextColor={premiumPaidError ? 'red':"grey"}
            value={premiumPaid}
            onChangeText={text => [setPremiumPaid(text), setPremiumPaidError(false)]} />

          <View style={{ flexDirection: "row", marginTop: "3%" }}>
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
          </View>
        </View>
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
                    renderItem={({ item }) => {
                      return (
                        <View style={Style.item}>

                          <View style={Style.flatlistview}>
                          <View style={Style.flatlisttxt}>
                            <Text style={Style.modaltxt1}>Company Name: <Text style={Style.modaltxt2}>{item.company_name}</Text></Text>
                            <Text style={Style.modaltxt1}>Description:   <Text style={Style.modaltxt2}>{item.description}</Text></Text>
                            <Text style={Style.modaltxt1}>Total Paid Insurance: <Text style={Style.modaltxt2}>{item.premium_paid}</Text></Text>
                          </View>
                          <View style={{width:responsiveScreenWidth(5.5),height:responsiveScreenHeight(3.3),marginTop:"2%"}}>
                              <TouchableOpacity>
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

export default Insurence;