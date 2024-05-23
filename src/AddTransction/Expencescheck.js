import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ExpenceStyle from './ExpenceStyle'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Expencescheck = () => {
  const expensesList = [
    {
      id: '1',
      title: 'Utilities',
      img: <FontAwesome5 name='charging-station' size={35} color={'red'} />
    },
    {
      id: '2',
      title: 'Food & Drinks',
      img: <MaterialCommunityIcons name='food-fork-drink' size={35} color={'red'} />
    },
    {
      id: '3',
      title: 'Education',
      img: <FontAwesome5 name='book-open' size={35} color={'red'} />
    },
    {
      id: '4',
      title: 'Medical',
      img: <MaterialCommunityIcons name='pill' size={35} color={'red'} />
    },
    {
      id: '5',
      title: 'Rent Paid',
      img: <MaterialCommunityIcons name='home-analytics' size={35} color={'red'} />
    },
    {
      id: '6',
      title: 'Fuel',
      img: <MaterialCommunityIcons name='fuel' size={35} color={'red'} />
    },
    {
      id: '7',
      title: 'Grocery',
      img: <MaterialCommunityIcons name='cart-variant' size={35} color={'red'} />
    },
    {
      id: '8',
      title: 'Transport',
      img: <MaterialCommunityIcons name='car' size={35} color={'red'} />
    },
    {
      id: '9',
      title: 'Shopping',
      img: <MaterialCommunityIcons name='tshirt-crew' size={35} color={'red'} />
    },
    {
      id: '10',
      title: 'Loan Paid',
      img: <FontAwesome5 name='hand-holding-usd' size={35} color={'red'} />
    },
    {
      id: '11',
      title: 'Donation',
      img: <MaterialCommunityIcons name='hand-coin' size={35} color={'red'} />
    },
    {
      id: '12',
      title: 'Committee',
      img: <MaterialCommunityIcons name='briefcase-plus' size={35} color={'red'} />
    },
    {
      id: '13',
      title: 'Car Service',
      img: <MaterialCommunityIcons name='car-settings' size={35} color={'red'} />
    },
    {
      id: '14',
      title: 'Bills',
      img: <MaterialCommunityIcons name='notebook-edit' size={35} color={'red'} />
    },
    {
      id: '15',
      title: 'House Service',
      img: <MaterialCommunityIcons name='greenhouse' size={35} color={'red'} />
    },
    {
      id: '16',
      title: 'Gifts',
      img: <MaterialCommunityIcons name='gift' size={35} color={'red'} />
    },
    {
      id: '17',
      title: 'Travel',
      img: <MaterialCommunityIcons name='airplane' size={35} color={'red'} />
    },
    {
      id: '18',
      title: 'Investment',
      img: <MaterialCommunityIcons name='floor-lamp-dual' size={35} color={'red'} />
    },
    {
      id: '19',
      title: 'Joy & Fun',
      img: <MaterialCommunityIcons name='camera-gopro' size={35} color={'red'} />
    },
    {
      id: '20',
      title: 'Family',
      img: <FontAwesome5 name='users' size={35} color={'red'} />
    },
    {
      id: '21',
      title: 'Health & Fitness',
      img: <Ionicons name='fitness' size={35} color={'red'} />
    },
    {
      id: '22',
      title: 'Mobile Bill',
      img: <MaterialCommunityIcons name='cellphone-cog' size={35} color={'red'} />
    },
    {
      id: '23',
      title: 'Wedding',
      img: <MaterialCommunityIcons name='cake-layered' size={35} color={'red'} />
    },
    {
      id: '24',
      title: 'Electronics',
      img: <MaterialCommunityIcons name='switch' size={35} color={'red'} />
    },
    {
      id: '25',
      title: 'Installment',
      img: <FontAwesome5 name='hand-holding-usd' size={35} color={'red'} />
    },
    {
      id: '26',
      title: 'Insurance',
      img: <FontAwesome5 name='users' size={35} color={'red'} />
    },
    {
      id: '27',
      title: 'Other Expences',
      img: <MaterialCommunityIcons name='hand-coin' size={35} color={'red'} />
    },
  ]

  const onSelect = (id) => {
    if (id === 0) { navigation.navigate('UtilitiesExp') }
    else if (id === 1) { navigation.navigate('FoodDrink') }
    else if (id === 2) { navigation.navigate('Education2') }
    else if (id === 3) { navigation.navigate('MedicalExp') }
    else if (id === 4) { navigation.navigate('RentPaidExp') }
    else if (id === 5) { navigation.navigate('FuelExp') }
    else if (id === 6) { navigation.navigate('GroceryExp') }
    else if (id === 7) { navigation.navigate('Transport') }
    else if (id === 8) { navigation.navigate('Shopping') }
    else if (id === 9) { navigation.navigate('LoadPaid') }
    else if (id === 10) { navigation.navigate('Donation') }
    else if (id === 11) { navigation.navigate('Committee') }
    else if (id === 12) { navigation.navigate('CarServices2') }
    else if (id === 13) { navigation.navigate('Bills') }
    else if (id === 14) { navigation.navigate('HouseService') }
    else if (id === 15) { navigation.navigate('Gifts') }
    else if (id === 16) { navigation.navigate('Travel') }
    else if (id === 17) { navigation.navigate('InvestmentExp') }
    else if (id === 18) { navigation.navigate('Joyfun') }
    else if (id === 19) { navigation.navigate('Family') }
    else if (id === 20) { navigation.navigate('HealthFitness') }
    else if (id === 21) { navigation.navigate('MobileBillExp') }
    else if (id === 22) { navigation.navigate('Wedding') }
    else if (id === 23) { navigation.navigate('Electronics') }
    else if (id === 24) { navigation.navigate('Installment') }
    else if (id === 25) { navigation.navigate('Insurance') }
    else if (id === 26) { navigation.navigate('OtherExpences2') }
    else {
      console.log('error')
    }
  }
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View>
        <ScrollView style={ExpenceStyle.contentStyle}>
          <View style={ExpenceStyle.listview}>
            {
              expensesList.map((nameInList, id) => {
                return (
                  <TouchableOpacity key={id} onPress={() => onSelect(id)}>
                    <View style={ExpenceStyle.filesview}>
                      <Text>{nameInList.img}</Text>
                      <Text style={ExpenceStyle.textlist}>{nameInList.title}</Text>
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

export default Expencescheck