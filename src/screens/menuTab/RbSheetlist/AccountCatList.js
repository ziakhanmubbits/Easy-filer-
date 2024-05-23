import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import FontFamily from '../../../assets/customFonts/customFonts';




const AccountCategoriesList = () => {
    const [accountList, setAccountList] = useState([
        {
            id: '1',
            title: 'abcdefghij'
        },
        {
            id: '2',
            title: 'klmnopqrs'
        },
        {
            id: '3',
            title: 'azaasasse'
        },
    ])
    const onSelect = ind => {
        const tempdata = []
        accountList.map((item, id) => {
            if (id == ind) {
                tempdata.push(true)
            } else {
                tempdata.push(false)
            }
        })
        setAccountList(tempdata)
    }

    return (
        <View>
            {
                accountList.map((item, id) => {
                    return (
                        <View key={id} >
                            <TouchableOpacity style={{flexDirection:'row'}} onPress={() => onSelect(id)}>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: 'red',
                                    borderRadius: 10,
                                    marginVertical: 8,
                                    marginHorizontal: 16,
                                    width: responsiveScreenWidth(20),
                                    alignItems: 'center',
                                    justifyContent: "center",
                                }}>
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default AccountCategoriesList

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    itemww: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        width: responsiveScreenWidth(20),
        alignItems: 'center',
        justifyContent: "center",
    },
    title: {
        fontSize: 16,
        fontFamily: FontFamily.OpenSansBold
    },
})