import { View, Text, Image, TextInput, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import Style from './Style';
import Button from '../../../Components/Index';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { useAddWealthStatementPostMutation } from '../../../../Services/GetApiCall';
import {useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../../../../CommonUrl/CommonUrls';
import AnimatedLottieView from 'lottie-react-native';
import { setLastStatusName } from '../../../../store/myReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';


const WealthStatement = () => {
  const navigation = useNavigation();



  const [assets, setAssets] = useState('')
  const [assetsError, setAssetsError] = useState(false)
  const [isLoading,setIsLoading]=useState(false)
  const [fiscalYear,setFiscalYear]=useState('')


  useEffect(()=>{
    GettingAsyncvalue()
  },[])

  const GettingAsyncvalue = async () => {
    let year = await AsyncStorage.getItem('fiscalyear')
    if (year !==null) {
      const fiscalyear=(year)
      setFiscalYear(fiscalyear)
      
    }
  }


 //getting value from variable thorugh redux
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);




  const [addpost] = useAddWealthStatementPostMutation();

  const addWealthStatement = async () => {
    if (!assets) {
      setAssetsError(true);
      // return;
    } else {
      const postParams = {
        assets: assets,
        address: '',
        cost: '',
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
        property_type_id: '',
        vehicle_id: '',
        bankaccount_id: '',
        possession_type_id: '',
        asset_type_id: '',
        libility_type_id: '',
      }
      try {
        setIsLoading(true)
        const res = await addpost({ postParams, taxFilingId  })
        console.log('WealthStatement', res.data)
        if (res.data) {
          navigation.navigate('WealthAssets')
        }
      } catch (error) {
        console.log('Error', error)
      }finally{
        setIsLoading(false)
      }
    }
  }


  return (

    <View style={Style.container}>
      {isLoading ? 
      (
        <View style={Style.loader}>
        <AnimatedLottieView source={require('../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
    </View>
      )
      :
      (
      
      <ScrollView>
        <View style={Style.imageview}>
          <Image source={require('../../../../../src/assets/pictures/image37.png')}
            style={Style.image}
          />
        </View>
       
       <View style={{alignItems:"center",justifyContent:"center"}}>
        <View style={Style.view2}>
          <Text style={Style.txt1}>For your wealth reconciliation,we need to determine your wealth at the beginning of the tax year {fiscalYear}</Text>
        </View>
        </View>

        <View style={{alignItems:"center",justifyContent:"center"}}>
        <View style={Style.view3}>
          <Text style={Style.txt2}>Please enter your total wealth as at june 30,{fiscalYear} which is closing</Text>
          <Text style={Style.txt2}>wealth of your waelth statement for tax year {fiscalYear}.</Text>
        </View>
        </View>
        <View style={Style.view4}>
          <TextInput style={[Style.placeholder1,{borderColor:assetsError ? 'red':'grey'}]}
            textAlign={'center'}
            keyboardType='numeric'
            placeholder='Amount'
            placeholderTextColor={assetsError ? 'red' : 'black'}
            value={assets}
            onChangeText={text => [setAssets(text), setAssetsError(false)]}
          />
        </View>
      
      </ScrollView>
      )}
      <Button
        onPressBack={() => navigation.navigate('TaxDeducted')}
        onPressForward={() => addWealthStatement()}
      />
    </View>


  )
}

export default WealthStatement;