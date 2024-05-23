import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import FontFamily from '../../../assets/customFonts/customFonts'
import { useState } from 'react'
import AnimatedLottieView from 'lottie-react-native'
import { BASE_URL } from '../../../CommonUrl/CommonUrls'

const ServiceCharges = () => {

  const navigation = useNavigation()
  const [array, setArray] = useState([])
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get(BASE_URL + 'packages');
      const packagesWithSelection = res.data.packages.map((item, index) => ({
        ...item,
        isPressed: index === 0,
      }));
      setArray(packagesWithSelection);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log('Error', error);
    }
  };

  const handlePress = (id) => {
    // Update the state to mark the item as pressed
    setArray((prevArray) =>
      prevArray.map((item) =>
        item.id === id ? { ...item, isPressed: true } : { ...item, isPressed: false }
      )
    );
  };

  const selectedPackage = array.find((item) => item.isPressed);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity style={{ width: responsiveScreenWidth(10), height: responsiveScreenHeight(6), marginLeft: responsiveScreenWidth(2), marginTop: responsiveScreenHeight(2) }}
        onPress={() => navigation.goBack()}
      >
        <Image source={require('../../../../src/assets/pictures/left-arrow.png')} style={{ width: "100%", height: "100%", resizeMode: "center" }} />
      </TouchableOpacity>
      <View style={{ marginLeft: responsiveScreenWidth(4) }}>
        <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2), fontFamily: FontFamily.MONTSERRAT_Medium }}>Select the best suited option,to continue with</Text>
        <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2), fontFamily: FontFamily.MONTSERRAT_Medium }}>registration</Text>
      </View>
      <View>
        {loading ?
        (
          <View style={styles.loader}>
          <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
      </View>
        )
        :
        (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {array.map((item) => (
            <TouchableOpacity
              style={[
                styles.itemContainer,
                { backgroundColor: item.isPressed ? 'darkred' : 'white' }, { borderColor: item.isPressed ? 'darkred' : 'black' }
              ]}
              key={item.id}
              onPress={() => handlePress(item.id)}
            >
              <Text style={[styles.titleText, { color: item.isPressed ? 'white' : 'black' }]}>
                {item.packagetype.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
            )}
        {selectedPackage && (
          <View style={styles.packageDetailsContainer}>
            <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2), fontFamily: FontFamily.MONTSERRAT_Medium }}>
              {selectedPackage.title}
            </Text>
            <Text style={{ color: "black", fontSize: responsiveScreenFontSize(1.8), fontFamily: FontFamily.MONTSERRAT_Medium }}>
              Rs: {selectedPackage.price}
            </Text>
            <Text style={{ color: "black", fontSize: responsiveScreenFontSize(1.8), fontFamily: FontFamily.MONTSERRAT_Medium }}>
              Completion: <Text style={{ color: "black", fontSize: responsiveScreenFontSize(1.8), fontFamily: FontFamily.MONTSERRAT_Regular }}>{selectedPackage.completion}</Text>
            </Text>
            <Text style={{ color: "black", fontSize: responsiveScreenFontSize(2), fontFamily: FontFamily.MONTSERRAT_Medium }}>
              Requirements:
            </Text>
            <View>
              {selectedPackage.requirement.split('\r\n').map((line, index) => (
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                  <Image
                    source={require('../../../../src/assets/pictures/full-stop.png')}
                    style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 8 }}
                  />
                  <Text style={{ color: 'black', fontSize: responsiveScreenFontSize(1.8), fontFamily: FontFamily.MONTSERRAT_Regular }}>
                    {line}
                  </Text>
                </View>
              ))}
            </View>
            <View style={{ alignSelf: "flex-end",flexDirection:"row" }}>
              <Text style={{ color: 'darkred', fontSize: responsiveScreenFontSize(1.8), fontFamily: FontFamily.MONTSERRAT_Regular }}>Request for call</Text>
              <TouchableOpacity style={{marginLeft:responsiveScreenWidth(2)}}>
                <Image
                  source={require('../../../../src/assets/pictures/whatsapp.png')}
                  style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 8 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
              <Image
                  source={require('../../../../src/assets/pictures/comments.png')}
                  style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 8 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
   
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    margin: 9,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 6,
    borderColor: "black",
    borderWidth: 0.8
  },
  titleText: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.MONTSERRAT_Medium,
    color: "black"
  },
  packageDetailsContainer: {
    margin: responsiveScreenWidth(4),
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, // For Android
    margin: responsiveScreenWidth(4)
  },
  loader:{
    minHeight:responsiveScreenHeight(10),
    justifyContent:"center",
    alignItems:"center",
    marginTop:"70%"
  }
  
});


export default ServiceCharges



