import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import FontFamily from '../../../assets/customFonts/customFonts'



const filesList2 = [
    {
        id: '1',
        name: 'Sole Proprietor',
        title: 'NTN',
        icn: <Fontisto name='person' size={35} color={"#EB0414"} />
    },
    {
        id: '2',
        name: 'AOP',
        title: 'Partnership NTN',
        icn: <Ionicons name='people' size={35} color={"#EB0414"} />
    },
    {
        id: '3',
        name: 'Add Business to',
        title: 'NTN',
        icn: <MaterialCommunityIcons name='briefcase-plus' size={35} color={"#EB0414"} />
    },
    {
        id: '4',
        name: 'Remove Business',
        title: 'from NTN',
        // icn: <MaterialCommunityIcons name='briefcase-remove' size={35} color={"#EB0414"} />
    },
]

const ItemList1 = () => {

    // const [array,setArray]=useState([])

    // Const getData=async()=>{
        
    // }

    const navigation = useNavigation();
    const CallingPage = (id) => {
        console.log('Pressed', id)
        if (id === 0){
            console.log('id',id)
            navigation.navigate('NtnRegistrationAOP')
        }else if(id === 1){
            console.log('id',id)
            navigation.navigate('NtnRegistrationSole')
        }else if(id === 2){
            console.log('id',id)
            navigation.navigate('AddBusinessToNTN')
        }else if(id === 3){
            console.log('id',id)
            navigation.navigate('RemoveBusinessToNTN')
        }
    }
    return (
        <View style={styles.main}>
            <View style={styles.txtview}>
                <Text style={styles.txt}>Primary Occupation / Source of Income</Text>
            </View>
            <View>
                <ScrollView contentContainerStyle={styles.cntntstyle}>
                    <View style={styles.listview}>
                        {filesList2.map((files, id) => {
                            return (
                                <TouchableOpacity key={id} onPress={() => CallingPage(id)}>
                                    <View style={styles.filesview}>
                                        <Text>{files.icn}</Text>
                                        <Text style={styles.item}>{files.name}</Text>
                                        <Text style={styles.item1}>{files.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}

export default ItemList1
const styles = StyleSheet.create({
    mian: {
        flex: 1
    },
    txtview: {
        marginLeft: '10%',
        marginTop: '2%',
    },
    txt: {
        fontSize: responsiveFontSize(2),
        color: "black",
        fontWeight: "500"
    },
    filesview: {
        backgroundColor: "gainsboro",
        height: responsiveHeight(12),
        width: responsiveWidth(20),
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "5%",

    },
    item: {
        color: 'black',
        fontFamily: FontFamily.OpenSansBold,
        alignSelf: "center",
        fontSize: responsiveFontSize(1.2),
        marginTop: '13%'
    },
    item1: {
        color: 'black',
        fontFamily: FontFamily.OpenSansBold,
        alignSelf: "center",
        fontSize: responsiveFontSize(1.2),
        bottom: '2%'
    },
    listview: {
        flexDirection: "row",
        marginTop: '3%',
        marginLeft: "2%",
        width: responsiveWidth(90)
    },
    cntntstyle: {
        flexGrow: 1
    }
})