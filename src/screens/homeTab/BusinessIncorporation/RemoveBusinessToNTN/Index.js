import { View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../../../../CommonUrl/CommonUrls';
import { useSelector } from 'react-redux';
import RemoveRegistrationForm from './index4';
import RemoveForm from './index3';
import AnimatedLottieView from 'lottie-react-native';
import Style from './Style';

const RemoveBusinessToNTN = () => {
  const [array, setArray] = useState([])
  const [loading, setLoading] = useState(true)


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


  const incorporationtypeId = useSelector((state) => state.salary.incorporationtypeId);
  const fetchData = async (id) => {
    try {
      const res = await axios.get(BASE_URL + `users/${id}/business-incorporations?incorporationtype_id=${incorporationtypeId}`);
      setArray(res.data.business_incorporations)
    } catch (error) {
      setLoading(false)
      console.log('Error', error);
    }
  };

  if (loading) {
    return (
      <View style={Style.loader}>
        <AnimatedLottieView source={require('../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {array.length === 0 ? (
        <RemoveRegistrationForm />
      )
        :
        (
          <RemoveForm />
        )
      }
    </View>
  )
}

export default RemoveBusinessToNTN;