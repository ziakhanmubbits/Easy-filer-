import {StyleSheet} from 'react-native';

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
    imageview:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:"25%"
      },
      image: {
        height:responsiveHeight(6),
        width:responsiveWidth(12)
       
      },
      placeholder1view:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginTop:"2%"
      },
      placeholder1: {
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"1%",
        width: responsiveWidth(50),
        borderRadius: 5,
        color:"black"
    },
    textinputview2:{
      marginTop:"1%"
    },
    textinputview2style:{
      color:"black",
      margin:"2%",
   
    },
    placeholder2view:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      
    },
    hideview:{
      height:responsiveHeight(5), 
      marginTop:"5%",
      flexDirection:"row",  
      justifyContent:"space-between"
    },
    text5:{
      color:"black",
      margin:"2%",
      fontSize:14,
   
    },
    text6:{
      left:"3%",
      color:"black",
      fontSize:14,

    },
    text7:{
      left:"3%",
      color:"black",
      fontSize:14,
      
    },
    text8:{
      left:"3%",
      marginTop:"3%",
      color:"black",
      fontSize:14,
     
    },
    innercontainer:{
        width:responsiveWidth(95),
        height:responsiveHeight(10),
        backgroundColor:"white",
        alignItems:"center",
        borderRadius:10,
        padding:"1%"

    },
    txt1:{
      color:"black",
      fontSize:responsiveScreenFontSize(2.5),
      fontFamily:FontFamily.OpenSansSemiBold,
      marginTop:"3%"
    },
    txt2:{
      color:"black",
      fontSize:responsiveScreenFontSize(2.2),
      fontFamily:FontFamily.OpenSansRegular,
      marginTop:"3%"
    },
    backgroundview:{
      justifyContent: "center",
       alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
         flex: 1
    },
    modaltxt1:{
      color: "black",
      fontSize:responsiveScreenFontSize(2),
       fontFamily:FontFamily.OpenSansSemiBold,

    },
    modaltxt2:{
      color: "black",
      fontSize:responsiveScreenFontSize(1.5),
        textAlign:"center",
        fontFamily:FontFamily.OpenSansRegular,
        marginTop:"2%" 
    },
    modaltxt3:{
      color: "black",
      fontSize:responsiveScreenFontSize(1.5),
        fontFamily:FontFamily.OpenSansRegular,
        textAlign:"center",
    }


});
export default Style;