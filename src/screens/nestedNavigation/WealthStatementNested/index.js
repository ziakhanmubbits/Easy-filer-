import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import WealthStatement from '../../homeTab/IndividualTaxFiling/WealthStatement/Index';
import Assets from '../../homeTab/IndividualTaxFiling/WealthStatement/assets';
import WealthVehicle from '../../homeTab/IndividualTaxFiling/WealthStatement/Vehicle';
import BankAccount from '../../homeTab/IndividualTaxFiling/WealthStatement/Bank Account';
import Insurence from '../../homeTab/IndividualTaxFiling/WealthStatement/Insurence';
import Possession from '../../homeTab/IndividualTaxFiling/WealthStatement/Possesion';
import ForiegnAssets from '../../homeTab/IndividualTaxFiling/WealthStatement/Foriegn Assets';
import Cash from '../../homeTab/IndividualTaxFiling/WealthStatement/Cash';
import OtherAssets from '../../homeTab/IndividualTaxFiling/WealthStatement/Other assets';
import Bankloan from '../../homeTab/IndividualTaxFiling/WealthStatement/Bankloan';
import Liabilities from '../../homeTab/IndividualTaxFiling/WealthStatement/Liabilities';
import Property from '../../homeTab/IndividualTaxFiling/WealthStatement/Property';



const Stack = createNativeStackNavigator();

const WealthStatementNested = () => {

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator 
      // initialRouteName='Income'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='wealth' component={WealthStatement} />
        <Stack.Screen name='WealthAssets' component={Assets} />
        <Stack.Screen name='Property' component={Property} />
            <Stack.Screen name='WealthVehicle' component={WealthVehicle} />
            <Stack.Screen name='BankAccount' component={BankAccount} />
            <Stack.Screen name='Insurence' component={Insurence} />
            <Stack.Screen name='Possession' component={Possession} />
            <Stack.Screen name='ForiegnAssets' component={ForiegnAssets} />
            <Stack.Screen name='Cash' component={Cash} />
            <Stack.Screen name='OtherAssets' component={OtherAssets} />
            <Stack.Screen name='Bankloan' component={Bankloan} />
            <Stack.Screen name='Liabilities' component={Liabilities} />
      </Stack.Navigator>
    </View>

  )
}

export default WealthStatementNested;