import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Payment from '../../homeTab/IndividualTaxFiling/Payment/Index';
import PaymentNested from '../paymentNested';
import PaymentMethod from '../../homeTab/IndividualTaxFiling/Payment/paymentMethod';


const stack = createNativeStackNavigator();
const  BottomNested = () => {
    return (
        <stack.Navigator  screenOptions={{ headerShown: false }}>
            <stack.Screen name='Payment' component={Payment} />
            <stack.Screen name='PaymentMethod' component={PaymentMethod} />
        </stack.Navigator>
    )
}
export default BottomNested