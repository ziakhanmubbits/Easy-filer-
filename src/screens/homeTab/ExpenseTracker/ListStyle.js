import { StyleSheet } from "react-native";
import {
    responsiveFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth
} from 'react-native-responsive-dimensions';
import FontFamily from "../../../assets/customFonts/customFonts";



const ListStyle = StyleSheet.create({
    mian: {
        flex: 1
    },
    txtview: {
        marginLeft: '2%',
    },
    txt: {
        fontSize: responsiveFontSize(2.5),
        color: "red",
        fontFamily: FontFamily.OpenSansBold
    },
    filesview: {
        backgroundColor: "gainsboro",
        height: responsiveScreenHeight(10),
        width: responsiveScreenWidth(18),
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "1%",
        marginTop: '3%'

    },
    item: {
        color: 'black',
        fontFamily: FontFamily.OpenSansBold,
        marginTop: '5%'
    },
    listview: {
        flexDirection: "row",
        marginTop: '0.5%',
        marginLeft: "2.5%",
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(20),
        flexWrap: 'wrap'
    },
    title: {
        color: 'black',
        fontFamily: FontFamily.OpenSansBold,
        bottom: "3%"
    },
    icn: {
        marginTop: '5%'
    }
})
export default ListStyle