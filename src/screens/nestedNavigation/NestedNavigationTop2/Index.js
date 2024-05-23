import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import TaxSavings from '../../homeTab/IndividualTaxFiling/TaxSavings/Index';
import TaxSavingsYes from '../../homeTab/IndividualTaxFiling/TaxSavings/Yes/Index';








const Stack = createNativeStackNavigator();

const NestedNavigationTop2 = () => {

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator 
      // initialRouteName='Income'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='Tax' component={TaxSavings} />
        <Stack.Screen name='TaxSavingsYes' component={TaxSavingsYes} />
      </Stack.Navigator>
    </View>

  )
}

export default NestedNavigationTop2;