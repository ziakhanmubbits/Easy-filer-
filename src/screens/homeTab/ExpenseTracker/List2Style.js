import { StyleSheet } from "react-native";
import {
    responsiveFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth
} from 'react-native-responsive-dimensions';
import FontFamily from "../../../assets/customFonts/customFonts";



const List2Style=StyleSheet.create({
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
        marginTop:'5%'

    },
    item: {
        color: 'black',
        fontFamily: FontFamily.OpenSansBold,
        marginTop:'8%'
    },
    listview: {
        flexDirection: "row",
        marginTop: '0.5%',
        marginLeft: "2.5%",
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(30),
        flexWrap: 'wrap'
    },
    title:{
        color:'black',
        fontFamily: FontFamily.OpenSansBold,
        bottom:"3%"
    }
})
export default List2Style