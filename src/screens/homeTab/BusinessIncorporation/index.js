import { View, Text, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../ImportHeader/Header';
import Style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGetBusinessIncorporationTypeQuery } from '../../../Services/gstregistrationapicall';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { ASSET_URL, BASE_URL } from '../../../CommonUrl/CommonUrls';
import { SmallText } from '../../Components/Text';
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setincorporationtypeId } from '../../../store/mySaleryCalculatorReducer';
import Button5 from '../../Components/index5';


const numColumns = 3;
const BusinessIncorporation = () => {

  const dispatch = useDispatch()

  const [userName, setUserName] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const [array, setArray] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    gettingAsyncValue();
  }, [])

  const gettingAsyncValue = async () => {
    let userName = await AsyncStorage.getItem('NAME');
    if (userName !== null) {
      const name = JSON.parse(userName);
      setUserName(name)
      console.log('username', name)
    }
  };

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(BASE_URL + 'incorporation-types');
      const firstThreeObjects = res.data.incorporation_types.slice(0, 3);
      setArray(firstThreeObjects);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('Error', error);
    }
  };


  const navigation = useNavigation();
  function nav(name) {
    {
      switch (name) {
        case "Individual/Sole Proprietor Registration":
          navigation.navigate('NtnregSoleProprietor');
          break;
          
        case "Partnership/AOP Registration":
          navigation.navigate('NtnRegAopPartnership');
          break;
        default:
      }
    }
  }

  const saveIncorporationId = (text) => {
    dispatch(setincorporationtypeId(text))
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={Style.innerView}>
        <Header />
      </View>
      <View style={Style.toptextview}>
        <View style={{ margin: "5%" }}>
          <Text style={Style.toptext1}>Business Incorporation</Text>
          <Text style={Style.toptext2}><Text style={Style.toptext3}>{userName},</Text>Please select the option best suited you</Text>
        </View>
      </View>
      {loading ?
        (
          <View style={Style.loader}>
            <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
          </View>
        )
        :
        (
          < View style={Style.flatlistview}>
            <FlatList
              data={array}
              renderItem={({ item }) => {
                const isselected = selectedItem === item.id;
                return (

                  <View style={Style.item}>
                    <TouchableOpacity onPress={() => [nav(item.title), saveIncorporationId(item.id)]}
                    >
                      <View style={{ width: responsiveScreenWidth(12), height: responsiveScreenHeight(4.4), alignSelf: "center", justifyContent: "center" }}>
                        <Image style={Style.image} source={{ uri: ASSET_URL + item.icon_path }} />
                      </View>
                      <View style={Style.flatlisttxt}>
                        {/* <Text style={Style.flatlisttxt1}>{item.name}</Text> */}
                        <SmallText
                          text={item.title}
                          style={Style.flatlisttxt1}
                        />
                      </View>
                      {isselected && (
                        <Image
                          source={require('../../../../src/assets/pictures/correct.png')}
                          style={{
                            position: 'absolute',
                            top: '40%',
                            left: '40%',
                            transform: [{ translateX: -10 }, { translateY: -10 }],
                            width: responsiveScreenWidth(7.3),
                            height: responsiveScreenHeight(3.3),
                          }}
                        />
                      )

                      }
                    </TouchableOpacity>

                  </View>
                )
              }
              }
              keyExtractor={(item, index) => {
                return item.id;
              }}
              numColumns={numColumns}
            />
          </View>
        )}
        <Button5
        onPressBack={() => navigation.goBack()}
        />
    </View >
  )
}

export default BusinessIncorporation;