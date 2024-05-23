import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import Style from './Style'
import Foundation from 'react-native-vector-icons/Foundation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { useState, useRef } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'
import RBSheet from 'react-native-raw-bottom-sheet'
import DatePicker from 'react-native-date-picker'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const HomeIncomeExpence = () => {
  const [cash, setCash] = useState('');
  const [cashErr, setCashErr] = useState('');
  const [photos, setAddPhotos] = useState(null);
  const [account, setAccount] = useState('Cash Account')
  const [categories, setCategories] = useState('Salary')
  const [dateText, setDateText] = useState('Select Date')
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
const navigation= useNavigation()
  const refRBSheet = useRef();
  const refRBSheet2 = useRef();

  let x = 'Cash Account'
  let y = 'Saving Account'
  let z = 'Easypaisa'

  let a = 'Salary'
  let b = 'Rental Income'
  let c = 'Car Sale'
  let d = 'Freelance'
  let e = 'Real Estate'
  let f = 'Commission'
  let g = 'Bonus'
  let h = 'Stock'
  let i = 'Freindly Business'
  let j = 'Investment'
  let k = 'Other Income'

  const onSelectValue = () => {
    setAccount(x)
    refRBSheet.current.close()
  }
  const onSelectValue1 = () => {
    setAccount(y)
    refRBSheet.current.close()
  }
  const onSelectValue2 = () => {
    setAccount(z)
    refRBSheet.current.close()
  }
  const onSelectNext = () => {
    setCategories(a)
    refRBSheet2.current.close()
  }
  const onSelectNext1 = () => {
    setCategories(b)
    refRBSheet2.current.close()
  }
  const onSelectNext2 = () => {
    setCategories(c)
    refRBSheet2.current.close()
  }
  const onSelectNext3 = () => {
    setCategories(d)
    refRBSheet2.current.close()
  }
  const onSelectNext4 = () => {
    setCategories(e)
    refRBSheet2.current.close()
  }
  const onSelectNext5 = () => {
    setCategories(f)
    refRBSheet2.current.close()
  }
  const onSelectNext6 = () => {
    setCategories(i)
    refRBSheet2.current.close()
  }
  const onSelectNext7 = () => {
    setCategories(g)
    refRBSheet2.current.close()
  }
  const onSelectNext8 = () => {
    setCategories(h)
    refRBSheet2.current.close()
  }
  const onSelectNext9 = () => {
    setCategories(j)
    refRBSheet2.current.close()
  }
  const onSelectNext10 = () => {
    setCategories(k)
    refRBSheet2.current.close()
  }

  const goToPickImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    })
      .then((images) => {
        setAddPhotos(
          images.map((img) => {
            return {
              uri: img.path,
            };
          }),
        );
      }).catch((e) => alert(e));
  };
  return (
    <View style={Style.main}>
      <ScrollView style={Style.containerStyle}>
        <View style={Style.headerview}>
          <TouchableOpacity style={{marginLeft:'5%'}} onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back-circle' size={40} color={'#FFF'} />
          </TouchableOpacity>
          <Text style={Style.headerText}>Add Transcation</Text>
        </View>
        <View style={Style.TxtView}>
          <Text style={Style.textstyle}>Add Your Income</Text>
        </View>
        <View style={Style.rsinput}>
          <Foundation style={Style.icn} name='dollar-bill' size={30} color={'red'} />
          <TextInput style={Style.inputrs} placeholder='RS' placeholderTextColor={"black"}
            keyboardType='decimal-pad'
            onChangeText={(rs) => {
              if (rs === '') {
                setCashErr('Please Input Value !')
              } else {
                setCashErr('')
              }
              setCash(rs)
              AsyncStorage.setItem('HoeIncomeCash',cash)
            }} />
          <Text style={{ color: 'red' }}>{cashErr}</Text>
        </View>
        <View style={Style.accview}>
          <TouchableOpacity style={Style.accinput} onPress={() => refRBSheet.current.open()}>
            <AntDesign style={Style.icn} name='home' color={'red'} size={25} />
            <Text style={Style.inputrs}>{account}</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.accview}>
          <TouchableOpacity style={Style.accinput} onPress={() => refRBSheet2.current.open()}>
            <AntDesign style={Style.icn} name='bars' color={'red'} size={25} />
            <Text style={Style.inputrs}>{categories}</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.accview}>
          <TouchableOpacity style={Style.accinput} onPress={() => setOpen(true)}>
            <AntDesign style={Style.icn} name='calendar' color={'red'} size={25} />
            <Text style={Style.inputrs}>{dateText}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <DatePicker
            modal
            mode='date'
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
              setDateText(date.toLocaleString())
            }}
            onCancel={() => {
              setOpen(false)
            }} />
        </View>
        <View style={Style.inputnotes}>
          <MaterialCommunityIcons style={Style.icn} name='notebook-edit' size={23} color={'red'} />
          <TextInput style={Style.inputrs} placeholder='Notes' placeholderTextColor={'black'} />
        </View>
        <View style={Style.buttonview}>
          <TouchableOpacity style={Style.filesbutton} onPress={() => goToPickImage()}>
            <AntDesign style={Style.icn} name='addfile' color={'red'} size={25} />
            <Text style={Style.buttontext}>Upload Files</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.Continuebutton}>
            <Feather name='check-circle' size={40} color={'red'} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap", width: responsiveScreenWidth(90), alignSelf: "center" }}>
          {photos ?
            photos.map((img) => (
              <View key={img.uri}>
                <Image style={Style.imageview} source={img} />
              </View>
            )) : null}
        </View>
        <View>
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent"
              },
              draggableIcon: {
                backgroundColor: "#000"
              }
            }}>
            <View style={Style.rbheader}>
              <Text style={Style.textstyle1}>Account Catagories</Text>
            </View>
            <View style={Style.rebtextView}>
              <TouchableOpacity style={Style.rbsheettext} onPress={() => onSelectValue()}>
                <Text style={Style.rbtextstyle}>
                  {x}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.rbsheettext} onPress={() => onSelectValue1()}>
                <Text style={Style.rbtextstyle}>
                  {y}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.rbsheettext} onPress={() => onSelectValue2()}>
                <Text style={Style.rbtextstyle}>
                  {z}
                </Text>
              </TouchableOpacity>
            </View>
          </RBSheet>
        </View>

        <View>
          <RBSheet
            ref={refRBSheet2}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent"
              },
              draggableIcon: {
                backgroundColor: "#000"
              }
            }}>
            <View style={Style.rbheader1}>
              <Text style={Style.textstyle1}>Choose Catagories</Text>
            </View>
            <View style={Style.rebtextView1}>
              <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext()}>
                <Text style={Style.rbtextstyle1}>
                  {a}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext1()}>
                <Text style={Style.rbtextstyle1}>
                  {b}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext2()}>
                <Text style={Style.rbtextstyle1}>
                  {c}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext3()}>
                <Text style={Style.rbtextstyle1}>
                  {d}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext4()}>
                <Text style={Style.rbtextstyle1}>
                  {e}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext5()}>
                <Text style={Style.rbtextstyle1}>
                  {f}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext6()}>
                <Text style={Style.rbtextstyle123}>
                  {i}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext7()}>
                <Text style={Style.rbtextstyle1}>
                  {g}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext8()}>
                <Text style={Style.rbtextstyle1}>
                  {h}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext9()}>
                <Text style={Style.rbtextstyle1}>
                  {j}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext10()}>
                <Text style={Style.rbtextstyle1}>
                  {k}
                </Text>
              </TouchableOpacity>
            </View>
          </RBSheet>
        </View>


      </ScrollView>
    </View>
  )
}

export default HomeIncomeExpence