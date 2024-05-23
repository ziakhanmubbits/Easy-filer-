import { StyleSheet } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import FontFamily from "../../../assets/customFonts/customFonts";



  const Style2 = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
    },
    itemContainer: {
      width: responsiveScreenWidth(90),
      height: responsiveScreenHeight(7),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
      backgroundColor: "gainsboro",
      borderRadius: 4
  
    },
    itemName: {
      fontSize: responsiveScreenFontSize(1.8),
      fontFamily: FontFamily.OpenSansRegular,
      color: "black",
  
    },
    imagePicker: {
      alignItems: "center",
      justifyContent: "center",
      width: responsiveScreenWidth(8),
      height: responsiveScreenHeight(3),
      marginRight: responsiveScreenWidth(1)
    },
    icon: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    imageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    deleteIconContainer: {
      width: responsiveScreenWidth(10),
      height: responsiveScreenHeight(6),
      padding: 8,
      borderRadius: 5,
      marginLeft: 10,
    },
    deleteIcon: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    loader: {
      minHeight: responsiveScreenHeight(10),
      justifyContent: "center",
      alignItems: "center",
      marginTop: "70%"
    }
  })
  export default Style2