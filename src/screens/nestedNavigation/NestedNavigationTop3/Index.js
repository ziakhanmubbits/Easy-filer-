import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Vehicle from '../../homeTab/IndividualTaxFiling/TaxDeducted/Vehicle/Index';
import UtilitiesNo from '../../homeTab/IndividualTaxFiling/TaxDeducted/Utilities/Index';
import Others from '../../homeTab/IndividualTaxFiling/TaxDeducted/Others/Index';
import TaxDeducted from '../../homeTab/IndividualTaxFiling/TaxDeducted/Index'








const Stack = createNativeStackNavigator();

const NestedNavigationTop3 = () => {

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator 
      // initialRouteName='Income'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='TaxD' component={TaxDeducted} />
        <Stack.Screen name='Vehicle' component={Vehicle} />
        <Stack.Screen name='UtilitiesNo' component={UtilitiesNo} />
        <Stack.Screen name='Others' component={Others} />
      </Stack.Navigator>
    </View>

  )
}

export default NestedNavigationTop3;