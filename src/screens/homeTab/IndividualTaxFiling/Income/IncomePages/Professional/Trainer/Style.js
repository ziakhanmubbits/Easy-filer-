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
         fontWeight: "600",
         textAlign:"center"
    },
    modaltext2:{
        color: "black",
         fontWeight: "400",
          fontSize: 12.5,
          textAlign:"center"
    },
    modaltext3:{
        color: "black",
         fontWeight: "400",
          fontSize: 12.5,
          textAlign:"center"
    },
    modaltext4:{
        color: "black",
         fontWeight: "400", 
         fontSize: 12.5,
         marginTop:"2%",
         textAlign:"center" 
    },
    modaltext5:{
        color: "black",
         fontWeight: "400",
          fontSize: 12.5,
          textAlign:"center" 
    },
    touchablestyle:{
        borderBottomWidth:1,
        borderColor:"red"
    },
    touchabletext:{
        color:"black",
        fontSize:15
    },
    innercontainer:{
        width:responsiveWidth(95),
        height:responsiveHeight(22),
        backgroundColor:"white",
        // alignItems:"center",
        borderRadius:10,
        padding:"1%"

    },
    touchable1view:{
        justifyContent:"center",
        alignItems:"center",
         marginTop:"10%",
    
    },
    touchable1viewstyle:{
        backgroundColor:"white",
        flexDirection:"row",
        padding:"3%",
        width:responsiveWidth(85),borderRadius:10
    },
    touchable1text:{
        marginLeft:"5%"
    },
    touchable1text1:{
        color:"black",
         
    },
    touchable1text2:{
        color:"black",
        textAlign:"center",
         
    },
    touchable2view:{
        justifyContent:"center",
        alignItems:"center",
          marginTop:"10%"
    },
    touchable2viewstyle:{
        backgroundColor:"white",
        flexDirection:"row",
        padding:"3%",
        width:responsiveWidth(85),borderRadius:10
    },
    touchable2text:{
        marginLeft:"5%"
    },
    touchable2text1:{
        color:"black",textAlign:"center", 
    },
    touchable2text2:{
        color:"black",
        textAlign:"center",
         
    },
    touchable3view:{
        justifyContent:"center",
        alignItems:"center",
         marginTop:"10%"
    },
    touchable3viewstyle:{
        backgroundColor:"white",
        flexDirection:"row",
        padding:"3%",
        width:responsiveWidth(85),
        borderRadius:10
    },
    touchable3text:{
        marginLeft:"5%"
    },
    touchable3text1:{
        color:"black",
         
    },
    touchable3text2:{
        color:"black",
        textAlign:"center",
         
    }
});
export default Style;