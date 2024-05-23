import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TaxFilling from '../../homeTab/IndividualTaxFiling/TaxFilling/index';
import NtnRegistration from '../../homeTab/NtnRegistration/Index';
import NTNfinder from '../../homeTab/NtnFinder/index';
import ATLstatusFinder from '../../homeTab/AtlStatusFinder/index';
import IRISProfileUpdate from '../../homeTab/IrisProfileUpdate/index';
import GSTRegistration from '../../homeTab/GstRegistration/index';
import USAservices from '../../homeTab/Video/index';
import ServiceCharges from '../../homeTab/ServiceCharges/index';
import SalaryCalculator from '../../homeTab/SalaryCalculator/index';
import Expences from '../../homeTab/ExpenseTracker/index';
import BusinessIncorporation from '../../homeTab/BusinessIncorporation/index';
import Salary from '../../../../src/screens/homeTab/IrisProfileUpdate/IRISProfile/Index';
import AddTransction from '../../../AddTransction';
import Others from '../../homeTab/IndividualTaxFiling/TaxDeducted/Others/Index';
import UtilitiesNo from '../../homeTab/IndividualTaxFiling/TaxDeducted/Utilities/Index';
import Vehicle from '../../homeTab/IndividualTaxFiling/TaxDeducted/Vehicle/Index';
import TaxSavingsYes from '../../homeTab/IndividualTaxFiling/TaxSavings/Yes/Index';
import { MyTopTabs } from '../../../../App';
import Freelancer from '../../homeTab/IndividualTaxFiling/Income/IncomePages/Freelancer/Index';
import Exports from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Exports/Index';
import Imports from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Imports/Index';
import Manufacturer from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Manufacturer/Index';
import Wholesaler from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Wholesaler/Index';
import Dealer from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Dealer/Index';
import TraderShop3 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/TraderShop3/Index';
import TraderShop2 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/TraderShop2/Index';
import TraderShop1 from '../../homeTab/IndividualTaxFiling/Income/IncomePages/TraderShop 1/Index';
import TraderShop from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/TraderShop/Index';
import IncomeBusiness from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeBusiness/Index';
import IncomeSalery from '../../homeTab/IndividualTaxFiling/Income/IncomePages/IncomeSalery/Index';
import homeTab from '../../../../src/screens/homeTab/index'
import WealthStatement from '../../homeTab/IndividualTaxFiling/WealthStatement/Index';
import RentalIncome from '../../homeTab/IrisProfileUpdate/RentalIncome/Index';
import CapitalAssests from '../../homeTab/IrisProfileUpdate/CapitalAssests/Index';
import Agriculture from '../../homeTab/IrisProfileUpdate/IrisAgriculture';
import Foriegn from '../../homeTab/IrisProfileUpdate/Foriegn';
import Sources from '../../homeTab/IrisProfileUpdate/OtherSources/Index';
import PaymentMethod from '../../homeTab/IndividualTaxFiling/Payment/paymentMethod';
import GstRegisterationFormUpload from '../../homeTab/GstRegistration/Index2';
import GstRegistrationForm from '../../homeTab/GstRegistration/gstregistrationform';
import NtnRegAopPartnership from '../../homeTab/BusinessIncorporation/NTNregestrationAopPartnerShip/Index';
import NtnregSoleProprietor from '../../homeTab/BusinessIncorporation/NTNregSoleProprietor/Index';
import AddBusinessToNtn from '../../homeTab/BusinessIncorporation/AddBusinessToNTN/Index';
import RemoveBusinessToNTN from '../../homeTab/BusinessIncorporation/RemoveBusinessToNTN/Index';
import AopFormUpload from '../../homeTab/BusinessIncorporation/NTNregestrationAopPartnerShip/index2';
import SoleFormUpload from '../../homeTab/BusinessIncorporation/NTNregSoleProprietor/index2';
import AddFormUpload from '../../homeTab/BusinessIncorporation/AddBusinessToNTN/index2';
import RemoveFormUpload from '../../homeTab/BusinessIncorporation/RemoveBusinessToNTN/index2';
import AopForm from '../../homeTab/BusinessIncorporation/NTNregestrationAopPartnerShip/index3';
import AopRegistrationForm from '../../homeTab/BusinessIncorporation/NTNregestrationAopPartnerShip/index4';
import SoleForm from '../../homeTab/BusinessIncorporation/NTNregSoleProprietor/index3';
import SoleRegistrationForm from '../../homeTab/BusinessIncorporation/NTNregSoleProprietor/index4';
import AddForm from '../../homeTab/BusinessIncorporation/AddBusinessToNTN/index3';
import AddRegistrationForm from '../../homeTab/BusinessIncorporation/AddBusinessToNTN/index4';
import RemoveForm from '../../homeTab/BusinessIncorporation/RemoveBusinessToNTN/index3';
import RemoveRegistrationForm from '../../homeTab/BusinessIncorporation/RemoveBusinessToNTN/index4';
import Faqs from '../../homeTab/Faqs';
import PaymentHistory from '../../PaymentHistory';
import AccountSetting from '../../settings';
import Notifications from '../../notifications';
import BusinessIncome from '../../homeTab/IrisProfileUpdate/BusineesIncome';
import PswRegistration from '../../homeTab/PswRegistration';
import GstFilling from '../../homeTab/gstFilling';
import RemoveBusinessFromNtn from '../../homeTab/Removebusinessfromntn';
// import UaeServices from '../../homeTab/UaeServices';
import AddBusinessToNTN from '../../homeTab/AddBusinnesToNTN';
import UaeVatFilling from '../../homeTab/UaeServices/UaeVatFilling';
import RemoveYesNo from '../../homeTab/Removebusinessfromntn/RemoveYESNo';
import RemovalForm from '../../homeTab/Removebusinessfromntn/RemoveForm';
import RemovalForm2 from '../../homeTab/Removebusinessfromntn/index2';
import RemovalForm3 from '../../homeTab/Removebusinessfromntn/index3';
import AddedForm from '../../homeTab/AddBusinnesToNTN/AddForm';
import AddedFormUpload from '../../homeTab/AddBusinnesToNTN/AddedFromUpload';
import AddedForm2 from '../../homeTab/AddBusinnesToNTN/AddedForm2';
import Payment from '../../homeTab/IndividualTaxFiling/Payment/Index';
import AddedFrom3 from '../../homeTab/AddBusinnesToNTN/AddedForm3';


const stack = createNativeStackNavigator();
const NestedNavigator = () => {
    return (

        <stack.Navigator initialRouteName='homeTab' screenOptions={{ headerShown: false }}>
            <stack.Screen name='homeTab' component={homeTab} />
            <stack.Screen name='Tax' component={TaxFilling} />
            <stack.Screen name='Personal Info' component={MyTopTabs} />
            <stack.Screen name='income' component={MyTopTabs} />
            <stack.Screen name='Registration' component={NtnRegistration} />
            <stack.Screen name='Finder' component={NTNfinder} />
            <stack.Screen name='ATLStatus' component={ATLstatusFinder} />
            <stack.Screen name='IRISprofile' component={IRISProfileUpdate} />
            <stack.Screen name='business' component={BusinessIncorporation} />
            <stack.Screen name='GST' component={GSTRegistration} />
            <stack.Screen name='USA' component={USAservices} />
            <stack.Screen name='Service' component={ServiceCharges} />
            <stack.Screen name='Calculator' component={SalaryCalculator} />
            <stack.Screen name='Expences' component={Expences} />
            <stack.Screen name='Transction' component={AddTransction} />
            <stack.Screen name='Salary' component={Salary} />
            <stack.Screen name='RentalIncome' component={RentalIncome} />
            <stack.Screen name='CapitalAssests' component={CapitalAssests} />
            <stack.Screen name='Agriculture' component={Agriculture} />
            <stack.Screen name='Foriegn' component={Foriegn} />
            <stack.Screen name='OtherSources' component={Sources} />
            <stack.Screen name='PaymentMethod' component={PaymentMethod} />
            <stack.Screen name='GstRegisterationFormUpload' component={GstRegisterationFormUpload} />
            <stack.Screen name='GstRegistrationForm' component={GstRegistrationForm} />
            <stack.Screen name='IncomeSalery' component={IncomeSalery} />
            <stack.Screen name='IncomeBusiness' component={IncomeBusiness} />
            <stack.Screen name='TraderShop' component={TraderShop} />
            <stack.Screen name='TraderShop1' component={TraderShop1} />
            <stack.Screen name='TraderShop2' component={TraderShop2} />
            <stack.Screen name='TraderShop3' component={TraderShop3} />
            <stack.Screen name='Dealer' component={Dealer} />
            <stack.Screen name='Wholesaler' component={Wholesaler} />
            <stack.Screen name='Manufacturer' component={Manufacturer} />
            <stack.Screen name='Imports' component={Imports} />
            <stack.Screen name='Exports' component={Exports} />
            <stack.Screen name='Freelancer' component={Freelancer} />
            <stack.Screen name='TaxSavings' component={MyTopTabs} />
            <stack.Screen name='TaxSavingsYes' component={TaxSavingsYes} />
            <stack.Screen name='Vehicle' component={Vehicle} />
            <stack.Screen name='UtilitiesNo' component={UtilitiesNo} />
            <stack.Screen name='Others' component={Others} />
            <stack.Screen name='Wealth Statement' component={WealthStatement} />
            <stack.Screen name='NtnRegAopPartnership' component={NtnRegAopPartnership} />
            <stack.Screen name='NtnregSoleProprietor' component={NtnregSoleProprietor} />
            <stack.Screen name='AddBusinessToNtn' component={AddBusinessToNtn} />
            <stack.Screen name='RemoveBusinessToNTN' component={RemoveBusinessToNTN} />
            <stack.Screen name='AopFormUpload' component={AopFormUpload} />
            <stack.Screen name='SoleFormUpload' component={SoleFormUpload} />
            <stack.Screen name='AddFormUpload' component={AddFormUpload} />
            <stack.Screen name='RemoveFormUpload' component={RemoveFormUpload} />
            <stack.Screen name='AopForm' component={AopForm} />
            <stack.Screen name='AopRegistrationForm' component={AopRegistrationForm} />
            <stack.Screen name='SoleForm' component={SoleForm} />
            <stack.Screen name='SoleRegistrationForm' component={SoleRegistrationForm} />
            <stack.Screen name='AddForm' component={AddForm} />
            <stack.Screen name='AddRegistrationForm' component={AddRegistrationForm} />
            <stack.Screen name='RemoveForm' component={RemoveForm} />
            <stack.Screen name='RemoveRegistrationForm' component={RemoveRegistrationForm} />
            <stack.Screen name='Faqs' component={Faqs} />
            <stack.Screen name='PaymentHistory' component={PaymentHistory} />
            <stack.Screen name='AccountSetting' component={AccountSetting} />
            <stack.Screen name='Notifications' component={Notifications} />
            <stack.Screen name='BusinessIncome' component={BusinessIncome} />
            <stack.Screen name='PswRegistration' component={PswRegistration} />
            <stack.Screen name='GstFilling' component={GstFilling} />
            <stack.Screen name='RemoveBusinessFromNtn' component={RemoveBusinessFromNtn} />
            {/* <stack.Screen name='UaeServices' component={UaeServices} /> */}
            <stack.Screen name='AddBusinessToNTN' component={AddBusinessToNTN} />
            <stack.Screen name='UaeVatFilling' component={UaeVatFilling} />
            <stack.Screen name='RemovalForm' component={RemovalForm} />
            <stack.Screen name='RemoveYesNo' component={RemoveYesNo} />
            <stack.Screen name='RemovalForm2' component={RemovalForm2} />
            <stack.Screen name='RemovalForm3' component={RemovalForm3} />
            <stack.Screen name='AddedForm' component={AddedForm} />
            <stack.Screen name='AddedFormUpload' component={AddedFormUpload} />
            <stack.Screen name='AddedForm2' component={AddedForm2} />
            <stack.Screen name='AddedFrom3' component={AddedFrom3} />
            <stack.Screen name='Payment' component={Payment} />
        </stack.Navigator>
    )
}
export default NestedNavigator