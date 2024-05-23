import { View, Text,TouchableOpacity,FlatList,Image } from 'react-native'
import React from 'react'
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../Components/Index';



const data = [
  {
   id:"0",
   image:(require('../../../../../../../src/assets/pictures/image12.png')),
   name:"Dividend",

  },
  {
   id:"1",
   image:(require('../../../../../../../src/assets/pictures/image11.png')),
   name:"Capital Gain",
  },
 ];

 const numColumns=2;

const DividendGain = () => {
  const navigation=useNavigation();
  function nav(id){
    {
      switch(id){
        case "0":
          navigation.navigate('Dividend');
          break;
          case "1":
            navigation.navigate('CapitalGain');
            break;
          default:
      }
    }
  }

  const Item = ({image,name,name2,id }) => (
    <View style={Style.item}>
      <TouchableOpacity  onPress={()=>nav(id)}>
        <View style={{alignItems:"center"}}>
        <Image style={Style.image} source={image} />
        </View>
     
      <View style={Style.view1}>
      <Text style={Style.view1txt}>{name}</Text>
      <Text style={Style.view1txt2}>{name2}</Text>
      </View>
      </TouchableOpacity>
  
    </View>
  );
  return (
    <View style={Style.container}>
      <View style={Style.view2}>
        <Text style={Style.view2txt}>Now let's start<Text style={Style.view2txt2}> looking at your income</Text></Text>
        <Text style={Style.view2txt3}>Select the sources of your income,you can select more than once</Text>
        <Text style={Style.view2txt3}>if applicable</Text>
      </View>
      <View style={Style.view3}>
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
 
export default DividendGain;