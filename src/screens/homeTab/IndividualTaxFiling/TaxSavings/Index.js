import { View, Text, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import Style from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Button5 from '../../../Components/index5';
import { setLastStatusName } from '../../../../store/myReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../../../../CommonUrl/CommonUrls';
import { useFocusEffect } from '@react-navigation/native';

const TaxSavings = (props) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [lastStatus, setLastStatus] = useState('')

  //Saving value in variable
  const saveLastStatus = (name) => {
    dispatch(setLastStatusName(name))
  }

  //getting values from variable
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const lastStatusName = useSelector((state) => state.myReducer.lastStatusName);

  useEffect(() => {
    GettinAsyncValue()
    // savelastscreen();
  }, [])

  //setting  screen name in taxfilling updated api  
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

  useEffect(() => {
    retrieveUserName(); // Call function to retrieve user name from AsyncStorage
  }, []);

  const retrieveUserName = async () => {
    try {
      const userName = await AsyncStorage.getItem('NAME'); // Assuming 'USER_NAME' is the key for storing the user's name
      if (userName !== null) {
        setUserName(userName);
      }
    } catch (error) {
      console.log('Error retrieving user name:', error);
    }
  };
  
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

  const navigation = useNavigation();
  return (
    <View style={Style.container}>
      <View style={Style.imageview}>
        <Image source={require('../../../../../src/assets/pictures/image33.png')}
          style={Style.image}
        />
        <Text style={Style.txt1}>{userName},do you qualify for any</Text>
        <Text style={Style.txt2}>tax rebates</Text>
      </View>
      <View style={Style.view2}>
        <Text style={Style.txt3}>Did you make investment in mutual funds,insurance,or</Text>
        <Text style={Style.txt3}>donated any amount to charitable organization?</Text>
      </View>
      <View style={Style.buttonstyle}>
        <Pressable style={Style.touchable1viewstyle}
          onPress={() => navigation.navigate('TaxSavingsYes')}
        >
          <View>
            <Ionicons name='checkmark' size={35} color={'green'} />
          </View>
          <View style={Style.touchable1text}>
            <Text style={Style.touchable1text1}>Yes</Text>
          </View>
        </Pressable>
        <Pressable style={Style.touchable1viewstyle}
          onPress={() => [navigation.navigate('TaxDeducted'), saveLastStatus('TaxDeducted')]}
        >
          <View>
            <Ionicons name='close-circle-sharp' size={35} color={'red'} />
          </View>
          <View style={Style.touchable1text}>
            <Text style={Style.touchable1text1}>No</Text>
          </View>
        </Pressable>
      </View>
      <Button5
        onPressBack={() => navigation.navigate('Income')}
      />
    </View>
  )
}
export default TaxSavings;