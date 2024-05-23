import { View, Text,TouchableOpacity,ScrollView,TextInput, } from 'react-native'
import React,{useState} from 'react'
import Style from './Style'
import {
    responsiveHeight,
    responsiveWidth
  } from 'react-native-responsive-dimensions'
  import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../../Components/Index';

const Gain = () => {

  const navigation=useNavigation();

   //1st
  const [bgcolor, setBgColor] = useState("firebrick")
  const [text, settext] = useState("white")
  const [text1, settext1] = useState("firebrick")
  const [bgcolor1, setBgColor1] = useState("white")

  //2nd
  const [bgcolor6, setBgColor6] = useState("firebrick")
  const [text6, settext6] = useState("white")
  const [text7, settext7] = useState("firebrick")
  const [bgcolor7, setBgColor7] = useState("white")

  //3rd
  const [bgcolor8, setBgColor8] = useState("firebrick")
  const [text9, settext9] = useState("white")
  const [text10, settext10] = useState("firebrick")
  const [bgcolor11, setBgColor11] = useState("white")

  //4th
  const [bgcolor12, setBgColor12] = useState("firebrick")
  const [text13, settext13] = useState("white")
  const [text14, settext14] = useState("firebrick")
  const [bgcolor15, setBgColor15] = useState("white")

  //5th
  const [bgcolor24, setBgColor24] = useState("firebrick")
  const [text25, settext25] = useState("white")
  const [text26, settext26] = useState("firebrick")
  const [bgcolor27, setBgColor27] = useState("white")
  return (

      <View style={Style.container}>
              <ScrollView>

      <View style={[Style.hideview1]}>
      <View>
                  <Text style={Style.text5}>Purchased and sold within July 1,2021 to 30th</Text>
                  <Text style={Style.text7}>June 2022.</Text>
                </View>
                  <View style={Style.switchtoggleview}>
                    <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor }}
                      onPress={() => {
                        // setBgColor
                        if (bgcolor === 'white') {
                          setBgColor1('white')
                          setBgColor('firebrick')
                          settext1('firebrick')
                          settext('white')
                        }
                      }}>
                      <Text style={{ color: text }}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor1 }}
                      onPress={() => {
                        if (bgcolor1 === 'white') {
                          setBgColor1('firebrick')
                          setBgColor('white')
                          settext1('white')
                          settext('firebrick')
                        }
                      }}>
                      <Text style={{ color: text1 }}>Yes</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  {
                    bgcolor1 === 'firebrick' &&
                    (
                      <View style={{ alignItems: "center" }}>
                        <View style={{flexDirection:"row",marginTop:"2%"}}>
                        <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Purchase Cost'
                          placeholderTextColor={"grey"}
                        />
                         <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Sale Cost'
                          placeholderTextColor={"grey"}
                        />
                        </View>
                        <TextInput style={Style.placeholder1} textAlign={'center'} placeholder='Adress/Location'
                          placeholderTextColor={"grey"}
                        />
                      </View>
                    )
                  }
                </View>

                <View style={Style.hideview}>
                <View>
                  <Text style={Style.text5}>Holding period is more than one year but less</Text>
                  <Text style={Style.text7}>than two years.</Text>
                </View>
                <View style={Style.switchtoggleview}>
                  <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor6 }}
                    onPress={() => {
                      // setBgColor
                      if (bgcolor6 === 'white') {
                        setBgColor7('white')
                        setBgColor6('firebrick')
                        settext7('firebrick')
                        settext6('white')
                      }
                    }}>

                    <Text style={{ color: text6 }}>No</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor7 }}
                    onPress={() => {
                      if (bgcolor7 === 'white') {
                        setBgColor7('firebrick')
                        setBgColor6('white')
                        settext7('white')
                        settext6('firebrick')
                      }
                    }}
                  >
                    <Text style={{ color: text7 }}>Yes</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                {
                  bgcolor7 === 'firebrick' &&
                  (
                    <View style={{ alignItems: "center" }}>
                       <View style={{flexDirection:"row",marginTop:"2%"}}>
                        <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Purchase Cost'
                          placeholderTextColor={"grey"}
                        />
                         <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Sale Cost'
                          placeholderTextColor={"grey"}
                        />
                        </View>
                      <TextInput style={Style.placeholder1} textAlign={'center'} placeholder='Amount'
                        placeholderTextColor={"grey"}
                      />
                    </View>
                  )
                }

              </View>

              <View style={[Style.hideview]}>
              <View>
                  <Text style={Style.text5}>Holding Period is more than two year but less</Text>
                  <Text style={Style.text7}>than three years.</Text>
                </View>


                  <View style={Style.switchtoggleview}>
                    <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor8 }}
                      onPress={() => {
                       
                     
                        if (bgcolor8 === 'white') {
                          setBgColor11('white')
                          setBgColor8('firebrick')
                          settext10('firebrick')
                          settext9('white')
                        }
                      }}>

                      <Text style={{ color: text9 }}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor11 }}
                      onPress={() => {
                    

                        if (bgcolor11 === 'white') {
                          setBgColor11('firebrick')
                          setBgColor8('white')
                          settext10('white')
                          settext9('firebrick')
                        }
                      }}
                    >
                      <Text style={{ color: text10 }}>Yes</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View>
                  {
                    bgcolor11 === 'firebrick' &&
                    (
                      <View>
                        <View style={{ alignItems: "center" }}>
                        <View style={{flexDirection:"row",marginTop:"2%"}}>
                        <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Purchase Cost'
                          placeholderTextColor={"grey"}
                        />
                         <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Sale Cost'
                          placeholderTextColor={"grey"}
                        />
                        </View>
                          <TextInput style={Style.placeholder1} textAlign={'center'} placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>
                      </View>
                    )
                  }

                </View>

                <View style={[Style.hideview]}>
                <View>
                  <Text style={Style.text5}>Holding period is more than three years but less</Text>
                  <Text style={Style.text7}>than four years.</Text>
                </View>


                      <View style={Style.switchtoggleview}>
                        <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor24 }}
                          onPress={() => {
                            // setBgColor
                            if (bgcolor24 === 'white') {
                              setBgColor27('white')
                              setBgColor24('firebrick')
                              settext26('firebrick')
                              settext25('white')
                            }
                          }}>

                          <Text style={{ color: text25 }}>No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor27 }}
                          onPress={() => {
                            if (bgcolor27 === 'white') {
                              setBgColor27('firebrick')
                              setBgColor24('white')
                              settext26('white')
                              settext25('firebrick')
                            }
                          }}
                        >
                          <Text style={{ color: text26 }}>Yes</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View>
                      {
                        bgcolor27 === 'firebrick' &&
                        (
                          <View>

                            <View style={{ alignItems: "center" }}>
                            <View style={{flexDirection:"row",marginTop:"2%"}}>
                        <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Purchase Cost'
                          placeholderTextColor={"grey"}
                        />
                         <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Sale Cost'
                          placeholderTextColor={"grey"}
                        />
                        </View>
                          <TextInput style={Style.placeholder1} textAlign={'center'} placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>
                          
                           
                       

                          </View>
                        )
                      }

                    </View>

                    <View style={Style.hideview}>
                <View>
                  <Text style={Style.text6}>Holding period is more than four years.</Text>
                      
                </View>
                <View style={Style.switchtoggleview}>
                  <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, padding: "3%", height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor12 }}
                    onPress={() => {
                      // setBgColor
                      if (bgcolor12 === 'white') {
                        setBgColor15('white')
                        setBgColor12('firebrick')
                        settext14('firebrick')
                        settext13('white')

                      }
                    }}>

                    <Text style={{ color: text13 }}>No</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ borderColor: "firebrick", borderWidth: 1, height: responsiveHeight(4), width: responsiveWidth(8.9), alignItems: "center", justifyContent: "center", backgroundColor: bgcolor15 }}
                    onPress={() => {
                      if (bgcolor15 === 'white') {
                        setBgColor15('firebrick')
                        setBgColor12('white')
                        settext14('white')
                        settext13('firebrick')
                      }
                    }}
                  >
                    <Text style={{ color: text14 }}>Yes</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                {
                  bgcolor15 === 'firebrick' &&
                  (
                    <View style={{ alignItems: "center",marginBottom:"3%" }}>
                       <View style={{flexDirection:"row",marginTop:"2%"}}>
                        <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Purchase Cost'
                          placeholderTextColor={"grey"}
                        />
                         <TextInput style={Style.placeholder} textAlign={'center'} placeholder='Sale Cost'
                          placeholderTextColor={"grey"}
                        />
                        </View>
                      <TextInput style={Style.placeholder1} textAlign={'center'} placeholder='Amount'
                        placeholderTextColor={"grey"}
                      />
                    </View>
                  )
                }

              </View>

              </ScrollView>

              <Button
                 onPressBack={() => navigation.navigate('RentSale')}
              />    

      </View>

  )
}
export default Gain;