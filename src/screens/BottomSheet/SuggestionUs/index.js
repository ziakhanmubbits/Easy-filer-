import { View, TextInput,Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import NewHeader from '../../NewHeader'
import FontFamily from '../../../assets/customFonts/customFonts'

const SuggestionUs = () => {
    return (
        <View style={styles.main}>
            <ScrollView style={styles.contntStyle}>
                <View style={styles.headerView}>
                    <NewHeader />
                </View>
                <View style={styles.messageinput}>
                    <TextInput placeholder='Enter your Message' multiline autoCapitalize='false' autoCorrect={false}/>
                </View>
                <View style={styles.btnview}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textStyle}>Message</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SuggestionUs

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    contntStyle: {
        flexGrow: 1
    },
    headerView: {
        height: responsiveScreenHeight(5)
    },
    messageinput: {
        height: responsiveScreenHeight(20),
        width: responsiveScreenWidth(90),
        borderWidth: 0.8,
        borderRadius: 5,
        borderColor: 'darkgray',
        alignSelf: "center",
        marginTop: '5%'
    },
    btn:{
        backgroundColor:'red',
        height: responsiveScreenHeight(5),
        width: responsiveScreenWidth(32),
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
        fontSize:16,
        color:'white',
        fontWeight:'700',
        fontFamily: FontFamily.OpenSansBold
    },
    btnview:{
        alignItems:'flex-end',
        marginTop:'5%',
        marginRight:'5%'
    }

})