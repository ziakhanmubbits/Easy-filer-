import { View, Text,TextInput,Pressable,TouchableOpacity ,ScrollView } from 'react-native'
import React,{useState} from 'react'
import Style from './Style';
import {SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../../Components/Index';



const data = [
    { key: '1', value: 'Defence Savings certificates' },
    { key: '2', value: 'Regular Income Certificates' },
    { key: '3', value: 'Special Savings Certificates' },
    { key: '4', value: 'Short Term Savings Certificates'},
    { key: '5', value: 'Special Savings Account' },
]



const GovtScheme = () => {

  const navigation = useNavigation();


    const [selected, setSelected] = useState("");
  return (
    <View style={Style.container}>
      <ScrollView>
        <View style={Style.view1}>
            <Text style={Style.txt}>Govt Scheme</Text>
        </View>
        <View style={{ marginTop: "10%", alignItems: "center" }}>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        placeholderTextColor={'black'}
        searchPlaceholder='Search bank'
        // onSelect={() => alert(selected)}
        label="Select Bank"
        dropdownStyles={Style.dropdown}
        dropdownTextStyles={Style.dropdowntxt}
        boxStyles={Style.boxstyle}
        inputStyles={{color:"black"}}
      />
      <View style={Style.textinputview}>
      <TextInput style={Style.placeholder1}  keyboardType='numeric' placeholder='Profit Amount'
            placeholderTextColor={"grey"}
          />
           <TextInput style={Style.placeholder1}  keyboardType='numeric' placeholder='Tax Deducted'
            placeholderTextColor={"grey"}
          />
      </View>
      <View style={Style.buttonview}>
        <TouchableOpacity style={Style.button1}>
          <Text style={Style.button1txt}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.button2}>
          <Text style={Style.button1txt}>View detail</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    <Button
     onPressBack={() => navigation.navigate('ProfitSaving')}
    />
    </View>
  )
}

export default GovtScheme;