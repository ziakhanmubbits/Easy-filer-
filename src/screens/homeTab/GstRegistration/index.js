import { View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Style from './Style';
import axios from 'axios';
import { BASE_URL } from '../../../CommonUrl/CommonUrls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GstForm from './gstform';
import GstRegistrationForm from './gstregistrationform';
import AnimatedLottieView from 'lottie-react-native';

const GSTRegistration = () => {
  const [array, setArray] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gettingAsyncValue();
  }, [])


  const gettingAsyncValue = async () => {
    try {
      let userID = await AsyncStorage.getItem('USER ID');
      const id = userID;
      await fetchData(id);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('Error', error);
    }
  };

  //get gstregistration api data
  const fetchData = async (id) => {
    try {
      const res = await axios.get(BASE_URL + `users/${id}/gst-registrations`)
      setArray(res.data.gstRegistrations)
    } catch (error) {
      console.log('Error', error)
    }
  }

  if (loading) {
    return (
      <View style={Style.loader}>
        <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
      </View>
    );
  }

  return (
    <View style={Style.mainView1}>
      {array.length === 0 ? (
        <GstRegistrationForm />
      ) : (
        <GstForm />
      )}
    </View>
  )
}
export default GSTRegistration
