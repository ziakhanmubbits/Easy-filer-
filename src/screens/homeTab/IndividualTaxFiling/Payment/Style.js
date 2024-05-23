import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import FontFamily from '../../../../assets/customFonts/customFonts';
const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  txt1: {
    color: "black",
    fontSize: 18,
    margin: "5%",
    fontFamily: FontFamily.OpenSansBold
  },
  item: {
    marginVertical: "3%",
    backgroundColor: "pink",
    borderRadius: 10,
    width: responsiveWidth(85),
  },
  flatlisttxt: {
    padding: "8%",
  },
  flatlisttxt1: {
    textAlign: "left",
    color: "black",
    fontSize: 15,
    fontFamily: FontFamily.OpenSansSemiBold
  },
  view2: {
    borderBottomWidth: 0.8,
    borderColor: "black",
    marginTop: responsiveScreenHeight(15),
    width: responsiveWidth(90),
    marginLeft: "5%"
  },
  view2txt: {
    color: "grey",
    fontSize: 20,
    fontFamily: FontFamily.OpenSansRegular,
    marginLeft: "5%",
    marginTop: "5%"
  },
  view3: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: "2%"
  },
  view3txt: {
    color: "black",
    fontFamily: FontFamily.OpenSansRegular
  },
  view3txt2: {
    color: "red",
    fontFamily: FontFamily.OpenSansRegular
  },
  view4: {
    alignItems: "center",
    marginTop: "2%"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    borderRadius: 10
  },
  buttontxt: {
    color: "white",
    fontFamily: FontFamily.OpenSansSemiBold
  },
  txt5: {
    color: "black",
    fontFamily: FontFamily.OpenSansSemiBold,
    fontSize: 18,
    margin: "5%"
  },
  placeholder1: {
    borderWidth: 1.5,
    borderColor: "grey",
    padding: "1%",
    width: responsiveWidth(90),
    borderRadius: 5,
    color: "black",
    paddingHorizontal: "5%"
  },
  modalView: {
    flex: 1
  },
  modalViewInside: {
    height: responsiveHeight(30),
    width: responsiveWidth(80),
    alignSelf: "center",
    borderRadius: 10,
    marginTop: "70%",
    alignItems: "center",
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtView: {
    marginTop: "10%"
  },
  textstyle: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: FontFamily.OpenSansBold,
    color: 'black'
  },
  btn: {
    marginTop: '6%',
    backgroundColor: "steelblue",
    height: responsiveHeight(5),
    width: responsiveWidth(40),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  btn2: {
    marginTop: '3%',
    backgroundColor: "steelblue",
    height: responsiveHeight(5),
    width: responsiveWidth(40),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  btntxt: {
    color: 'white',
    fontFamily: FontFamily.OpenSansBold
  },
  closeBtn: {
    marginTop: "7%",
    height: responsiveHeight(4),
    width: responsiveWidth(10),
    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  closetxt: {
    color: "white",
    fontSize: responsiveFontSize(2.4),
    fontFamily: FontFamily.OpenSansBold
  },
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 10
  },
  touchable: {
    backgroundColor: "steelblue",
    width: responsiveWidth(40),
    height: responsiveHeight(12),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12
  },
  imageview: {
    backgroundColor: "steelblue",
    width: responsiveWidth(40),
    height: responsiveHeight(12),
    alignItems: "center",
    alignItems: "flex-end",
    borderRadius: 10
  },
  flatlistview: {
    backgroundColor: "white",
    width: responsiveScreenWidth(80),
    flexDirection: "row",
    justifyContent: "space-around",
    height: responsiveScreenHeight(8),
    alignItems: "center",
    borderRadius: 6,
    shadowColor: 'lightgrey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
export default Style;