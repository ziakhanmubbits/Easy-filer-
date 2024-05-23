import React, { useRef } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import Agriculture from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Agriculture/Index';
import AddBottomSheet from './src/screens/BottomSheet/Index';
import ComissionServices from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/ComissionServices/Index';
import CapitalGain from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/DividendGain/CapitalGain/Index';
import Dividend from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/DividendGain/Dividend/Index';
import DividendGain from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/DividendGain/Index';
import Expense from './src/screens/homeTab/IndividualTaxFiling/Expense/Index';
import FBR from './src/screens/homeTab/IndividualTaxFiling/FBR/Index';
import ForgetOtp from './src/screens/auth/ForgetOtp/Index';
import ForgotPassword from './src/screens/auth/ForgotPassword/Index';
import Freelancer from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/Index';
import FreelancerNo from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerNo/Index';
import FreelancerNo1 from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerNo1/Index';
import FreelancerNo2 from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerNo2/Index';
import FreelancerNo3 from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerNo3/Index';
import FreelancerYes from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerYes/Index';
import FreelancerYes1 from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerYes1/Index';
import FreelancerYes2 from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerYes2/Index';
import FreelancerYes3 from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/FreelancerYes3/Index';
import IncomeBusiness from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Imports/Index';
import IncomeSalery from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/IncomeSalery/Index';
import Login from './src/screens/auth/Login';
import Manufacturer from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Manufacturer/Index';
import NestedNavigationTop from './src/screens/nestedNavigation/NestedNavigationTop/Index';
import NestedNavigationTop2 from './src/screens/nestedNavigation/NestedNavigationTop2/Index';
import NestedNavigationTop3 from './src/screens/nestedNavigation/NestedNavigationTop3/Index';
import NestedNavigator from './src/screens/nestedNavigation/NestedNavigator/Index'
import NewHeader from './src/screens/NewHeader/index';
import NewPasswordChoose from './src/screens/auth/NewPasswordChoose/Index';
import Otp from './src/screens/auth/OTP/Index';
import OtherIncome from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/OtherIncome/Index';
import Partnership from './src//screens/homeTab/IndividualTaxFiling/Income/IncomePages/Partnership/Index';
import Payment from './src/screens/homeTab/IndividualTaxFiling/Payment/Index';
import Pension from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Pension/Index';
import Accountant from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Accountant/Index';
import Doctor from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Doctor/Index';
import Engineer from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Engineer/Index';
import Professional from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Index';
import Lawyer from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Lawyer/Index';
import Management from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Management/Index';
import OtherProfession from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Professional/OtherProfession/Index';
import Screen1 from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Screen1/Index';
import Screen2 from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Screen2/Index';
import Screen3 from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Screen3/Index';
import Trainer from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/Professional/Trainer/Index';
import BankDeposit from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/ProfitSaving/BankDeposit/Index';
import Behbood from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/ProfitSaving/Behbood/Index';
import GovtScheme from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/ProfitSaving/GovtScheme/Index';
import ProfitSaving from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/ProfitSaving/Index';
import PensionerBenefits from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/ProfitSaving/PensionerBenefits/Index';
import Gain from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/RentSale/Gain/Index';
import RentSale from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/RentSale/Index';
import PropertyRent from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/RentSale/PropertyRent/Index';
import SignUp from './src/screens/auth/Signup/index';
import SplashScreen from './src/screens/SplashScreen/index';
import Others from './src/screens/homeTab/IndividualTaxFiling/TaxDeducted/Others/Index';
import UtilitiesNo from './src/screens/homeTab/IndividualTaxFiling/TaxDeducted/Utilities/Index';
import Vehicle from './src/screens/homeTab/IndividualTaxFiling/TaxDeducted/Vehicle/Index';
import TaxSavings from './src/screens/homeTab/IndividualTaxFiling/TaxSavings/Index';
import TaxSavingsYes from './src/screens/homeTab/IndividualTaxFiling/TaxSavings/Yes/Index';
import TraderShop1 from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/TraderShop 1/Index';
import TraderShop from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/TraderShop/Index';
import TraderShop2 from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/TraderShop2/Index';
import TraderShop3 from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/TraderShop3/Index';
import UpdateProfile from './src/UpdateProfile/Index';
import WealthStatement from './src/screens/homeTab/IndividualTaxFiling/WealthStatement/Index';
import Wholesaler from './src/screens/homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Wholesaler/Index';
import Button from './src/screens/Components/Index';
import Resume from './src/screens/homeTab/IndividualTaxFiling/Resume/Index';
import { Provider, useSelector } from 'react-redux';
import store from './src/store/Store';
import Assets from './src/screens/homeTab/IndividualTaxFiling/WealthStatement/assets';
import WealthStatementNested from './src/screens/nestedNavigation/WealthStatementNested';
import Property from './src/screens/homeTab/IndividualTaxFiling/WealthStatement/Property';
import WealthVehicle from './src/screens/homeTab/IndividualTaxFiling/WealthStatement/Vehicle';
import BankAccount from './src/screens/homeTab/IndividualTaxFiling/WealthStatement/Bank Account';
import Insurence from './src/screens/homeTab/IndividualTaxFiling/WealthStatement/Insurence';
import Possession from './src/screens/homeTab/IndividualTaxFiling/WealthStatement/Possesion';
import ForiegnAssets from './src/screens/homeTab/IndividualTaxFiling/WealthStatement/Foriegn Assets';
import Cash from './src/screens/homeTab/IndividualTaxFiling/WealthStatement/Cash';
import OtherAssets from './src/screens/homeTab/IndividualTaxFiling/WealthStatement/Other assets';
import Bankloan from './src/screens/homeTab/IndividualTaxFiling/WealthStatement/Bankloan';
import PaymentMethod from './src/screens/homeTab/IndividualTaxFiling/Payment/paymentMethod';
import PaymentNested from './src/screens/nestedNavigation/paymentNested';
import GstRegisterationFormUpload from './src/screens/homeTab/GstRegistration/Index2';
import GstForm from './src/screens/homeTab/GstRegistration/gstform';
import GstRegistrationForm from './src/screens/homeTab/GstRegistration/gstregistrationform';
import NtnRegAopPartnership from './src/screens/homeTab/BusinessIncorporation/NTNregestrationAopPartnerShip/Index';
import NtnregSoleProprietor from './src/screens/homeTab/BusinessIncorporation/NTNregSoleProprietor/Index';
import AddBusinessToNtn from './src/screens/homeTab/BusinessIncorporation/AddBusinessToNTN/Index';
import RemoveBusinessToNTN from './src/screens/homeTab/BusinessIncorporation/RemoveBusinessToNTN/Index';
import AopFormUpload from './src/screens/homeTab/BusinessIncorporation/NTNregestrationAopPartnerShip/index2';
import SoleFormUpload from './src/screens/homeTab/BusinessIncorporation/NTNregSoleProprietor/index2';
import AddFormUpload from './src/screens/homeTab/BusinessIncorporation/AddBusinessToNTN/index2';
import RemoveFormUpload from './src/screens/homeTab/BusinessIncorporation/RemoveBusinessToNTN/index2';
import AopForm from './src/screens/homeTab/BusinessIncorporation/NTNregestrationAopPartnerShip/index3';
import AopRegistrationForm from './src/screens/homeTab/BusinessIncorporation/NTNregestrationAopPartnerShip/index4';
import SoleForm from './src/screens/homeTab/BusinessIncorporation/NTNregSoleProprietor/index3';
import SoleRegistrationForm from './src/screens/homeTab/BusinessIncorporation/NTNregSoleProprietor/index4';
import AddForm from './src/screens/homeTab/BusinessIncorporation/AddBusinessToNTN/index3';
import AddRegistrationForm from './src/screens/homeTab/BusinessIncorporation/AddBusinessToNTN/index4';
import RemoveForm from './src/screens/homeTab/BusinessIncorporation/RemoveBusinessToNTN/index3';
import RemoveRegistrationForm from './src/screens/homeTab/BusinessIncorporation/RemoveBusinessToNTN/index4';
import Faqs from './src/screens/homeTab/Faqs';
import Amount from './src/screens/homeTab/Amount';
import Chat from './src/screens/Chat';
import BottomNested from './src/screens/nestedNavigation/BottomNested';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
export const MyTopTabs = () => {
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  return (
    <View style={{
      flexGrow: 1
    }}>
      <NewHeader />
      <TopTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarScrollEnabled: true,
          tabBarLabelStyle: { fontSize: 10.5, color: "floralwhite", fontWeight: "900", },
          tabBarStyle: { backgroundColor: 'dimgray', height: responsiveHeight(6.5) },
          tabBarIndicatorStyle: {
            backgroundColor: 'firebrick',
            height: responsiveHeight(10)
          }
        }}>
        <TopTab.Screen name='Personal Info' component={Resume}
        />
        <TopTab.Screen name='income' component={NestedNavigationTop}
        />
        <TopTab.Screen name="TaxSavings" component={NestedNavigationTop2} options={{
        }} />
        <TopTab.Screen name="TaxDeducted" component={NestedNavigationTop3} options={{
        }} />
        <TopTab.Screen name="Wealth Statement" component={WealthStatementNested} options={{
        }} />
        <TopTab.Screen name="Expense" component={Expense} options={{
          tabBarButton: () => <AddBottomSheet />,
        }} />
        <TopTab.Screen name="FBR" component={FBR} options={{
          tabBarButton: () => <AddBottomSheet />,
        }} />
        <TopTab.Screen name="payment" component={PaymentNested} options={{
          tabBarButton: () => <AddBottomSheet />,
        }} />
      </TopTab.Navigator>
    </View>
  );
}
function BottomTabs() {
  return (
    <Provider store={store}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          // tabBarActiveBackgroundColor: 'pink',

          tabBarItemStyle: {
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: '1%',
            marginBottom: "1%",
            marginLeft: "1%"
          },
          tabBarStyle: {
            height: responsiveHeight(6.8),
            borderTopEndRadius: 20,
            borderTopLeftRadius: 20
          },
        }}
        initialRouteName='DashBoard'
      >
        <Tab.Screen
          name='HomePage'
          component={NestedNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                backgroundColor: focused ? 'darkred' : 'transparent',
                borderRadius: 20,
                padding: 10,
              }}>
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={responsiveFontSize(2.8)}
                  color={focused ? "white" : "black"}
                />
              </View>
            ),
          }}
        />
        {/* <Tab.Screen name="Index2" component={index2} options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Entypo name='folder' size={25} color={"red"} />
            </View>)
        }} /> */}
      <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                backgroundColor: focused ? 'darkred' : 'transparent',
                borderRadius: 20,
                padding: 10, 
              }}>
                <Ionicons
                  name={focused ? "chatbox-sharp" : "chatbox-outline"}
                  size={responsiveFontSize(3)}
                  color={focused ? "white" : "black"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="BottomNested"
          component={BottomNested}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                backgroundColor: focused ? 'darkred' : 'transparent',
                borderRadius: 20,
                padding: 10, 
              }}>
                <Ionicons
                  name={focused ? "cart" : "cart-outline"}
                  size={responsiveFontSize(3)}
                  color={focused ? "white" : "black"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen name="Index5" component={Index5} options={{
          tabBarButton: () => <AddBottomSheet />,
          tabBarIcon: ({ focused }) => (
            <View>
              {/* <AntDesign  name='appstore1' size={30} color={"#EB0414"} /> */}
            </View>
          )
        }} />
      </Tab.Navigator>
    </Provider>
  );
}

const Index5 = () => {
  return null;
}
const App = () => {
  const refRBSheet = useRef();
  return (
    <Provider store={store}>
      <View style={styles.mainv}>
        <StatusBar backgroundColor={'#EB0414'} translucent={false} />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomeScreen'>
            <Stack.Screen name='BottomHome' component={BottomTabs} />
            <Stack.Screen name='HomeScreen' component={SplashScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Sign' component={SignUp} />
            <Stack.Screen name='Otp' component={Otp} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='ForgetOtp' component={ForgetOtp} />
            <Stack.Screen name='NewPaswordChoose' component={NewPasswordChoose} />
            <Stack.Screen name='Inc' component={MyTopTabs} />
            <Stack.Screen name='Amount' component={Amount} />
            <Stack.Screen name='Personal Info' component={MyTopTabs} />
            <Stack.Screen name='TaxFilling' component={MyTopTabs} />
            <Stack.Screen name='IncomeSalery' component={IncomeSalery} />
            <Stack.Screen name='IncomeBusiness' component={IncomeBusiness} />
            <Stack.Screen name='TraderShop' component={TraderShop} />
            <Stack.Screen name='TraderShop1' component={TraderShop1} />
            <Stack.Screen name='TraderShop2' component={TraderShop2} />
            <Stack.Screen name='TraderShop3' component={TraderShop3} />
            <Stack.Screen name='Tax' component={MyTopTabs} />
            <Stack.Screen name='TaxDeduc' component={MyTopTabs} />
            <Stack.Screen name='WealthStat' component={MyTopTabs} />
            <Stack.Screen name='Expes' component={MyTopTabs} />
            <Stack.Screen name='fbr' component={MyTopTabs} />
            <Stack.Screen name='Payment' component={BottomTabs} />
            <Stack.Screen name='UpdateProfile' component={UpdateProfile} />
            <Stack.Screen name='Wholesaler' component={Wholesaler} />
            <Stack.Screen name='Manufacturer' component={Manufacturer} />
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
            <Stack.Screen name='Pension' component={Pension} />
            <Stack.Screen name='Agriculture' component={Agriculture} />
            <Stack.Screen name='ComissionServices' component={ComissionServices} />
            <Stack.Screen name='Partnership' component={Partnership} />
            <Stack.Screen name='RentSale' component={RentSale} />
            <Stack.Screen name='ProfitSaving' component={ProfitSaving} />
            <Stack.Screen name='DividendGain' component={DividendGain} />
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
            <Stack.Screen name='Gain' component={Gain} />
            <Stack.Screen name='Dividend' component={Dividend} />
            <Stack.Screen name='CapitalGain' component={CapitalGain} />
            <Stack.Screen name='PropertyRent' component={PropertyRent} />
            <Stack.Screen name='BankDeposit' component={BankDeposit} />
            <Stack.Screen name='GovtScheme' component={GovtScheme} />
            <Stack.Screen name='Behbood' component={Behbood} />
            <Stack.Screen name='PensionerBenefits' component={PensionerBenefits} />
            <Stack.Screen name='OtherIncome' component={OtherIncome} />
            <Stack.Screen name='TaxSavings' component={TaxSavings} />
            <Stack.Screen name='TaxSavingsYes' component={TaxSavingsYes} />
            <Stack.Screen name='Vehicle' component={Vehicle} />
            <Stack.Screen name='UtilitiesNo' component={UtilitiesNo} />
            <Stack.Screen name='Others' component={Others} />
            <Stack.Screen name='Button' component={Button} />
            <Stack.Screen name='Assets' component={Assets} />
            <Stack.Screen name='Property' component={Property} />
            <Stack.Screen name='WealthVehicle' component={WealthVehicle} />
            <Stack.Screen name='BankAccount' component={BankAccount} />
            <Stack.Screen name='Insurence' component={Insurence} />
            <Stack.Screen name='Possession' component={Possession} />
            <Stack.Screen name='ForiegnAssets' component={ForiegnAssets} />
            <Stack.Screen name='Cash' component={Cash} />
            <Stack.Screen name='OtherAssets' component={OtherAssets} />
            <Stack.Screen name='Bankloan' component={Bankloan} />
            <Stack.Screen name='PaymentMethod' component={PaymentMethod} />
            <Stack.Screen name='GstRegisterationFormUpload' component={GstRegisterationFormUpload} />
            <Stack.Screen name='GstForm' component={GstForm} />
            <Stack.Screen name='GstRegistrationForm' component={GstRegistrationForm} />
            <Stack.Screen name='NtnRegAopPartnership' component={NtnRegAopPartnership} />
            <Stack.Screen name='NtnregSoleProprietor' component={NtnregSoleProprietor} />
            <Stack.Screen name='AddBusinessToNtn' component={AddBusinessToNtn} />
            <Stack.Screen name='RemoveBusinessToNTN' component={RemoveBusinessToNTN} />
            <Stack.Screen name='AopFormUpload' component={AopFormUpload} />
            <Stack.Screen name='SoleFormUpload' component={SoleFormUpload} />
            <Stack.Screen name='AddFormUpload' component={AddFormUpload} />
            <Stack.Screen name='RemoveFormUpload' component={RemoveFormUpload} />
            <Stack.Screen name='AopForm' component={AopForm} />
            <Stack.Screen name='AopRegistrationForm' component={AopRegistrationForm} />
            <Stack.Screen name='SoleForm' component={SoleForm} />
            <Stack.Screen name='SoleRegistrationForm' component={SoleRegistrationForm} />
            <Stack.Screen name='AddForm' component={AddForm} />
            <Stack.Screen name='AddRegistrationForm' component={AddRegistrationForm} />
            <Stack.Screen name='RemoveForm' component={RemoveForm} />
            <Stack.Screen name='RemoveRegistrationForm' component={RemoveRegistrationForm} />
            <Stack.Screen name='Faqs' component={Faqs} />
            <Stack.Screen name='Chat' component={Chat} />
          </Stack.Navigator>
        </NavigationContainer>
        <View>
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent"
              },
              draggableIcon: {
                backgroundColor: "#000"
              }
            }}
          >
          </RBSheet>
        </View>
      </View>
    </Provider>
  );
};
const styles = StyleSheet.create({
  mainv: {
    flex: 1
  }
});
export default App;