import { View, Text, ScrollView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import Style from './Style';
import Entypo from 'react-native-vector-icons/Entypo';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../../../Components/Index';

const FreelancerYes2 = () => {

  const navigation = useNavigation();

  const [showDisplay, setShowDisplay] = useState(false)
  const [showDisplay0, setShowDisplay0] = useState(true)
  const [showDisplay1, setShowDisplay1] = useState(true)
  const [showDisplay2, setShowDisplay2] = useState(false)
  const [showDisplay3, setShowDisplay3] = useState(false)
  const [showDisplay4, setShowDisplay4] = useState(false)
  const [showDisplay5, setShowDisplay5] = useState(false)
  const [showDisplay6, setShowDisplay6] = useState(true)
  const [showDisplay7, setShowDisplay7] = useState(true)
  const [thatState, setThatState] = useState('Click for advance option')
  const [thatState1, setThatState1] = useState('Click for advance option')
  const [thatState2, setThatState2] = useState('Click for advance option')
  const [thatState3, setThatState3] = useState('Click for advance option')
  const [showNewDisplay, setShowNewDisplay] = useState(false)
  const [showNewDisplay1, setShowNewDisplay1] = useState(false)
  const [showNewDisplay2, setShowNewDisplay2] = useState(false)
  const [showNewDisplay3, setShowNewDisplay3] = useState(false)
  const [changeIcon, setChangeIcon] = useState(true)
  const [changeIcon1, setChangeIcon1] = useState(true)
  const [changeIcon2, setChangeIcon2] = useState(true)
  const [changeIcon3, setChangeIcon3] = useState(true)
  const [changeIcon4, setChangeIcon4] = useState(true)

  return (

    <View style={Style.container}>
      <ScrollView>

        <View>
          <Text style={Style.text}>Exempt</Text>
          <TextInput style={Style.placeholder} keyboardType='numeric' placeholder='Amount'
            placeholderTextColor={"grey"}
          />

          <Text style={Style.text1}>Non Exempt</Text>
          <Text style={Style.text0}>Revenue in which tax was deducted</Text>
          <TextInput style={Style.placeholder1} keyboardType='numeric' placeholder='Amount'
            placeholderTextColor={"grey"}
          />
        </View>
        <View style={Style.touchableview}>
          <Pressable style={Style.touchable} onPress={() =>
            [setShowDisplay(!showDisplay), setChangeIcon(!changeIcon)]
          }>
            <Text style={Style.touchabletext}>Expense</Text>
            {changeIcon ? (<Entypo name='chevron-small-down' size={25} color={'black'} />) : (<Entypo name='chevron-small-up' size={25} color={'black'} />)}
          </Pressable>
          {showDisplay === true &&
            (
              <View>
                {
                  showDisplay0 === true &&
                  (
                    <View style={Style.hiddenview}>
                      <View style={Style.hiddenview1}>
                        <Text style={Style.hiddenview1text}>Direct</Text>
                        <Text style={Style.hiddenview1text2}>Total Direct Expense</Text>
                        <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                          placeholderTextColor={"grey"}
                        />
                      </View>
                    </View>
                  )
                }

                {
                  showNewDisplay === true &&
                  (
                    <View style={{ width: responsiveWidth(100) }}>
                      <Text style={Style.newdisplaytext}>Direct</Text>
                      <View style={Style.newdisplayview1}>
                        <View>
                          <Text style={Style.newdisplaytext3}>Direct cost of sales</Text>
                          <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>
                        <View>
                          <Text style={Style.newdisplaytext3}>Rent</Text>
                          <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>
                      </View>
                      <View style={Style.newdisplayview2}>
                        <View>
                          <Text style={Style.newdisplaytext3}>Direct salaries</Text>
                          <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>
                        <View>
                          <Text style={Style.newdisplaytext3}>Freight And Transportation</Text>
                          <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>
                      </View>

                      <View style={Style.newdisplayview3}>
                        <View>
                          <Text style={Style.newdisplaytext3}>Other direct expense</Text>
                          <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>
                      </View>
                    </View>
                  )
                }

                <View style={{ marginTop: "3%", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => {
                      setShowNewDisplay(!showNewDisplay)


                      if (thatState === 'Click for advance option') {
                        setThatState('Click for basic option')
                        setShowDisplay0(false)



                      } else if (thatState === 'Click for basic option') {
                        setThatState('Click for advance option')
                        setShowDisplay0(true)

                      }
                    }}

                    style={{ borderBottomWidth: 1, borderBottomColor: "red" }}

                  >

                    <Text style={{ color: "black", fontWeight: "800" }}>{thatState}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }
        </View>

        <View style={Style.touchableview}>
          <Pressable style={Style.touchable}
            onPress={() =>
              [setShowDisplay2(!showDisplay2), setChangeIcon1(!changeIcon1)]}
          >

            <Text style={Style.touchabletext}>Balance Sheet</Text>
            {changeIcon1 ? (<Entypo name='chevron-small-down' size={25} color={'black'} />) : (<Entypo name='chevron-small-up' size={25} color={'black'} />)}
          </Pressable>
          {showDisplay2 === true &&
            (
              <View>
                {
                  showDisplay6 === true &&
                  (
                    <View style={{ width: responsiveWidth(100) }}>
                      <View style={Style.hiddenview1}>
                        <Text style={Style.hiddenview1text}>Assets</Text>
                        <Text style={Style.hiddenview1text2}>Other Assets</Text>
                        <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                          placeholderTextColor={"grey"}
                        />
                      </View>
                    </View>
                  )
                }

                {
                  showNewDisplay2 === true &&
                  (
                    <View style={{ width: responsiveWidth(100) }}>
                      <Text style={Style.newdisplaytext}>Direct</Text>
                      <View style={Style.newdisplayview1}>
                        <View>
                          <Text style={Style.newdisplaytext3}>Plant/Machinery/Equipment</Text>
                          <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>
                        <View>
                          <Text style={Style.newdisplaytext3}>Stock/store/spares</Text>
                          <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>
                      </View>


                      <View style={Style.newdisplayview1}>
                        <View>
                          <Text style={Style.newdisplaytext3}>Advances/deposite</Text>
                          <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>
                        <View>
                          <Text style={Style.newdisplaytext3}>Cash/Bank balance</Text>
                          <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>
                      </View>

                      <View style={Style.newdisplayview3}>
                        <View>
                          <Text style={Style.newdisplaytext3}>Other Assets</Text>
                          <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>

                      </View>
                    </View>
                  )
                }

                <View style={{ marginTop: "3%", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => {
                      setShowNewDisplay2(!showNewDisplay2)


                      if (thatState2 === 'Click for advance option') {
                        setThatState2('Click for basic option')
                        setShowDisplay6(false)



                      } else if (thatState2 === 'Click for basic option') {
                        setThatState2('Click for advance option')
                        setShowDisplay6(true)

                      }
                    }}

                    style={{ borderBottomWidth: 1, borderBottomColor: "red" }}

                  >

                    <Text style={{ color: "black", fontWeight: "800" }}>{thatState2}</Text>
                  </TouchableOpacity>
                </View>


              </View>
            )
          }
        </View>
        <View style={Style.touchableview}>
          <Pressable style={Style.touchable}
            onPress={() =>
              [setShowDisplay3(!showDisplay3), setChangeIcon2(!changeIcon2)]
            }
          >

            <Text style={Style.touchabletext}>Total Liability</Text>
            {changeIcon2 ? (<Entypo name='chevron-small-down' size={25} color={'black'} />) : (<Entypo name='chevron-small-up' size={25} color={'black'} />)}
          </Pressable>
          {showDisplay3 === true &&
            (
              <View>
                {
                  showDisplay7 === true &&
                  (
                    <View style={{ width: responsiveWidth(100) }}>
                      <View style={Style.hiddenview1}>
                        <Text style={Style.hiddenview1text}>Assets</Text>
                        <Text style={Style.hiddenview1text2}>Other Assets</Text>
                        <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                          placeholderTextColor={"grey"}
                        />
                      </View>
                    </View>
                  )
                }

                {
                  showNewDisplay3 === true &&
                  (
                    <View style={{ width: responsiveWidth(100) }}>

                      <View style={Style.newdisplayview1}>
                        <View>
                          <Text style={Style.newdisplaytext0}>Long term Borrowing debit loan</Text>

                          <TextInput style={Style.innerplaceholder2} keyboardType='numeric' placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>
                        <View >
                          <Text style={Style.newdisplaytext3}>Other liabilities</Text>
                          <TextInput style={Style.innerplaceholder2} keyboardType='numeric' placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>
                      </View>




                      <View style={Style.newdisplayview3}>
                        <View>
                          <Text style={Style.newdisplaytext3}>Trade</Text>
                          <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                            placeholderTextColor={"grey"}
                          />
                        </View>

                      </View>



                    </View>
                  )
                }

                <View style={{ marginTop: "3%", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => {
                      setShowNewDisplay3(!showNewDisplay3)


                      if (thatState3 === 'Click for advance option') {
                        setThatState3('Click for basic option')
                        setShowDisplay7(false)



                      } else if (thatState3 === 'Click for basic option') {
                        setThatState3('Click for advance option')
                        setShowDisplay7(true)

                      }
                    }}

                    style={{ borderBottomWidth: 1, borderBottomColor: "red" }}

                  >

                    <Text style={{ color: "black", fontWeight: "800" }}>{thatState3}</Text>
                  </TouchableOpacity>
                </View>


              </View>
            )
          }
        </View>
        <View style={Style.touchableview}>
          <Pressable style={Style.touchable}
            onPress={() =>
              [setShowDisplay4(!showDisplay4), setChangeIcon3(!changeIcon3)]
            }
          >

            <Text style={Style.touchabletext}>Total Capital</Text>
            {changeIcon3 ? (<Entypo name='chevron-small-down' size={25} color={'black'} />) : (<Entypo name='chevron-small-up' size={25} color={'black'} />)}
          </Pressable>
          {showDisplay4 === true &&
            (
              <View>
                <View style={{ width: responsiveWidth(100) }}>
                  <View style={Style.hiddenview0}>
                    <Text style={Style.newdisplaytext3}>Capital</Text>
                    <TextInput style={Style.innerplaceholder1} keyboardType='numeric' placeholder='Amount'
                      placeholderTextColor={"grey"}
                    />
                  </View>
                </View>

              </View>
            )
          }
        </View>
        <View style={Style.touchableview}>
          <Pressable style={Style.touchable}
            onPress={() =>
              [setShowDisplay5(!showDisplay5), setChangeIcon4(!changeIcon4)]
            }
          >

            <Text style={Style.touchabletext}>Other Adjustable Tax</Text>
            {changeIcon4 ? (<Entypo name='chevron-small-down' size={25} color={'black'} />) : (<Entypo name='chevron-small-up' size={25} color={'black'} />)}
          </Pressable>
          {showDisplay5 === true &&
            (
              <View>
                <View style={{ width: responsiveWidth(100) }}>
                  <View style={Style.bottomview}>
                    <TextInput style={Style.bottomplaceholder1} keyboardType='numeric' placeholder='Amount'
                      placeholderTextColor={"grey"}
                    />
                    <TextInput style={Style.bottomplaceholder2} keyboardType='numeric' placeholder='Tax Deducted'
                      placeholderTextColor={"grey"}
                    />
                    <TouchableOpacity style={Style.touchablebutton} >
                      <Text style={{ color: "white" }}>Add</Text>
                    </TouchableOpacity>

                  </View>


                </View>

              </View>
            )
          }

        </View>
      </ScrollView>
      <Button
        onPressBack={() => navigation.navigate('FreelancerYes')}
      />
    </View>

  )
}

export default FreelancerYes2;
