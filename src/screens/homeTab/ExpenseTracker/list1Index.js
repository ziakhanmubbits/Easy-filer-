import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo';
import ListStyle from './ListStyle';
const listFiles = [
    {
        id: '1',
        name: 'Salary',
        icn: <Entypo name='folder' size={35} color={"#EB0414"} />
    },
    {
        id: '2',
        name: 'Home',
        title: 'Income',
        icn: <FontAwesome name='home' size={35} color={"#EB0414"} />
    },
    {
        id: '3',
        name: 'Other',
        title: 'Income',
        icn: <Foundation name='dollar-bill' size={45} color={"#EB0414"} />
    }
]

const List1Index = () => {
    const navigation = useNavigation();

    const onSelect = (id) => {
        console.log('your are in :', id, 'index')
        if (id === 0) {
           navigation.navigate('SalaryExpen')
        } else if (id === 1) {
            navigation.navigate('HomeIncomeExpence')
        } else if (id === 2) {
            navigation.navigate('OtherIncomeExpence')
        }
    }
    return (
        <View>
            <View style={ListStyle.txtview}>
                <Text style={ListStyle.txt}>Income</Text>
            </View>
            <View>
                <View style={ListStyle.listview}>
                    {listFiles.map((list, id) => {
                        return (
                            <TouchableOpacity key={id} onPress={() => onSelect(id)}>
                                <View style={ListStyle.filesview}>
                                    <Text style={ListStyle.icn}>{list.icn}</Text>
                                    <Text style={ListStyle.item}>{list.name}</Text>
                                    <Text style={ListStyle.title}>{list.title}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </View>
    )
}

export default List1Index
