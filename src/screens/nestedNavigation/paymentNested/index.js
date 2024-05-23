import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import Payment from '../../homeTab/IndividualTaxFiling/Payment/Index';
import PaymentMethod from '../../homeTab/IndividualTaxFiling/Payment/paymentMethod';




const Stack = createNativeStackNavigator();

const PaymentNested = () => {

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator 
      // initialRouteName='Income'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='Payment' component={Payment} />
        <Stack.Screen name='PaymentMethod' component={PaymentMethod} />
        
      </Stack.Navigator>
    </View>

  )
}

export default PaymentNested;