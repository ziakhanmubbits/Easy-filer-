import {StyleSheet} from 'react-native';
import React from 'react';
import {
    responsiveHeight,
    responsiveScreenFontSize,
    responsiveWidth
  } from 'react-native-responsive-dimensions'
import FontFamily from '../../../../../../assets/customFonts/customFonts';


const Style = StyleSheet.create({
    container:{
        flex:1,
    },
    modalview:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:"5%"
    },
    modalviewstyle:{
        justifyContent: "center",
         alignItems: "center",
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
          flex: 1
    },
    modaltext1:{
        color: "black",
         fontWeight: "bold",
         textAlign:"center",
         marginTop:"1%",
         fontFamily:FontFamily.OpenSansRegular
    },
    modaltext2:{
        color: "black",
          fontSize: 10,
          textAlign:"center",
          fontFamily:FontFamily.OpenSansRegular
    },
   
    touchablestyle:{
        borderBottomWidth:1,
        borderColor:"red"
    },
    touchabletext:{
        color:"black",
        fontSize:14,
        fontFamily:FontFamily.OpenSansRegular
    },
    innercontainer:{
        width:responsiveWidth(95),
        height:responsiveHeight(20),
        backgroundColor:"white",
        // alignItems:"center",
        borderRadius:10,
        padding:"1%"

    },
    touchable1view:{
        justifyContent:"center",
        alignItems:"center",
         marginTop:"10%"
    },
    touchable1viewstyle:{
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:"3%",
        width:responsiveWidth(25),borderRadius:10
    },
    touchable1text:{
        marginLeft:"5%"
    },
    touchable1text1:{
        color:"black",
        fontFamily:FontFamily.OpenSansRegular
        
    },
    touchable1text2:{
        color:"black",
        textAlign:"center",
         
    },
    view1:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:"10%"
    },
    txt1:{
        color:"black",
        fontSize:responsiveScreenFontSize(1.9),
        textAlign:"center",
        fontFamily:FontFamily.MONTSERRAT_Light
    },
    txt2:{
        color:"black",
        fontSize:responsiveScreenFontSize(2),
        textAlign:"center",
        fontFamily:FontFamily.MONTSERRAT_Light
    },
    txt3:{
        color:"black",
        fontSize:responsiveScreenFontSize(2),
        textAlign:"center",
        fontFamily:FontFamily.MONTSERRAT_Light
    },
    buttonstyle:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        margin:"10%"
    },
    innerView: {
        height: responsiveHeight(7),
        width: responsiveWidth(100),
        borderBottomWidth: 1,
        borderBottomColor: "#EBE2E2",
        backgroundColor: "#F5F5F5",
        flexDirection: "row"
      },
});
export default Style;
