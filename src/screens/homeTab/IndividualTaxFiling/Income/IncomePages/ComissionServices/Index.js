import { View, Text,ScrollView,TextInput } from 'react-native'
import React from 'react'
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../Components/Index';

const ComissionServices = () => {

  const navigation = useNavigation();

  return (
  
    <View style={Style.container}>
        <ScrollView>
      <View style={Style.textview}>
        <Text style={Style.text}>Life Insurance Agent (taxed at 8% upto 5 lac and 12% above 5 lac)</Text>
        </View>
        <View style={Style.view2} >
        <TextInput style={Style.innerplaceholder1} textAlign='center' keyboardType='numeric' placeholder='Income Amount'
         placeholderTextColor={"grey"}
        />
        <TextInput style={Style.innerplaceholder1} textAlign='center' keyboardType='numeric' placeholder='Tax deducted tax'
         placeholderTextColor={"grey"}
          />
      </View>
      <View style={Style.view3}>
      <TextInput style={Style.innerplaceholder} textAlign='center' keyboardType='numeric' placeholder='Expense'
         placeholderTextColor={"grey"}
          />
      </View>


      <View style={Style.textview2}>
        <Text style={Style.text}>Insurance Agent-General/Others(taxed at 12%)</Text>
        </View>
        <View style={Style.view2} >
        <TextInput style={Style.innerplaceholder1} textAlign='center' keyboardType='numeric' placeholder='Income Amount'
         placeholderTextColor={"grey"}
        />
        <TextInput style={Style.innerplaceholder1} textAlign='center' keyboardType='numeric' placeholder='Tax deducted tax'
         placeholderTextColor={"grey"}
          />
      </View>
      <View style={Style.view3}>
      <TextInput style={Style.innerplaceholder} textAlign='center' keyboardType='numeric' placeholder='Expense'
         placeholderTextColor={"grey"}
          />
      </View>

      <View style={Style.textview2}>
        <Text style={Style.text}>Real State/Travel Agent(taxed at 12%)</Text>
        </View>
        <View style={Style.view2} >
        <TextInput style={Style.innerplaceholder1} textAlign='center' keyboardType='numeric' placeholder='Income Amount'
         placeholderTextColor={"grey"}
        />
        <TextInput style={Style.innerplaceholder1} textAlign='center' keyboardType='numeric' placeholder='Tax deducted tax'
         placeholderTextColor={"grey"}
          />
      </View>
      <View style={Style.view3}>
      <TextInput style={Style.innerplaceholder} textAlign='center' keyboardType='numeric' placeholder='Expense'
         placeholderTextColor={"grey"}
          />
      </View>

      <View style={Style.textview2}>
        <Text style={Style.text}>Service/Consultancy(taxes at 10%)</Text>
        </View>
        <View style={Style.view2}>
        <TextInput style={Style.innerplaceholder1} textAlign='center' keyboardType='numeric' placeholder='Income Amount'
         placeholderTextColor={"grey"}
        />
        <TextInput style={Style.innerplaceholder1} textAlign='center' keyboardType='numeric' placeholder='Tax deducted tax'
         placeholderTextColor={"grey"}
          />
      </View>
      <View style={Style.view3}>
      <TextInput style={Style.innerplaceholder} textAlign='center' keyboardType='numeric' placeholder='Expense'
         placeholderTextColor={"grey"}
          />
      </View>


      
      <View style={Style.textview2}>
        <Text style={Style.text}>Service/Consultancy(taxes at 10%)</Text>
        </View>
        <View style={Style.view2} >
        <TextInput style={Style.innerplaceholder1} textAlign='center' keyboardType='numeric' placeholder='Income Amount'
         placeholderTextColor={"grey"}
        />
        <TextInput style={Style.innerplaceholder1} textAlign='center' keyboardType='numeric' placeholder='Tax deducted tax'
         placeholderTextColor={"grey"}
          />
      </View>
      <View  style={Style.view4}>
      <TextInput style={Style.innerplaceholder} textAlign='center' keyboardType='numeric' placeholder='Expense'
         placeholderTextColor={"grey"}
          />
      </View>
      </ScrollView>
      <Button
       onPressBack={() => navigation.goBack()}
      />
    </View>
  
  )
}

export default ComissionServices;