import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../../../../CommonUrl/CommonUrls';
import Style from './style';
import FontFamily from '../../../assets/customFonts/customFonts';

const Amount = () => {

  const navigation = useNavigation();
  const [array, setArray] = useState([])

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get(BASE_URL + 'packages');
      console.log('Packages', res.data.packages);
      const types = res.data.packages.map(item => item.packagetype?.description);
      setArray(types);
    } catch (error) {
      console.log('Error', error);
    }
  };
  return (
    <View style={Style.container}>
      <View style={{ margin: "5%" }}>
        <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2.4), fontFamily: FontFamily.MONTSERRAT_Medium }}>My Cart</Text>
        <View>
          <FlatList
            data={array}
            renderItem={({ item }) => (
              <View style={{ backgroundColor: "red", width: responsiveScreenWidth(80) }}>
                <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2) }}>{item}</Text>
                <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2) }}>{item.price}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()} // Use index as key
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
          <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2.4), fontFamily: FontFamily.MONTSERRAT_Medium }}>Rs.200</Text>
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
export default Amount;