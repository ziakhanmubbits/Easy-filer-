import { View, Text,FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../Components/Index';


const data = [
  {
   id:"0",
   image:(require('../../../../../../assets/pictures/image28.png')),
   name:"Bank",
   name2:"Deposit"
  },
  {
   id:"1",
   image:(require('../../../../../../assets/pictures/image29.png')),
   name:"Govt",
   name2:"Scheme"
  },
  // {
  //  id:"2",
  //  image:(require('../../pictures/image30.png')),
  //  name:"Behbood"
  // },
  // {
  //  id:"3",
  //  image:(require('../../pictures/image31.png')),
  //  name:"Pensioner",
  //  name2:"Benefits"
  // },
 ];


 const numColumns=4;

const ProfitSaving = () => {

  const navigation=useNavigation();
  function nav(id){
    {
      switch(id){
        case "0":
          navigation.navigate('BankDeposit');
          break;
          case "1":
            navigation.navigate('GovtScheme');
            break;      
          default:
      }
    }
  }

  const Item = ({image,name,name2,id }) => (
    <View style={Style.item}>
      <TouchableOpacity onPress={()=>nav(id)}>
        <View style={{alignItems:"center"}}>
        <Image style={Style.image} source={image} />
        </View>
     
      <View style={Style.txtview}>
      <Text style={Style.txt4}>{name}</Text>
      <Text  style={Style.txt4}>{name2}</Text>
      </View>
      </TouchableOpacity>
  
    </View>
  );

  return (
    <View style={Style.container}>
      <View style={Style.view1}>
        <Text style={Style.txt1}>Now let's start <Text style={Style.txt2}>Profit On Saving</Text></Text>
        <Text style={Style.txt3}>Select the sorce of your income,you can select more than one</Text>
        <Text style={Style.txt3}>if applicable</Text>
      </View>
      <View style={{alignItems:"center",marginTop:"5%"}}>
    <FlatList
      data={data}
      renderItem={({item})=> <Item name={item.name} image={item.image}  name2={item.name2} onPress={() => setSelectedId(item.id)} id={item.id}/> }
      keyExtractor={(item, index) => {
        return item.id;
      }}
      numColumns={numColumns}
    />
    </View>
    <Button
      onPressBack={() => navigation.navigate('Inc')}
    />
    </View>
  )
}

export default ProfitSaving;