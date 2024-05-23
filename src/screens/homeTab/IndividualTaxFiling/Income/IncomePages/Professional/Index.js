import { View, Text,Modal,TouchableOpacity,Pressable,FlatList,Image } from 'react-native'
import React, { useState }  from 'react'
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../Components/Index';
import { SmallText } from '../../../../../Components/Text';


const data = [
  {
   id:"0",
   image:(require('../../../../../../assets/pictures/image20.png')),
   name:"Doctor"
  },
  {
   id:"1",
   image:(require('../../../../../../assets/pictures/image21.png')),
   name:"Lawyer"
  },
  {
   id:"2",
   image:(require('../../../../../../assets/pictures/image22.png')),
   name:"Accountant"
  },
  {
   id:"3",
   image:(require('../../../../../../assets/pictures/image23.png')),
   name:"Engineer",
   name2:"Accountant"
  },
  {
   id:"4",
   image:(require('../../../../../../assets/pictures/image24.png')),
   name:"Coach/",
   name2:"Tuitor"
  },
  {
   id:"5",
   image:(require('../../../../../../assets/pictures/image25.png')),
   name:"Management/",
   name2:"Consultant"
  },
  {
   id:"6",
   image:(require('../../../../../../assets/pictures/image11.png')),
   name:"Other Profession",

  },
 ];
 
 


 const numColumns=4;
const Professional = () => {

  const [showModal,setShowModal]=useState(false)

  const navigation=useNavigation();
  function nav(id){
    {
      switch(id){
        case "0":
          navigation.navigate('Doctor');
          break;
          case "1":
            navigation.navigate('Lawyer');
            break;
            case "2":
              navigation.navigate('Accountant');
              break;
              case "3":
              navigation.navigate('Engineer');
              break;
              case "4":
                navigation.navigate('Trainer');
                break;
                case "5":
                  navigation.navigate('Management');
                  break;
                  case "6":
                    navigation.navigate('OtherProfession');
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
      <Text style={Style.txt1}>{name}</Text>
      <Text  style={Style.txt1}>{name2}</Text>
      </View>
      </TouchableOpacity>
  
    </View>
  );

  return (
    <View style={Style.container}>
    <View style={Style.topview}>
      <SmallText
      text={'Select your profession service'}
      style={Style.txt3}
      />
    </View>
    <View style={Style.modalview}>
        <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisiblle(!showModal);
            }}>
            <Pressable
              onPress={() => {
             setShowModal(false)

              }}
              style={Style.modalviewstyle}>
                <View style={Style.innercontainer}>
                <Text style={Style.modaltext1}>
                  Help
                </Text>
                <Text style={Style.modaltext2}>WITHHOLDING TAXES ON PAYMENT:</Text>
                <Text style={Style.modaltext3}>The Government has required certain persons to withhold taxes on payments against various transactions including sale of goods,rendering and execution on contracts.</Text>
              <Text style={Style.modaltext4}>Such withholding taxes are considerd as minimum tax while determining the final tax liability of the business on</Text>
              <Text style={Style.modaltext5}>net-income basis.</Text>
              </View>
            </Pressable>
          </Modal>
        </View>
        <TouchableOpacity style={Style.touchablestyle} onPress={()=>setShowModal(true)}>
          <Text style={Style.touchabletext}>Need further clarification on this category?Click here</Text>
        </TouchableOpacity>
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
    onPressBack={()=>navigation.navigate('Income')}
    />
    </View>
  )
}

export default Professional;
