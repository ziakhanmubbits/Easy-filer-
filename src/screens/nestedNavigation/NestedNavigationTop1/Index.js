import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Resume from '../../homeTab/IndividualTaxFiling/Resume/Index';

const Stack = createNativeStackNavigator();

const NestedNavigationTop1 = () => {

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
         <Stack.Screen name='Resume' component={Resume} /> 
             
      </Stack.Navigator>
    </View>

  )
}

export default NestedNavigationTop1;
