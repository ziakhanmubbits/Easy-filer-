import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  } from 'react-native'
  import React from 'react'
  import Foundation from 'react-native-vector-icons/Foundation'
  import AntDesign from 'react-native-vector-icons/AntDesign'
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
  import Feather from 'react-native-vector-icons/Feather'
  import { useState, useRef } from 'react'
  import RBSheet from 'react-native-raw-bottom-sheet'
  import DatePicker from 'react-native-date-picker'
  import { useNavigation } from '@react-navigation/native'
  import AsyncStorage from '@react-native-async-storage/async-storage'
  import Style from './TransferStyle'
  
  
  const TransferCheck = () => {
    const [cash, setCash] = useState('')
    const [cashErr, setCashErr] = useState('')
    const [account, setAccount] = useState('Cash Account')
    const [categories, setCategories] = useState('To Account')
    const [dateText, setDateText] = useState('Select Date')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const navigation = useNavigation()
    const refRBSheet = useRef();
    const refRBSheet2 = useRef();
  
    let x = 'Cash Account'
    let y = 'Saving Account'
    let z = 'Easypaisa'

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
      setCategories(x)
      refRBSheet2.current.close()
    }
    const onSelectNext1 = () => {
      setCategories(y)
      refRBSheet2.current.close()
    }
    const onSelectNext2 = () => {
      setCategories(z)
      refRBSheet2.current.close()
    }

    return (
      <View style={Style.main}>
        <ScrollView style={Style.containerStyle}>
          <View style={Style.TxtView}>
            <Text style={Style.textstyle}>Fund Transfer</Text>
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
                 AsyncStorage.setItem('CASHMOBILEBILL',cash)
              }}/>
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
              }}/>
          </View>
          <View style={Style.inputnotes}>
            <MaterialCommunityIcons style={Style.icn} name='notebook-edit' size={23} color={'red'} />
            <TextInput style={Style.inputrs} placeholder='Notes' placeholderTextColor={'black'} />
          </View>
          <View style={Style.buttonview}>
            <TouchableOpacity style={Style.Continuebutton}>
              <Feather name='check-circle' size={40} color={'red'} />
            </TouchableOpacity>
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
              height={330}
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
                    {x}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext1()}>
                  <Text style={Style.rbtextstyle1}>
                    {y}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext2()}>
                  <Text style={Style.rbtextstyle1}>
                    {z}
                  </Text>
                </TouchableOpacity>        
              </View>
            </RBSheet>
          </View>
        </ScrollView>
      </View>
    )
  }
  
  export default TransferCheck