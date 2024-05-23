import {StyleSheet} from 'react-native';

import React from 'react';
import {
    responsiveHeight,
    responsiveWidth
  } from 'react-native-responsive-dimensions'
import FontFamily from '../../../../../../assets/customFonts/customFonts';

const Style = StyleSheet.create({
    container:{
        flex:1,
    },
    input: {
        width: responsiveWidth(85),
        height: responsiveHeight(6),
        alignSelf: "center",
        alignItems: "center",
        marginTop: "5%",
      },
      dropdown: {
        height: 55,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width:responsiveWidth(80)
      },
      placeholder1: {
        paddingHorizontal:"3%",
        marginTop:"4%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"1%",
        width: responsiveWidth(90),
        borderRadius: 5,
        color:"black"
    },
    dropdown:{
        backgroundColor: "white" 
    },
    dropdowntxt:{
        color: "black"
    },
    boxstyle:{
        backgroundColor: "lightgrey", 
        width: responsiveWidth(90),
         color: "white",
          borderWidth: 2,
           borderColor: "black"
    },
    textinputview:{
        flexDirection:"column"
    },
    buttonview:{
        flexDirection:"row",
        marginTop:"3%"
    },
    button1:{
        backgroundColor:"firebrick",
        justifyContent:"center",
        width:responsiveWidth(44),
        height:responsiveHeight(6),
        borderRadius:3
    },
    button1txt:{
        color:"white",
        justifyContent:"center",
        textAlign:"center",
        fontFamily:FontFamily.OpenSansSemiBold,
    },
    button2:{
        backgroundColor:"dodgerblue",
        justifyContent:"center",
        width:responsiveWidth(44),
        height:responsiveHeight(6),
        borderRadius:3,
        marginLeft:"1.5%"
    },
    button2txt:{
        color:"white",
        justifyContent:"center",
        textAlign:"center",
        fontFamily:FontFamily.OpenSansSemiBold,
    },
   
  
});
export default Style;