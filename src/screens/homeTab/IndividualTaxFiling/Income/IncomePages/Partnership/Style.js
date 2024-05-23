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
    textinputview1:{
        alignItems: "center"
    },
    textinputview2:{
        alignItems: "center",
        marginTop:"5%"
    },
    inputcontainer:{
        width:"90%",
        backgroundColor:"white",
        borderWidth:1
    },
    txt1:{
        color:"black",
        fontSize:16,
        fontFamily:FontFamily.OpenSansSemiBold,
        textAlign:"center",
        marginTop:"20%",
     
    },
    view1:{
        flexDirection:"column",
        marginTop:"5%"
    },
    buttonview:{
        alignItems:"center",
        marginTop:"8%"
    },
    button1:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"firebrick",
        width:responsiveWidth(90),
        height:responsiveHeight(7),
        borderRadius:5
    },
    button1txt:{
        color:"white",
        textAlign:"center",
        fontSize:15,
        fontFamily:FontFamily.OpenSansSemiBold
    },
    button2:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"lightskyblue"
        ,width:responsiveWidth(90),
        height:responsiveHeight(7),
        borderRadius:5,
        marginTop:"5%"
    },
    button2txt:{
        color:"white",
        textAlign:"center",
        fontSize:15,
        fontFamily:FontFamily.OpenSansSemiBold

    }

});
export default Style;