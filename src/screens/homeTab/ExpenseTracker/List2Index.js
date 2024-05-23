import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import List2Style from './List2Style'
import { useNavigation } from '@react-navigation/native'

const listFiles = [
    {
        id:'1',
        name: 'Utilities',
        icn: <MaterialCommunityIcons name='home-battery' size={40} color={"#EB0414"} />,
    },
    {
        id:'2',
        name: 'Food &',
        title:'Drinks',
        icn: <MaterialCommunityIcons name='food-fork-drink' size={40} color={"#EB0414"} />,
    },
    {
        id:'3',
        name: 'Education',
        icn: <MaterialCommunityIcons name='book-open-variant' size={40} color={"#EB0414"} />,
    },
    {
        id:'4',
        name: 'Fuel',
        icn: <MaterialCommunityIcons name='fuel' size={40} color={"#EB0414"} />,
    },
    {
        id:'5',
        name: 'Grocery',
        icn: <Ionicons name='cart' size={40} color={"#EB0414"} />,
    },
    {
        id:'6',
        name: 'Medical',
        icn: <FontAwesome5 name='toolbox' size={35} color={"#EB0414"} />,
    },
    {
        id:'7',
        name: 'Car',
        title:'Services',
        icn: <MaterialCommunityIcons name='car-back' size={37} color={"#EB0414"} />,
    },
    {
        id:'8',
        name: 'Mobile',
        title:'Bills',
        icn: <Entypo name='mobile' size={35} color={"#EB0414"} />,
    },
    {
        id:'9',
        name: 'Other',
        title:'Expences',
        icn: <MaterialCommunityIcons name='hand-heart' size={40} color={"#EB0414"} />,
    }
]

const List2Index = () => {
    const navigation= useNavigation()
    const onSelect = (id) => {
        if (id === 0) {
            navigation.navigate('Utilities')
        } else if (id === 1) {
            navigation.navigate('FoodDrinks')
        } else if (id === 2) {
            navigation.navigate('Education')
        }else if (id === 3) {
            navigation.navigate('Fuel')
        }else if (id === 4) {
            navigation.navigate('Grocery')
        }else if (id === 5) {
            navigation.navigate('Medical')
        }else if (id === 6) {
            navigation.navigate('CarServices')
        }else if (id === 7) {
            navigation.navigate('MobileBill')
        }else if (id === 8) {
            navigation.navigate('OtherExpence')
        }
    }
    return (
        <View>
            <View style={List2Style.txtview}>
                <Text style={List2Style.txt}>Expences</Text>
            </View>
            <View>
            <View style={List2Style.listview}>
                    {listFiles.map((list ,id) => {
                        return (
                            <TouchableOpacity key={id} onPress={() => onSelect(id)}>
                                <View style={List2Style.filesview}>
                                    <Text>{list.icn}</Text>
                                    <Text style={List2Style.item}>{list.name}</Text>
                                    <Text style={List2Style.title}>{list.title}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </View>
    )
}

export default List2Index
