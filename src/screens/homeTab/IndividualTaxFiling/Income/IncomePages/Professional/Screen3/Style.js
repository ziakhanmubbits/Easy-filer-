import {StyleSheet} from 'react-native';
import React from 'react';
import {
    responsiveHeight,
    responsiveWidth
  } from 'react-native-responsive-dimensions'

const Style = StyleSheet.create({
    container:{
        flex:1,
    },
    text1:{
        color:"black",
        marginTop:"10%",
        fontSize:16,
        left:"4%"
    },
    text2:{
        color:"black",
        fontSize:14,
        left:"4%",
        marginTop:"5%",
        fontWeight:"500"
    },
    placeholder1: {
        paddingHorizontal:"3%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"1%",
        marginLeft:"4%",
        width: responsiveWidth(35),
        borderRadius: 5,
        color:"black"
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
    placeholder3: {
        paddingHorizontal:"3%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"1%",
        marginLeft:"4%",
        width: responsiveWidth(35),
        borderRadius: 5,
        color:"black",
        marginTop:"2%"
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
        fontSize:16
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
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"1%",
        width: responsiveWidth(40),
        borderRadius: 5,
        color:"black"
    },
    bottomplaceholder2: {
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
         marginTop: "2%"
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
         fontWeight: "bold"

    },
    hiddenview1text2:{
        color: "black",
         fontSize: 15, 
         marginTop: "2%"
    },
    newdisplaytext:{
        color:"black",
        left:"3%",
        marginTop:"1%"
    },
    newdisplayview1:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:"1%"
    },
    newdisplaytext3:{
        color:"black",
        fontWeight:"500"
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
    }
   
  

});
export default Style;