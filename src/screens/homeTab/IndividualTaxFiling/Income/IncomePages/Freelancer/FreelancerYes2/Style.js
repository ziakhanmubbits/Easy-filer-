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
    text:{
        color:"black",
         marginTop:"10%",
        fontSize:16,
        fontFamily:FontFamily.OpenSansRegular,
        left:"4%"   
    },
    text1:{
        color:"black",
        marginTop:"4%",
        fontSize:16,
        fontFamily:FontFamily.OpenSansRegular,
        left:"4%"
    },
    text2:{
        color:"black",
        fontSize:13,
        fontWeight:"500",
        left:"4%",
        marginTop:"5%"
    },
    text0:{
        color:"black",
        fontFamily:FontFamily.OpenSansRegular,
        fontSize:12,
        fontWeight:"400",
        left:"4%",
    },
    placeholder: {
        paddingHorizontal:"3%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"1%",
        marginLeft:"4%",
        width: responsiveWidth(35),
        borderRadius: 5,
        color:"black",
        marginTop:"1%"
    },
    placeholder1: {
        paddingHorizontal:"3%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"1%",
        marginLeft:"4%",
        width: responsiveWidth(35),
        borderRadius: 5,
        color:"black",
        marginTop:"1%"
    },
    placeholder2: {
        paddingHorizontal:"3%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"1%",
        marginLeft:"2%",
        width: responsiveWidth(27),
        borderRadius: 5,
        color:"black"
    },
    touchableview:{
        alignItems:"center",
        marginTop:"3%"
    },
    touchable:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"gainsboro",
        width:responsiveWidth(94),
        padding:"2%",
        borderRadius:3
    },
    touchabletext:{
        color:"black",
        fontWeight:"500",
        fontSize:16,
        fontFamily:FontFamily.OpenSansRegular,
         
    },
    innerplaceholder1: {
        paddingHorizontal:"2%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"0.3%",
        marginTop:"1.5%",
        width: responsiveWidth(45),
        borderRadius: 5,
        color:"black"
    },
    innerplaceholder2: {
        paddingHorizontal:"2%",
        borderWidth: 1.5,
        marginTop:"3%",
        borderColor: "grey",
        padding:"0.3%",
        marginTop:"1.5%",
        width: responsiveWidth(45),
        borderRadius: 5,
        color:"black"
    },
    touchablebutton: {
        padding:"1%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red",
         width: responsiveWidth(15),
        borderRadius: 5,
        color:"black"
    },
    bottomplaceholder1: {
        paddingHorizontal:"3%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"1%",
        width: responsiveWidth(40),
        borderRadius: 5,
        color:"black"
    },
    bottomplaceholder2: {
        paddingHorizontal:"3%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"1%",
        marginHorizontal:"2%",
        width: responsiveWidth(35),
        borderRadius: 5,
        color:"black"
    },
    view2:{
        flexDirection: "row",
        //  marginTop: "2%"
    },
    hiddenview:{
        width: responsiveWidth(100)
    },
    hiddenview1:{
        marginTop: "3%",
         marginLeft: "5%"
    },
    hiddenview1text:{
        color: "black", 
        fontSize: 15,
         fontWeight: "bold",
         fontFamily:FontFamily.OpenSansRegular

    },
    hiddenview1text2:{
        color: "black",
         fontSize: 15, 
         marginTop: "2%",
         fontFamily:FontFamily.OpenSansRegular
    },
    newdisplaytext:{
        color:"black",
        left:"3%",
        marginTop:"1%",
        fontFamily:FontFamily.OpenSansRegular
    },
    newdisplayview1:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:"1%"
    },
    newdisplaytext3:{
        color:"black",
        fontWeight:"500",
        fontFamily:FontFamily.OpenSansRegular
    },
    newdisplayview2:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:"1%"
    },
    newdisplayview3:{
        flexDirection:"row",
        marginTop:"1%",
      marginLeft:"3%"
    },
    newdisplaytext0:{
        color:"black",
       fontSize:13,
        fontFamily:FontFamily.OpenSansRegular
    },
    hiddenview0:{
        marginTop: "1%",
         marginLeft: "5%" 
    },
    bottomview:{
        flexDirection: "row", 
        justifyContent: "center", 
        marginTop: "3%"
    }
   
  

});
export default Style;