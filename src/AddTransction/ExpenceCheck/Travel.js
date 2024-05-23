import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  } from 'react-native'
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
  
  
  const Travel = () => {
    const [cash, setCash] = useState('')
    const [cashErr, setCashErr] = useState('')
    const [photos, setAddPhotos] = useState(null)
    const [account, setAccount] = useState('Cash Account')
    const [categories, setCategories] = useState('Travel')
    const [dateText, setDateText] = useState('Select Date')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const navigation = useNavigation()
    const refRBSheet = useRef();
    const refRBSheet2 = useRef();
  
    let x = 'Cash Account'
    let y = 'Saving Account'
    let z = 'Easypaisa'
  
    let a = 'Utilities'
    let b = 'Food & Drinks'
    let c = 'Education'
    let d = 'Medical'
    let e = 'Rent Paid'
    let f = 'Fuel'
    let g = 'Grocery'
    let h = 'Transport'
    let i = 'Shopping'
    let j = 'Loan Paid'
    let k = 'Donation'
    let v = 'Committee'
    let n = 'Car Service'
    let m = 'Bills'
    let q = 'House Services'
    let w = 'Gifts'
    let r = 'Travel'
    let t = 'Joy & Fun'
    let u = 'Family'
    let o = 'Healt & Fitness'
    let p = 'Mobile Bill'
    let l = 'Wedding'
    let a1 = 'Electronics'
    let a2 = 'Installment'
    let a3 = 'Insurance'
    let a4 = 'Other Expence'
  
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
    const onSelectNext11 = () => {
      setCategories(v)
      refRBSheet2.current.close()
    }
    const onSelectNext12 = () => {
      setCategories(n)
      refRBSheet2.current.close()
    }
    const onSelectNext13 = () => {
      setCategories(m)
      refRBSheet2.current.close()
    }
    const onSelectNext14 = () => {
      setCategories(q)
      refRBSheet2.current.close()
    }
    const onSelectNext15 = () => {
      setCategories(w)
      refRBSheet2.current.close()
    }
    const onSelectNext16 = () => {
      setCategories(r)
      refRBSheet2.current.close()
    }
    const onSelectNext17 = () => {
      setCategories(t)
      refRBSheet2.current.close()
    }
    const onSelectNext18 = () => {
      setCategories(u)
      refRBSheet2.current.close()
    }
    const onSelectNext19 = () => {
      setCategories(o)
      refRBSheet2.current.close()
    }
    const onSelectNext20 = () => {
      setCategories(p)
      refRBSheet2.current.close()
    }
    const onSelectNext21 = () => {
      setCategories(l)
      refRBSheet2.current.close()
    }
    const onSelectNext22 = () => {
      setCategories(a1)
      refRBSheet2.current.close()
    }
    const onSelectNext23 = () => {
      setCategories(a2)
      refRBSheet2.current.close()
    }
    const onSelectNext24 = () => {
      setCategories(a3)
      refRBSheet2.current.close()
    }
    const onSelectNext25 = () => {
      setCategories(a4)
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
            <TouchableOpacity style={{ marginLeft: '5%' }} onPress={() => navigation.goBack()}>
              <Ionicons name='arrow-back-circle' size={40} color={'#FFF'} />
            </TouchableOpacity>
            <Text style={Style.headerText}>Add Transcation</Text>
          </View>
          <View style={Style.TxtView}>
            <Text style={Style.textstyle}>Add Your Expences</Text>
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
                 AsyncStorage.setItem('CASHTRAVEL',cash)
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
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext11()}>
                  <Text style={Style.rbtextstyle1}>
                    {v}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext12()}>
                  <Text style={Style.rbtextstyle1}>
                    {n}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext13()}>
                  <Text style={Style.rbtextstyle1}>
                    {m}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext14()}>
                  <Text style={Style.rbtextstyle1}>
                    {q}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext15()}>
                  <Text style={Style.rbtextstyle1}>
                    {w}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext16()}>
                  <Text style={Style.rbtextstyle1}>
                    {r}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext17()}>
                  <Text style={Style.rbtextstyle1}>
                    {t}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext18()}>
                  <Text style={Style.rbtextstyle1}>
                    {u}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext19()}>
                  <Text style={Style.rbtextstyle1}>
                    {o}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext20()}>
                  <Text style={Style.rbtextstyle1}>
                    {p}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext21()}>
                  <Text style={Style.rbtextstyle1}>
                    {l}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext22()}>
                  <Text style={Style.rbtextstyle1}>
                    {a1}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext23()}>
                  <Text style={Style.rbtextstyle1}>
                    {a2}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext24()}>
                  <Text style={Style.rbtextstyle1}>
                    {a3}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.rbsheettext1} onPress={() => onSelectNext25()}>
                  <Text style={Style.rbtextstyle1}>
                    {a4}
                  </Text>
                </TouchableOpacity>
              </View>
            </RBSheet>
          </View>
  
  
        </ScrollView>
      </View>
    )
  }
  
  export default Travel