import { View, Text,TextInput,Pressable,TouchableOpacity ,ScrollView } from 'react-native'
import React,{useState} from 'react'
import Style from './Style';
import { SelectList } from 'react-native-dropdown-select-list'
import Button from '../../../../../../Components/Index';
import { useNavigation } from '@react-navigation/native';


const data = [
    { key: '1', value: 'Advance Microf Finance bank Limited' },
    { key: '2', value: 'Al Barak Bank (Pakistan) Limited' },
    { key: '3', value: 'Allied Bank Limited' },
    { key: '4', value: 'APNA Micro Finance Bank Limited'},
    { key: '5', value: 'Askari Bank Limited' },
    { key: '6', value: 'Bank Al-Habib Limited' },
    { key: '7', value: 'Bank Alfalah Limited' },
    { key: '8', value: 'BankIslami Pakistan Limited' },
    { key: '9', value: 'Burj Bank Limited' },
  ]



const BankDeposit = () => {
  const navigation = useNavigation();

    const [selected, setSelected] = useState("");
  return (
    <View style={Style.container}>
      <ScrollView>
        <View style={Style.view1}>
            <Text style={Style.txt}>Bank Deposit</Text>
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
      <TextInput style={Style.placeholder1}  keyboardType='numeric' placeholder='Account No'
            placeholderTextColor={"grey"}
          />
           <TextInput style={Style.placeholder1}  keyboardType='numeric' placeholder='Profit Amount in PKR'
            placeholderTextColor={"grey"}
          />
           <TextInput style={Style.placeholder1}  keyboardType='numeric' placeholder='Tax deducted in PKR'
            placeholderTextColor={"grey"}
          />
      </View>
      <View style={Style.buttonview}>
        <TouchableOpacity style={Style.button1}>
          <Text style={Style.button1txt}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.button2}>
          <Text style={Style.button2txt}>View detail</Text>
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

export default BankDeposit;