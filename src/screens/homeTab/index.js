import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native'
import React from 'react'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'
import Header from '../ImportHeader/Header'
import FontFamily from '../../assets/customFonts/customFonts'
import { Fonts } from '../../assets/Styles/Fonts'
import { useDispatch } from 'react-redux'
import { setincorporationtypeId } from '../../store/mySaleryCalculatorReducer'


const ListItem = [
  {
    id: '2',
    image: (require('../../../src/assets/pictures/image30.png')),
    title: 'NTN',
    title2: 'Registration'
  },
  {
    id: '7',
    image: (require('../../../src/assets/pictures/image55.png')),
    title: 'GST',
    title2: 'Registration'
  },
  {
    id: '14',
    image: (require('../../../src/assets/pictures/lock.png')),
    title: 'PSW',
    title2: 'Registration'
  },
  {
    id: '1',
    image: (require('../../../src/assets/pictures/image50.png')),
    title: 'Individual',
    title2: 'Tax Filling'
  },
  {
    id: '3',
    image: (require('../../../src/assets/pictures/tax.png')),
    title: 'GST',
    title2: 'Filling'
  },
  {
    id: '6',
    image: (require('../../../src/assets/pictures/image53.png')),
    title: 'Business',
    title2: 'Registration'
  },
  {
    id: '4',
    image: (require('../../../src/assets/pictures/business.png')),
    title: 'Business Add',
    title2: 'to NTN'
  },
  {
    id: '5',
    image: (require('../../../src/assets/pictures/remove.png')),
    title: 'Remove',
    title2: 'from NTN'
  },
  {
    id: '16',
    image: (require('../../../src/assets/pictures/uae.png')),
    title: 'UAE',
    title2: 'services'
  },
  {
    id: '8',
    image: (require('../../../src/assets/pictures/image56.png')),
    title: 'Service',
    title2: 'Charges'
  },
  {
    id: '15',
    image: (require('../../../src/assets/pictures/image52.png')),
    title: 'IRIS',
    title2: 'Profile Update'
  },
  {
    id: '9',
    image: (require('../../../src/assets/pictures/image57.png')),
    title: 'Salary',
    title2: 'Calculator'
  },
  // {
  //   id: '10',
  //   image:(require('../../../src/assets/pictures/image58.png')),
  //   title: 'Expense',
  //   title2 :'Tracker'
  // },
  // {
  //   id: '11',
  //   image:(require('../../../src/assets/pictures/image59.png')),
  //   title2: 'Video',
  // },
  // {
  //   id: '12',
  //   image:(require('../../../src/assets/pictures/image60.png')),
  //   title2: 'Blog',
  // },
  {
    id: '13',
    image: (require('../../../src/assets/pictures/image61.png')),
    title2: 'FAQs'
  },
]

const BottomHome = () => {


  const dispatch = useDispatch()

  const navigation = useNavigation();
  const call = (id) => {
    console.log('dddd',id)
    switch (id) {
      case '1':
        navigation.navigate('Tax')
        break;
      case '2':
        navigation.navigate('Registration')
        break;
      case '3':
        // navigation.navigate('GstFilling')
        break;
      case '4':
        navigation.navigate('AddedFrom3')
        break;
      case '15':
        navigation.navigate('IRISprofile')
        break;
      case '6':
        navigation.navigate('business')
        break;
      case '7':
        navigation.navigate('GST')
        break;
      case '8':
        navigation.navigate('Service')
        break;
      case '9':
        navigation.navigate('Calculator')
        break;
      // case '10':
      //   console.log('id')
      //   navigation.navigate('Expences')
      //   break;
      case '13':
        navigation.navigate('Faqs')
        break;
      case '12':
        navigation.navigate('USA')
        break;
      case '14':
        // navigation.navigate('PswRegistration')
        break;
      case '5':
        navigation.navigate('RemoveYesNo')
        break;
      case '16':
        navigation.navigate('UaeVatFilling')
        break;
    }
  }

  const saveIncorporationId = (id) => {
    dispatch(setincorporationtypeId(id))
  }


  // const dispatch = useDispatch();
  // dispatch(setVariable('YourValue'));
  const Item = ({ title, icon, id, title2, image }) => (
    <TouchableOpacity onPress={() => { call(id), saveIncorporationId(id) }}>
      <View style={styles.item}>
        <View style={{ width: responsiveScreenWidth(11), height: responsiveScreenHeight(5.5) }}>
          <Image source={image} style={{ width: "100%", height: "100%", resizeMode: 'center' }}></Image>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title2}>{title2}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} id={item.id} title2={item.title2} />
  );
  return (
    <View style={styles.mainView}>
      <View style={styles.innerView}>
        <Header />
      </View>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={ListItem}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          numColumns={3}
        />
      </View>
    </View>
  )
}

export default BottomHome;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "white"
  },
  cntnt: {
    flexGrow: 1
  },
  innerView: {
    height: responsiveHeight(7),
    width: responsiveWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
  },
  innerView2: {
    backgroundColor: "#EBEBEB",
    width: responsiveWidth(28),
    height: responsiveHeight(4),
    borderRadius: 50,
    flexDirection: "row",
    top: 4
  },
  txt: {
    color: "#000000",
    top: '4%',
    marginLeft: "5%",
    fontFamily: FontFamily.OpenSansBold
  },
  icon: {
    backgroundColor: "white",
    borderRadius: 40,
    top: '15%',
    left: "100%"
  },
  iconV: {
    flexDirection: "row",
    alignSelf: "center",
    marginLeft: "50%",
    justifyContent: "space-evenly"
  },
  icon2: {
    left: "20%"
  },
  icon3: {
    left: "40%"
  },
  item: {
    backgroundColor: 'white',
    width: responsiveWidth(24),
    height: responsiveHeight(12),
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
  title: {
    fontSize: responsiveFontSize(1.7),
    color: 'black',
    alignItems: "center",
    fontFamily: FontFamily.OpenSansRegular,
  },
  title2: {
    fontSize: responsiveFontSize(1.7),
    color: "black",
    alignItems: "center",
    fontFamily: FontFamily.OpenSansRegular,

  },
})