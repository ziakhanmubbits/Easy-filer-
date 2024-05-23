import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import { useGetDeductionTypesQuery } from '../../../../Services/GetApiCall';
import Button from '../../../Components/Index';
import { useDispatch, useSelector } from 'react-redux';
import { setLastStatusName, setTaxDeductedName, setTaxDeductionId } from '../../../../store/myReducer';
import { ASSET_URL, BASE_URL } from '../../../../CommonUrl/CommonUrls';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MediumText, SmallText } from '../../../Components/Text';
import { useFocusEffect } from '@react-navigation/native';

const numColumns = 4;

const TaxDeducted = () => {

  useEffect(() => {
    GettinAsyncValue()
  }, [])

  //States
  const [selectedItem, setSelectedItem] = useState(null)
  const [lastStatus, setLastStatus] = useState('')

  //getting values from variable
  const lastStatusName = useSelector((state) => state.myReducer.lastStatusName);
  console.log('lastStatusName', lastStatusName)

  const dispatch = useDispatch();


  //Saving value in variable
  const saveTaxDeduction = (id) => {
    dispatch(setTaxDeductionId(id))
  }

  const savetaxDeductedName = (id) => {
    dispatch(setTaxDeductedName(id))
  }

  const saveLastStatus = (name) => {
    dispatch(setLastStatusName(name))
  }

  //TaxDeduction Types Api 
  const { data, isError, isLoading } = useGetDeductionTypesQuery();


  const navigation = useNavigation();
  function nav(name) {
    {
      switch (name) {
        case "Vehicles":
          navigation.navigate('Vehicle');
          break;
        case "Utilities":
          navigation.navigate('UtilitiesNo');
          break;
        case "Others":
          navigation.navigate('Others');
          break;
        default:
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
      <View style={Style.view1}>
        <MediumText
          text={'Here are some of the common'}
          style={Style.txt1}
        />
        <Text style={Style.txt2}><Text style={Style.txt1}>withholding taxes</Text> you might have paid</Text>
      </View>
      <View style={Style.view2}>
        <SmallText
          text={"If you haven't paid any advance tax on these activities then"}
          style={Style.txt3}
        />
      </View>

      <View style={Style.flatlistview}>
        <FlatList
          data={data?.deductiontypes}
          renderItem={({ item }) => {
            const isselected = selectedItem === item.id;
            return (

              <View style={Style.item}>
                <TouchableOpacity onPress={() => [nav(item.name), savetaxDeductedName(item.name), saveTaxDeduction(item.id), setSelectedItem(item.id)]}
                >
                  <View style={{ width: responsiveScreenWidth(22), height: responsiveScreenHeight(5.5) }}>
                    <Image style={Style.image} source={{ uri: ASSET_URL + item.icon_path }} />
                  </View>
                  <View style={Style.flatlisttxt}>
                    {/* <Text style={Style.flatlisttxt1}>{item.name}</Text> */}
                    <SmallText
                      text={item.name}
                      style={Style.flatlisttxt1}
                    />
                  </View>
                  {isselected && (
                    <Image
                      source={require('../../../../../src/assets/pictures/correct.png')}
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
      <Button
        onPressBack={() => navigation.navigate('TaxSavings')}
        onPressForward={() => [navigation.navigate('wealth'), saveLastStatus('Wealth Statement')]}
      />
    </View>
  )
}

export default TaxDeducted;