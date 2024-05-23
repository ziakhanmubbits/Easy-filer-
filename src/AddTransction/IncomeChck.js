import { View, Text,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import IncomeStyle from './IncomeStyle'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const IncomeChck = () => {
  const navigation = useNavigation();
    const IncomeList = [
      {
        id: '1',
        title: 'Salary',
        img: <Ionicons name='briefcase' size={35} color={'red'}/>
      },
      {
        id: '2',
        title: 'Rent Income',
        img: <Ionicons name='home' size={35} color={'red'}/>
      },
      {
        id: '3',
        title: 'Car Sale',
        img: <Ionicons name='car' size={35} color={'red'}/>
      },
      {
        id: '4',
        title: 'Freelance',
        img: <Ionicons name='laptop-outline' size={35} color={'red'}/>
      },
      {
        id: '5',
        title: 'Real Estate',
        img: <Ionicons name='home' size={35} color={'red'}/>
      },
      {
        id: '6',
        title: 'Commission',
        img: <MaterialCommunityIcons name='brightness-percent' size={35} color={'red'}/>
      },
      {
        id: '7',
        title: 'Bonus',
        img:  <MaterialCommunityIcons name='home-analytics' size={35} color={'red'}/>
      },
      {
        id: '8',
        title: 'Stocks',
        img:  <MaterialCommunityIcons name='signal-cellular-2' size={35} color={'red'}/>
      },
      {
        id: '9',
        title: 'Friendly Business',
        img:  <Entypo name='users' size={35} color={'red'}/>
      },
      {
        id: '10',
        title: 'Investment',
        img: <MaterialCommunityIcons name='floor-lamp-dual' size={35} color={'red'}/>
      },
      {
        id: '11',
        title: 'Other Income',
        img: <FontAwesome name='money' size={35} color={'red'}/>
      },
    ]

    const onSelect = (id) => {
      if (id === 0) { navigation.navigate('Salary1') }
      else if (id === 1) { navigation.navigate('RentalIncome1') } 
      else if (id === 2) { navigation.navigate('Carsale') } 
      else if (id === 3) { navigation.navigate('Freelance') } 
      else if (id === 4) { navigation.navigate('RealEstate') } 
      else if (id === 5) { navigation.navigate('Commission') }
      else if (id === 6) { navigation.navigate('Bonus') } 
      else if (id === 7) { navigation.navigate('Stocks') } 
      else if (id === 8) { navigation.navigate('FriendlyBusiness') } 
      else if (id === 9) { navigation.navigate('Investment') } 
      else if (id === 10) { navigation.navigate('OtherIncome1') }
      else{
       console.log('wrong input')
      } 
    }
  return (
    <View style={{flex:1,backgroundColor:"#FFF"}}>
     <View>
        <ScrollView style={IncomeStyle.contentStyle}>
          <View style={IncomeStyle.listview}>
            {
              IncomeList.map((nameInList, id) => {
                return (
                  <TouchableOpacity key={id} onPress={()=> onSelect(id)}>
                    <View style={IncomeStyle.filesview}>  
                      <Text>{nameInList.img}</Text>
                      <Text style={IncomeStyle.textlist}>{nameInList.title}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default IncomeChck