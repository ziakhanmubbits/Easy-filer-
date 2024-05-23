import { StyleSheet } from "react-native";
import {
    responsiveScreenWidth,
    responsiveScreenHeight,
    responsiveScreenFontSize
} from 'react-native-responsive-dimensions'
import FontFamily from "../../assets/customFonts/customFonts";



const Style = StyleSheet.create({
    mainView: {
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
    text: {
        color: 'black',
        fontSize: responsiveScreenFontSize(2),
        fontFamily: FontFamily.MONTSERRAT_Medium,
        textAlign: "center"
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    imageview:{
        width:responsiveScreenWidth(20),
        height:responsiveScreenHeight(10)
    },
    view1:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: responsiveScreenHeight(30)
    }

})
export default Style