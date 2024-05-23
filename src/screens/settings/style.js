import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth,responsiveScreenWidth, responsiveScreenHeight, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import FontFamily from "../../assets/customFonts/customFonts";
import { Fonts } from "../../assets/Styles/Fonts";



const Style = StyleSheet.create({
    mian: {
        flex: 1,
        backgroundColor: "white"
    },
    innerView: {
        height: responsiveScreenHeight(7),
        width: responsiveScreenWidth(100),
        borderBottomWidth: 1,
        borderBottomColor: "#EBE2E2",
        backgroundColor: "#F5F5F5",
        flexDirection: "row"
    },
      box1: {
        width: responsiveScreenWidth(90), 
        marginTop: "10%",
        borderRadius: 5,
         alignSelf: "center",
    },
    box2: {
        width: responsiveScreenWidth(90), 
        marginTop: responsiveScreenHeight(2),
        borderRadius: 5,
         alignSelf: "center",
    },
    placeholder1: {
        width: responsiveScreenWidth(90),
        backgroundColor: "white",
        fontSize: responsiveScreenFontSize(2),
        fontFamily: FontFamily.OpenSansLight,
        color: "black"
      },
      placeholder2: {
        borderColor: "black",
        borderWidth: 1
      },
      passbox: {
        marginTop: '2%',
        alignSelf: "center",
        flexDirection: "row",
        alignItems: 'center',
    },
    input: {
        width: responsiveScreenWidth(90),
        left: "16%"
    },
    icn: {
        alignItems: "center",
        right: "60%"
    },
    loader:{
        minHeight:responsiveScreenHeight(10),
        justifyContent:"center",
        alignItems:"center",
        marginTop:"70%"
      },
      modalmainview:{
        backgroundColor: 'white',
         height: responsiveScreenHeight(16),
         alignItems:"center",
         borderRadius:10,
         width:responsiveScreenWidth(80)
      },
      modaltext:{
        color:"black",
        fontSize:responsiveScreenFontSize(2),
        fontFamily:FontFamily.OpenSansSemiBold
      },
      modalbuttonview:{
        alignSelf:"center",
        // marginTop:"2%"
     
      },
      modalbutton:{
        backgroundColor:"#EB0414",
        height:responsiveScreenHeight(4),
        width:responsiveScreenWidth(18),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        marginTop:"4%"
      },
      modalbuttontext:{
        color:"white",
        fontSize:Fonts.f16,
        alignItems:"center",
        fontFamily:FontFamily.OpenSansRegular
      },

})
export default Style