import { StyleSheet } from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from 'react-native-responsive-dimensions'
import FontFamily from "../../../assets/customFonts/customFonts";
import { Fonts } from "../../../assets/Styles/Fonts";



const Style = StyleSheet.create({
    mainView1: {
        flex: 1,
        backgroundColor: "white"
    },
    innerView: {
        height: responsiveHeight(7),
        width: responsiveWidth(100),
        borderBottomWidth: 1,
        borderBottomColor: "#EBE2E2",
        backgroundColor: "#F5F5F5",
        flexDirection: "row"
    },
    toptextview: {
        backgroundColor: "red",
        borderBottomLeftRadius: 10,
        borderBottomEndRadius: 10
    },
    toptext1: {
        color: "white",
        fontFamily: FontFamily.MONTSERRAT_Medium,
        fontSize: responsiveScreenFontSize(2.5)
    },
    toptext3: {
        color: "white",
        fontFamily: FontFamily.MONTSERRAT_Medium,
        fontSize: responsiveScreenFontSize(2)
    },
    toptext2: {
        color: "white",
        fontFamily: FontFamily.OpenSansRegular,
        fontSize: responsiveScreenFontSize(1.9)
    },
    flatlistview: {
        marginLeft: responsiveScreenWidth(4),
        marginTop: responsiveScreenHeight(2),
    },
    item: {
        backgroundColor: 'white',
        width: responsiveScreenWidth(24),
        margin: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "center"
    },
    flatlisttxt: {
        justifyContent: "center",
        alignItems: "center",
        padding: "7%",
    },
    flatlisttxt1: {
        color: "black",
        textAlign: "center",
        fontSize: responsiveScreenFontSize(1.6),
        fontFamily: FontFamily.MONTSERRAT_Light
    },
    loader: {
        minHeight: responsiveHeight(10),
        justifyContent: "center",
        alignItems: "center",
        marginTop: "70%"
    },
    buttonview: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: responsiveScreenHeight(10),
        width: responsiveScreenWidth(100)
    },
    viewtext: {
        color: "black",
        fontSize: responsiveScreenFontSize(2.1),
        fontFamily: FontFamily.MONTSERRAT_Regular
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: responsiveScreenWidth(100),
        marginTop: responsiveScreenHeight(4)
    },
    buttonstyle: {
        backgroundColor: "darkred",
        width: responsiveScreenWidth(20),
        borderRadius: 5,
        height: responsiveScreenHeight(6),
        alignItems: "center",
        justifyContent: "center"
    },
    buttontext:{
        color:"white",
        fontSize:responsiveScreenFontSize(2.1),
        fontFamily:FontFamily.MONTSERRAT_Regular
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
        marginTop: '4%',
        alignSelf: "center",
        flexDirection: "row",
        alignItems: 'center',
        // width:responsiveScreenWidth(90)
    },
    icn: {
        alignItems: "center",
        right: "60%"
    },
    input: {
        width: responsiveScreenWidth(90),
        left: "16%"
    },
    lowerView: {
        borderWidth: 0.7,
        borderRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(25),
        borderColor: "black",
        // marginLeft: "3%",
        marginTop: "2%",
        marginBottom:"3%",
        backgroundColor:`rgb(245,245,245)`
        
      },
      insideLowerView: {
        height: responsiveScreenHeight(4),
        borderBottomWidth: 0.7,
        borderBottomColor: "black"
      },
      txtsixe: {
        color: "black",
        fontSize: responsiveScreenFontSize(2),
        fontFamily: FontFamily.OpenSansMedium,
         marginTop: "2%",
        left:'2%'
      },
      nxtview:{
        marginTop:'3%',
        flexDirection:"row",
        justifyContent:"space-around"
      },
      frsttxt:{
        color:"black",
        fontSize:Fonts.f18,
        fontFamily: FontFamily.OpenSansMedium
      },
      secndtxt:{
        color:"black",
        fontSize:Fonts.f18,
        fontFamily: FontFamily.OpenSansMedium
      },
      nxtview1:{
      
        marginTop:'5%',
        // marginRight:"5%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"
      },
      frsttxt2:{
        color:"black",
        fontSize:Fonts.f16,
        fontFamily: FontFamily.OpenSansRegular
      },
      secndtxt2:{
        color:"black",
        fontSize:Fonts.f16,
        fontFamily: FontFamily.OpenSansRegular
      },
      btnview1:{
        alignItems:"flex-end",
        marginTop:"8%",
        marginRight:"6%",
        position:"relative"
      },
      btnview2:{
        backgroundColor:"#EB0414",
        height: responsiveScreenHeight(5),
        width: responsiveScreenWidth(25),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5
      },
      txtsixe1:{
        color:"white",
        fontSize:Fonts.f16,
        fontFamily: FontFamily.OpenSansRegular
      },
})
export default Style