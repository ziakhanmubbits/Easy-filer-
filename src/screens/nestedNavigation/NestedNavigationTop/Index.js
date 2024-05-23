import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Income from '../../homeTab/IndividualTaxFiling/Income/Index';
import IncomeSalery from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeSalery/Index';
import IncomeBusiness from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Index';
import TraderShop from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/TraderShop/Index';
import TraderShop1 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/TraderShop 1/Index';
import TraderShop2 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/TraderShop2/Index';
import TraderShop3 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/TraderShop3/Index';
import Dealer from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Dealer/Index';
import Wholesaler from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Wholesaler/Index';
import Manufacturer from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Manufacturer/Index';
import Imports from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Imports/Index';
import Exports from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Exports/Index';
import Freelancer from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/Index';
import FreelancerYes from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerYes/Index';
import FreelancerYes1 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerYes1/Index';
import FreelancerYes2 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerYes2/Index';
import FreelancerYes3 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerYes3/Index';
import FreelancerNo from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerNo/Index';
import FreelancerNo1 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerNo1/Index';
import FreelancerNo2 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerNo2/Index';
import FreelancerNo3 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerNo3/Index';
import Professional from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Index';
import Doctor from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Doctor/Index';
import Lawyer from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Lawyer/Index';
import Accountant from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Accountant/Index';
import Engineer from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Engineer/Index';
import Trainer from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Trainer/Index';
import Management from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Management/Index';
import OtherProfession from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Professional/OtherProfession/Index';
import Screen1 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Screen1/Index';
import Screen2 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Screen2/Index';
import Screen3 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Screen3/Index';
import Pension from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Pension/Index';
import Agriculture from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Agriculture/Index';
import ComissionServices from '../../homeTab/IndividualTaxFiling/Income/IncomePages/ComissionServices/Index';
import Partnership from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Partnership/Index';
import RentSale from '../../homeTab/IndividualTaxFiling/Income/IncomePages/RentSale/Index';
import Gain from '../../homeTab/IndividualTaxFiling/Income/IncomePages/RentSale/Gain/Index';
import PropertyRent from '../../homeTab/IndividualTaxFiling/Income/IncomePages/RentSale/PropertyRent/Index';
import ProfitSaving from '../../homeTab/IndividualTaxFiling/Income/IncomePages/ProfitSaving/Index';
import BankDeposit from '../../homeTab/IndividualTaxFiling/Income/IncomePages/ProfitSaving/BankDeposit/Index';
import GovtScheme from '../../homeTab/IndividualTaxFiling/Income/IncomePages/ProfitSaving/GovtScheme/Index';
import Behbood from '../../homeTab/IndividualTaxFiling/Income/IncomePages/ProfitSaving/Behbood/Index';
import PensionerBenefits from '../../homeTab/IndividualTaxFiling/Income/IncomePages/ProfitSaving/PensionerBenefits/Index';
import DividendGain from '../../homeTab/IndividualTaxFiling/Income/IncomePages/DividendGain/Index';
import Dividend from '../../homeTab/IndividualTaxFiling/Income/IncomePages/DividendGain/Dividend/Index';
import CapitalGain from '../../homeTab/IndividualTaxFiling/Income/IncomePages/DividendGain/CapitalGain/Index';
import OtherIncome from '../../homeTab/IndividualTaxFiling/Income/IncomePages/OtherIncome/Index';






const Stack = createNativeStackNavigator();

const NestedNavigationTop = () => {

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator 
      // initialRouteName='Personal Info'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='Income' component={Income} />
        {/* <Stack.Screen name='Personal Info' component={Resume} /> */}
        <Stack.Screen name='IncomeSalery' component={IncomeSalery} />
        <Stack.Screen name='IncomeBusiness' component={IncomeBusiness} />
        <Stack.Screen name='TraderShop' component={TraderShop} />
        <Stack.Screen name='TraderShop1' component={TraderShop1} />
        <Stack.Screen name='TraderShop2' component={TraderShop2} />
        <Stack.Screen name='TraderShop3' component={TraderShop3} />
        <Stack.Screen name='Dealer' component={Dealer} />
        <Stack.Screen name='Wholesaler' component={Wholesaler} />
        <Stack.Screen name='Manufacturer' component={Manufacturer} />
        <Stack.Screen name='Imports' component={Imports} />
        <Stack.Screen name='Exports' component={Exports} />
        <Stack.Screen name='Freelancer' component={Freelancer} />
        <Stack.Screen name='FreelancerYes' component={FreelancerYes} />
        <Stack.Screen name='FreelancerYes1' component={FreelancerYes1} />
        <Stack.Screen name='FreelancerYes2' component={FreelancerYes2} />
        <Stack.Screen name='FreelancerYes3' component={FreelancerYes3} />
        <Stack.Screen name='FreelancerNo' component={FreelancerNo} />
        <Stack.Screen name='FreelancerNo1' component={FreelancerNo1} />
        <Stack.Screen name='FreelancerNo2' component={FreelancerNo2} />
        <Stack.Screen name='FreelancerNo3' component={FreelancerNo3} />
        <Stack.Screen name='Professional' component={Professional} />
        <Stack.Screen name='Doctor' component={Doctor} />
        <Stack.Screen name='Lawyer' component={Lawyer} />
        <Stack.Screen name='Accountant' component={Accountant} />
        <Stack.Screen name='Engineer' component={Engineer} />
        <Stack.Screen name='Trainer' component={Trainer} />
        <Stack.Screen name='Management' component={Management} />
        <Stack.Screen name='OtherProfession' component={OtherProfession} />
        <Stack.Screen name='Screen1' component={Screen1} />
        <Stack.Screen name='Screen2' component={Screen2} />
        <Stack.Screen name='Screen3' component={Screen3} />
        <Stack.Screen name='Pension' component={Pension} />
        <Stack.Screen name='Agriculture' component={Agriculture} />
        <Stack.Screen name='ComissionServices' component={ComissionServices} />
        <Stack.Screen name='Partnership' component={Partnership} />
        <Stack.Screen name='RentSale' component={RentSale} />
        <Stack.Screen name='Gain' component={Gain} />
        <Stack.Screen name='PropertyRent' component={PropertyRent} />
        <Stack.Screen name='ProfitSaving' component={ProfitSaving} />
        <Stack.Screen name='BankDeposit' component={BankDeposit} />
        <Stack.Screen name='GovtScheme' component={GovtScheme} />
        <Stack.Screen name='Behbood' component={Behbood} />
        <Stack.Screen name='PensionerBenefits' component={PensionerBenefits} />
        <Stack.Screen name='DividendGain' component={DividendGain} />
        <Stack.Screen name='Dividend' component={Dividend} />
        <Stack.Screen name='CapitalGain' component={CapitalGain} />
        <Stack.Screen name='OtherIncome' component={OtherIncome} />      
      </Stack.Navigator>
    </View>

  )
}

export default NestedNavigationTop;

