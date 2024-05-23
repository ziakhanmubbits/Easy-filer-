import { View, Text,Image,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../Components/Index';

const data = [
  {
   id:"0",
   image:(require('../../../../../../assets/pictures/image26.png')),
   name:"Gain on Sales",
   name2:"of Property"
  },
  {
   id:"1",
   image:(require('../../../../../../assets/pictures/image27.png')),
   name:"Property",
   name2:"Rent"
  },
 ];

const numColumns=2;
const RentSale = () => {

  const navigation=useNavigation();
  function nav(id){
    {
      switch(id){
        case "0":
          navigation.navigate('Gain');
          break;
          case "1":
            navigation.navigate('PropertyRent');
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
      <View style={Style.flatlistview}>
      <Text style={Style.txt1}>{name}</Text>
      <Text style={Style.txt1}>{name2}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={Style.container}>
     <View style={Style.topview}>
      <Text style={Style.txt2}>Now lets start<Text style={Style.txt3}> looking at your income</Text></Text>
      <Text style={Style.txt4}>Select the sources of your income,you can select more than one </Text>
      <Text style={Style.txt4}>if applicable</Text>
     </View>
     <View style={Style.flatlist}>
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
export default RentSale;