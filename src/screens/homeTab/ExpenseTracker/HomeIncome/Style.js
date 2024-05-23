import { StyleSheet } from 'react-native'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import FontFamily from '../../../assets/customFonts/customFonts'
const Style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    containerStyle: {
        flexGrow: 1
    },
    TxtView: {
        marginLeft: '5%',
        marginTop: '2%'
    },
    textstyle: {
        fontSize: 21,
        color: 'black',
        fontFamily: FontFamily.OpenSansBold
    },
    rsinput: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(5),
        borderWidth: 0.8,
        borderRadius: 5,
        marginTop: "5%",
        borderColor: 'gray'
    },
    inputrs: {
        width: responsiveScreenWidth(53),
        marginLeft: '2%',
        color:'black'
    },
    icn: {
        marginLeft: '2%'
    },
    accview: {
        alignSelf: "center",
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(5),
        marginTop: '2%',
        backgroundColor: 'gainsboro',
        borderRadius: 5,
        justifyContent: "center"
    },
    accinput: {
        flexDirection: 'row',
        alignItems: "center"
    },
    inputnotes: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(5),
        borderWidth: 0.8,
        borderRadius: 5,
        marginTop: "2%",
        borderColor: 'gray'
    },
    buttonview: {
        flexDirection: 'row', justifyContent: "space-between",
        width: responsiveScreenWidth(90),
        alignSelf: "center",
        marginTop: "5%"
    },
    filesbutton: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "gainsboro",
        borderRadius: 5
    },
    buttontext: {
        marginLeft: '5%',
        color: "black",
        fontFamily: FontFamily.OpenSansBold
    },
    Continuebutton: {
        backgroundColor: 'gainsboro',
        borderRadius: 5,
        width: responsiveScreenWidth(15),
        alignItems: "center"
    },
    imageview: {
        margin: 5,
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 5,
        width: 93,
        height: 110,
        marginTop: '20%',
    },
    rbheader:{
        backgroundColor:"red",
        height: responsiveScreenHeight(4),
        bottom:15,
        borderTopEndRadius:15,
        borderTopStartRadius:15,
        alignItems:"center",
        justifyContent:"center"
    },
    textstyle1: {
        fontSize: 18,
        color: 'white',
        fontFamily: FontFamily.OpenSansBold
    },
    rbsheettext:{
        borderWidth:0.7,
        width: responsiveScreenWidth(25),
        borderRadius:5,
        height: responsiveScreenHeight(3),
        alignItems:"center",
        justifyContent:"center",
        borderColor:'red',
        margin:3
    },
    rebtextView:{
        flexDirection:'row'
    },
    rbtextstyle:{
        color:'black',
        fontFamily: FontFamily.OpenSansBold
    },
    rbheader1:{
        backgroundColor:"red",
        height: responsiveScreenHeight(4),
        bottom:15,
        borderTopEndRadius:15,
        borderTopStartRadius:15,
        alignItems:"center",
        justifyContent:"center"
    },
    rbsheettext1:{
        borderWidth:0.7,
        width: responsiveScreenWidth(23),
        borderRadius:5,
        height: responsiveScreenHeight(3),
        alignItems:"center",
        justifyContent:"center",
        borderColor:'red',
        margin:3
    },
    rebtextView1:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    rbtextstyle1:{
        color:'black',
        fontFamily: FontFamily.OpenSansBold
    },
    rbtextstyle123:{
        color:'black',
        fontSize:12,
        fontFamily: FontFamily.OpenSansBold
    },
    headerview:{
        height: responsiveScreenHeight(7),
        backgroundColor:'#EB0414',
        flexDirection:"row",
        alignItems:"center",
    },
    headerText:{
        color:'#FFF',
        fontSize:16,
        fontFamily: FontFamily.OpenSansBold,
        marginLeft:"22%"
    }
})

export default Style