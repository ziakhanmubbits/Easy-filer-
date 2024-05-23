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
    placeholder: {
        paddingHorizontal:"3%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"1%",
        width: responsiveWidth(90),
        borderRadius: 5,
        color:"black"
    },
    view1:{
        alignItems:"center",
        marginTop:"10%"
    },
    txt1:{
        color:"black",
        fontSize:17,
        fontFamily:FontFamily.OpenSansRegular
    },
    txt2:{
        color:"black",
        fontFamily:FontFamily.OpenSansSemiBold
    },
    txt3:{
        color:"black",
        fontSize:14,
        fontFamily:FontFamily.OpenSansRegular
    },
    view2:{
        marginTop:"5%"
    },
    view2txt:{
        color:"black",
        marginLeft:"5%",
        fontSize:20,
        fontFamily:FontFamily.OpenSansRegular
        
    },
    view2txt1:{
        color:"black",
        marginLeft:"5%",
        fontSize:19.5,
        fontFamily:FontFamily.OpenSansRegular
        
    },
    view3:{
        alignItems:"center",
        marginTop:"2%"
    },
    view4:{
        marginTop:"2%"
    }
   
   
});
export default Style;