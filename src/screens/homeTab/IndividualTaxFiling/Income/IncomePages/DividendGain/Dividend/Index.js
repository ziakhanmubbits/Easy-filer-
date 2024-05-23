import { View, Text,TextInput,ScrollView} from 'react-native'
import React from 'react'
import Style from './Style';
import Button from '../../../../../../Components/Index';
import { useNavigation } from '@react-navigation/native';

const Dividend = () => {
  const navigation=useNavigation();
  return (
  
    <View style={Style.container}>
        <ScrollView>
   <View style={Style.view1}>
    <Text style={Style.view1txt}>Dividend received from power companies (taxed at 7.5%)</Text>

   </View>
   <View style={Style.view2}>
                <View style={Style.view3}>
                  <View style={Style.view4}>
                    <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Amount'
                      placeholderTextColor={"grey"}
                    />
                  </View>

                  <View>
                    <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Enter Tax'
                      placeholderTextColor={"grey"}
                    />
                  </View>

                </View>
              </View>

              <View style={Style.view5}>
    <Text style={Style.view1txt}>Dividend received from other companies and stock funds (taxes at 15.0%)</Text>

   </View>
   <View style={Style.view2}>
                <View style={Style.view3}>
                  <View style={Style.view4}>
                    <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Amount'
                      placeholderTextColor={"grey"}
                    />
                  </View>

                  <View>
                    <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Enter Tax'
                      placeholderTextColor={"grey"}
                    />
                  </View>

                </View>
              </View>

              <View style={Style.view5}>
    <Text style={Style.view1txt}>Dividend from a company where no tax payable by such company(taxed at 25.0%)</Text>

   </View>
   <View style={Style.view2}>
                <View style={Style.view3}>
                  <View style={Style.view4}>
                    <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Amount'
                      placeholderTextColor={"grey"}
                    />
                  </View>

                  <View>
                    <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Enter Tax'
                      placeholderTextColor={"grey"}
                    />
                  </View>

                </View>
              </View>
              </ScrollView>

              <Button 
               onPressBack={() => navigation.navigate('DividendGain')}
              />
    </View>

  )
}

export default Dividend;