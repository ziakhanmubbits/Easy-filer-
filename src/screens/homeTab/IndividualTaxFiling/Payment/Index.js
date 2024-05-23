import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import Style from './Style';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import FontFamily from '../../../../assets/customFonts/customFonts';
import axios from 'axios';
import { BASE_URL } from '../../../../CommonUrl/CommonUrls';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Payment = () => {
  const navigation = useNavigation();
  const [array, setArray] = useState([])
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    fetchData();
    getData()
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      calculateTotalPrice();
    }, [])
  );

  const incorporationtypeId = useSelector((state) => state.salary.incorporationtypeId);
  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('responseArray');
      if (data !== null) {
        console.log('asyncData', JSON.parse(data));
        setDataArray(JSON.parse(data))
      }

    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  };

  const deleteObject = async (objectId) => {
    try {
      // Retrieve data from AsyncStorage
      const data = await AsyncStorage.getItem('responseArray');
      if (data !== null) {
        // Parse the retrieved data
        const dataArray = JSON.parse(data);
        // Filter out the object with the specified ID
        const updatedArray = dataArray.filter(item => item.id !== objectId);
        // Update AsyncStorage with the filtered array
        await AsyncStorage.setItem('responseArray', JSON.stringify(updatedArray));
        // Update component state with the modified array
        setDataArray(updatedArray);
      }
    } catch (error) {
      console.log('Error deleting object:', error);
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    dataArray.forEach(item => {
      totalPrice += parseInt(item.price);
    });
    // setTotalPrice(totalPrice);
    return totalPrice
  };

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(BASE_URL + `incorporation-types/${incorporationtypeId}`);
      console.log('Response:--', res.data.incorporation_type.package);
      const newData = res.data.incorporation_type.package;
      const data = [res.data.incorporation_type.package]
      const existingData = await AsyncStorage.getItem('responseArray');
      let dataArray = existingData ? JSON.parse(existingData) : [];
      dataArray = [...dataArray, newData];
      await AsyncStorage.setItem('responseArray', JSON.stringify(dataArray));
      setDataArray(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }, [incorporationtypeId]);

  return (
    <View style={Style.container}>
      <View style={{ margin: "5%" }}>
        <View style={{ alignItems: "center", marginTop: responsiveScreenHeight(2) }}>
          <FlatList
            data={dataArray}
            scrollEnabled={true}
            renderItem={({ item }) => (
              <View key={item.id} style={Style.flatlistview}>
                <TouchableOpacity style={{ width: responsiveScreenWidth(6), height: responsiveScreenHeight(3) }}
                  onPress={() => deleteObject(item.id)}
                >
                  <Image source={require('../../../../../src/assets/pictures/image74.png')} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
                </TouchableOpacity>
                <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2) }}>{item.title}</Text>
                <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2) }}>Rs.{parseInt(item.price)}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <View style={{
        borderTopWidth: 0.7,
        borderTopColor: "black",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignSelf: 'baseline',
        flexGrow: 1,
        height: responsiveScreenHeight(18)
      }}>
        <View style={{ margin: "5%", flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "grey", fontSize: responsiveScreenFontSize(2.6), fontFamily: FontFamily.MONTSERRAT_Regular }}>Total</Text>
          <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2.4), fontFamily: FontFamily.MONTSERRAT_Medium }}>{calculateTotalPrice()}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", width: responsiveScreenWidth(90) }}>
          <Text style={{ color: "black", fontSize: responsiveScreenFontSize(1.8), fontFamily: FontFamily.MONTSERRAT_Regular }}>if you have any promo code:</Text>
          <TouchableOpacity>
            <Text style={{ color: "red", fontSize: responsiveScreenFontSize(1.8), fontFamily: FontFamily.MONTSERRAT_Regular }}>Cick here</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center", marginTop: responsiveScreenHeight(1) }}>
          <TouchableOpacity style={{ backgroundColor: 'red', borderRadius: 10, width: responsiveScreenWidth(85), height: responsiveScreenHeight(6), alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.navigate('PaymentMethod')}
          >
            <Text style={{ color: "white", fontSize: responsiveScreenFontSize(2), fontFamily: FontFamily.MONTSERRAT_Medium }}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Payment;

