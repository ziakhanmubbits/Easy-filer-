import {StyleSheet} from 'react-native';

import React from 'react';
import {
    responsiveHeight,
    responsiveWidth
  } from 'react-native-responsive-dimensions'
import FontFamily from '../../../../../../../assets/customFonts/customFonts';

const Style = StyleSheet.create({
    container:{
        flex:1,
    },
    view1:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:"10%"
    },
    txt:{
        color:"black",
        fontSize:18,
        fontFamily:FontFamily.OpenSansSemiBold,
       
    },
    textinputview:{
        flexDirection:"column",
        alignItems:"center",
    },
    placeholder1: {
        paddingHorizontal:"3%",
        marginTop:"4%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"2%",
        width: responsiveWidth(90),
        borderRadius: 5,
        color:"black",
        marginTop:"10%",
    },
  
});
export default Style;