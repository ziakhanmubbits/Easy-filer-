import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Style from './Style';
import { useAddExpensePostMutation } from '../../../../Services/GetApiCall';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../Components/Index';
import axios from 'axios';
import { BASE_URL } from '../../../../CommonUrl/CommonUrls';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setLastStatusName } from '../../../../store/myReducer';
import { useFocusEffect } from '@react-navigation/native';

const Expense = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    GettinAsyncValue()
    // savelastscreen();
  }, [])

  const navigation = useNavigation();

  //States
  const [thatState, setThatState] = useState("click here for advance options")
  const [showDisplay, setShowDisplay] = useState(false)
  const [showScreen2, setShowScreen2] = useState(false)
  const [hideView, setHideView] = useState('')
  const [hideView2, setHideView2] = useState('')
  const [houseExpense, setHouseExpense] = useState('')
  const [rentExpense, setRentExpense] = useState('')
  const [vehcileExpense, setVehicleExpense] = useState('')
  const [electricityExpense, setElectricityExpense] = useState('')
  const [gasExpense, setGasExpense] = useState('')
  const [medicalExpense, setMedicalExpense] = useState('')
  const [fucntionExpense, setFucntionExpense] = useState('')
  const [insuranceExpense, setInsuranceExpense] = useState('')
  const [interesrExpense, setInterestExpense] = useState('')
  const [travellingExpense, setTravellingExpense] = useState('')
  const [rateExpense, setRateExpense] = useState('')
  const [incomeExpense, setIncomeExpense] = useState('')
  const [waterExpense, setWaterExpense] = useState('')
  const [telephoneExpense, setTelephoneExpense] = useState('')
  const [educationalExpense, setEducationalExpense] = useState('')
  const [donationExpense, setDonationExpense] = useState('')
  const [giftExpense, setGiftExpense] = useState('')
  const [lastStatus, setLastStatus] = useState('')
  const [houseExpenseError, setHouseExpenseError] = useState(false)

  //Saving value in variable 
  const saveLastStatus = (name) => {
    dispatch(setLastStatusName(name))
  }

  //getting taxfilling value from taxFilling variable through redux
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const lastStatusName = useSelector((state) => state.myReducer.lastStatusName);
  const [addpost] = useAddExpensePostMutation();
  const addExpense = async () => {
    if (!houseExpense) {
      setHouseExpenseError(true)
    } else {
      const postParams = {
        household: houseExpense,
        rent: rentExpense,
        vehicle_run_maintenance: vehcileExpense,
        electricity: electricityExpense,
        gas: gasExpense,
        medical: medicalExpense,
        function_gathering: fucntionExpense,
        insurance_premium: insuranceExpense,
        interest_expense: interesrExpense,
        travelling: travellingExpense,
        rate_taxes_charge: rateExpense,
        income_tax: incomeExpense,
        water: waterExpense,
        telephone: telephoneExpense,
        educational: educationalExpense,
        donation_zakat: donationExpense,
        gift: giftExpense,
      }
      try {
        const res = await addpost({ postParams, taxFilingId })
        console.log('Expense', res.data)
        if (res.data) {
          navigation.navigate('FBR')
        }
      } catch (error) {
        console.log('Error', error)
      }
    }
  }

  //setting  screen name in taxfillign updated api  
  const DataSubmit = async (uId) => {
    try {
      const response = await axios.patch(BASE_URL + `users/${uId}/taxfillings/${taxFilingId}}`,
        {
          taxfiling: {
            last_status: lastStatusName,
          }
        })
    } catch (error) {
      console.log('nnnnTax Filing Id', error)

    }
  }

  //getting async values 
  const GettinAsyncValue = async () => {
    let userID = await AsyncStorage.getItem('USER ID')
    let Laststatus = await AsyncStorage.getItem('lastStatusName')
    if (userID !== null || Laststatus !== null) {
      const status = (Laststatus)
      setLastStatus(status)
      DataSubmit(userID)
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      //save screen name in async 
      const savelastscreen = async (lastStatusName) => {
        try {
          await AsyncStorage.setItem('lastscreen', lastStatusName);
        } catch (error) {
          console.log('failed to save last screen', error);
        }
      }
      savelastscreen();
      return () => {
        // Optional cleanup function if needed when the screen is unfocused
      };
    }, [])
  );
  return (
    <View style={Style.container}>
      <ScrollView>
        <View style={Style.imageview}>
          <Image source={require('../../../../assets/pictures/image38.png')}
            style={Style.image}
          />
          <Text style={Style.txt1}>Expense</Text>
        </View>
        <View style={Style.touchabletext}>
          <TouchableOpacity onPress={() => {

            setShowDisplay(!showDisplay)
            if (thatState === 'click here for advance options') {
              setThatState('click here for basic options')
            } else if (thatState === 'click here for basic options') {
              setThatState('click here for advance options')
            }
          }}
            style={Style.touchabletextstyle}>
            <Text style={Style.text3}>{thatState}</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.view2}>
          <TextInput style={[Style.placeholder1, { borderColor: houseExpenseError ? 'red' : 'grey' }]} keyboardType='numeric'
            placeholder='Personal / Household Expense'
            value={houseExpense}
            onChangeText={text => [setHouseExpense(text), setHouseExpenseError(false)]}
            placeholderTextColor={houseExpenseError ? 'red' : "grey"}
          />
        </View>
        {showDisplay === true &&
          (
            <View style={Style.view3}>
              <View>
                <View>
                  <TextInput style={Style.placeholder1}
                    placeholder='Rent'
                    placeholderTextColor={"grey"}
                    keyboardType='numeric'
                    value={rentExpense}
                    onChangeText={text => setRentExpense(text)}
                  />
                </View>
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Vehicle Running / Maintenance'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={vehcileExpense}
                  onChangeText={text => setVehicleExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Electricity'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={electricityExpense}
                  onChangeText={text => setElectricityExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Gas'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={gasExpense}
                  onChangeText={text => setGasExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Medical'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={medicalExpense}
                  onChangeText={text => setMedicalExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Functions / Gatherings'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={fucntionExpense}
                  onChangeText={text => setFucntionExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Insurance Premium'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={insuranceExpense}
                  onChangeText={text => setInsuranceExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Interest Expense'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={interesrExpense}
                  onChangeText={text => setInterestExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Traveling'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={travellingExpense}
                  onChangeText={text => setTravellingExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Rate / Taxes / Charge / Cess'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={rateExpense}
                  onChangeText={text => setRateExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Income Tax'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={incomeExpense}
                  onChangeText={text => setIncomeExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Water'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={waterExpense}
                  onChangeText={text => setWaterExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Telephone'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={telephoneExpense}
                  onChangeText={text => setTelephoneExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Educational'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={educationalExpense}
                  onChangeText={text => setEducationalExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Donations / Zakat/Annuity,Profit'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={donationExpense}
                  onChangeText={text => setDonationExpense(text)}
                />
              </View>
              <View style={Style.view4}>
                <TextInput style={Style.placeholder1}
                  placeholder='Gift'
                  placeholderTextColor={"grey"}
                  keyboardType='numeric'
                  value={giftExpense}
                  onChangeText={text => setGiftExpense(text)}
                />
              </View>
            </View>
          )
        }
      </ScrollView>
      <Button
        onPressBack={() => navigation.navigate('TaxDeducted')}
        onPressForward={() => [addExpense(), saveLastStatus('FBR')]}
      />
    </View>
  )
}
export default Expense;