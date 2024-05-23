import {View,Text,ScrollView,Image,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Style from './Style'
import Header from '../../ImportHeader/Header';
import axios from 'axios';
import { BASE_URL } from '../../../CommonUrl/CommonUrls';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import AnimatedLottieView from 'lottie-react-native';
import FontFamily from '../../../assets/customFonts/customFonts';
import { TextInput } from 'react-native-paper'; 

  const ATLstatusFinder = () => {
    const [cnicNumber, setCnicNumber] = useState('')
    const [cnicNumberError, setCnicNumberError] = useState('')
    const [data,setData]=useState('')
    const [name,setName]=useState('');
    const [id,setId]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const [cnicError,setCnicError]=useState(false)
    const [message,setMessage]=useState('')

    const getApi = async () => {
      if (!cnicNumber) {
        setCnicError(true);
      } else {
        setIsLoading(true);
        try {
          const res = await axios.get(BASE_URL + `activefilers?cnic=${cnicNumber}`);          
          if (res.data.activefiler !== null) {
            // console.log(res.data.activefiler);
            setData(res.data.activefiler);
            setName(res.data.activefiler.name);
            setId(res.data.activefiler.ntn);
          } else {
            setMessage('Not ActiveFiler');
          }
    
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          console.log('Error', error);
        }
      }
    }
    
      return (
          <View style={Style.mainView}>
              <View style={Style.innerView}>
                  <Header />
              </View>
              <ScrollView contentContainerStyle={Style.contentContainer}>
              <View style={Style.v1}>
                <View style={Style.imageview}>
                <Image style={Style.img} source={require('../../../../src/assets/pictures/image49.png')} />
                </View>
                <View style={{alignItems:"center",justifyContent:"center"}}>
                 <Text style={Style.txtheder}>Active Taxpayer List(ATL)</Text>
                <Text style={Style.txttop}>Active Taxpayer List(ATL) name finder, Validates{'\n'} whether you are an active tax file or not.</Text>
                </View>
          </View>
          
          <View style={Style.search}>
          <View>          
            <TextInput
            style={Style.placeholder1}
            outlineStyle={Style.placeholder2}
            outlineColor='black'
            activeOutlineColor={'black'}
            label="Cnic"
            keyboardType='numeric'
            maxLength={13}
            value={cnicNumber}
            onChangeText={(text) => {
              setCnicNumber(text);
            }}
            mode="outlined" />
            </View>
        </View>
        <Text style={Style.texterror}>{cnicNumberError}</Text>
          
        
          {isLoading ? 
          (
          <View style={Style.loader}>
             <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
          </View>
          )
          :
          (
            <><View style={Style.txtView}>
                  <TouchableOpacity style={Style.txtButton} onPress={() => getApi()}>
                    <Text style={Style.txt}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View><View>
                    {data ? (
                      <View style={{ alignItems: "center", justifyContent: "center", marginTop: "5%" }}>
                        <View style={{  width: responsiveScreenWidth(80), height: responsiveScreenHeight(10), borderRadius: 10, }}>
                          <Text style={{ color: "grey", fontSize: responsiveScreenFontSize(2.5), fontFamily: FontFamily.OpenSansMedium, margin: "2%" }}>Name:  <Text style={{ color: "black",fontSize:responsiveScreenFontSize(2.4),fontFamily:FontFamily.OpenSansMedium }}>{name}</Text></Text>
                          <Text style={{ color: "grey", margin: "2%", fontSize: responsiveScreenFontSize(2.5), fontFamily: FontFamily.OpenSansMedium }}>Id Card:  <Text style={{ color: "black",fontSize:responsiveScreenFontSize(2.4),fontFamily:FontFamily.OpenSansMedium }}>{id}</Text></Text>
                        </View>
                      </View>

                    )
                      :
                      (
                        <View style={{ alignItems: "center", justifyContent: "center", marginTop: "5%" }}>
                        <View style={{  width: responsiveScreenWidth(80), height: responsiveScreenHeight(10), borderRadius: 10,alignItems: "center", justifyContent: "center", }}>
                          <Text style={{ color: "black",fontSize:responsiveScreenFontSize(2.4),fontFamily:FontFamily.OpenSansMedium }}>{message}</Text>
                        </View>
                      </View>
                      )}
                  </View></>
        // 
          )
      }
              </ScrollView>
          </View>
      )
  }
  
  export default ATLstatusFinder
 