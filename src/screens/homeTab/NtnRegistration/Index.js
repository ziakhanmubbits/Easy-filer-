import { View, Text, ScrollView, Image, TouchableOpacity, PermissionsAndroid, ToastAndroid, } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Style from './Style';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Header from '../../ImportHeader/Header';
import axios from 'axios';
import { ASSET_URL, BASE_URL } from '../../../CommonUrl/CommonUrls';
import FastImage from 'react-native-fast-image';
import { LogBox } from 'react-native'
import AnimatedLottieView from 'lottie-react-native';
import { TextInput } from 'react-native-paper';


const NtnRegistration = () => {
  LogBox.ignoreAllLogs()
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('')
  const [cnic, setCnic] = useState('')
  const [userId, setUserId] = useState()
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([])
  const [numImagesSelected, setNumImagesSelected] = useState(0)
  const [cnicError, setCnicError] = useState(false)
  const [gif, setGif] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const inputRefs = {
    inputRef1: useRef(null),
  };

  useEffect(() => {
    gettingAsyncValue();
  }, [])

  const fetchdata = async (id) => {
    try {
      const response = await axios.get(BASE_URL + `users/${id}/ntn-registrations`);
      const ntnRegistrations = response.data.ntnRegistrations;
      if (Object.keys(ntnRegistrations).length > 0) {
        const lastRegistration = ntnRegistrations[ntnRegistrations.length - 1];
        setCnic(lastRegistration.cnic)
        setImages(lastRegistration.photo)
        setIsLoading(false)
      } else {
        setCnic('')
        setImages([])
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      console.log('Error', error);
    }
  }

  //useref method
  const handleTextInputFocus = (ref) => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  const psotdata = async (formData) => {
    if (!cnic) {
      setCnicError(true)
      handleTextInputFocus(inputRefs.inputRef1);
    } else if (images.length === 0) {
      ToastAndroid.show('Kindly select image', ToastAndroid.show)
    } else if (images.length != 2) {
      ToastAndroid.show('Kindly select one more image', ToastAndroid.show)
    }
    else {
      setLoading(true)
      try {
        axios({
          url: BASE_URL + `users/${userId}/ntn-registrations`,
          method: 'Post',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          // console.log('res.data', res.data)
          setLoading(false)
          setGif(true)

          setTimeout(() => {
            setGif(false);
            navigation.navigate('Payment');
          }, 3000);

        })

      } catch (err) {
        console.log('err', err)
      }
    }
  }
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('ntn[cnic]', cnic);
    console.log('cnic', cnic)
    formData.append('ntn[email]', userEmail);
    console.log('email', userEmail)
    images.forEach((image, i) => {
      formData.append(`photo[]`, {
        uri: image.path,
        type: image.mime,
        name: `photo_${i}.jpg`,
      });
    });
    psotdata(formData)
  };


  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Access to photos',
            message: 'App would like to access your Gallery',
            buttonNegative: 'Deny',
            buttonPositive: 'Allow',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return granted;
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      return true;
    }
  }
  const GalleryImages = async () => {

    let files = 2

    if (numImagesSelected >= 2) {
      ToastAndroid.show('You cannot upload more than 2 photos', ToastAndroid.SHORT);
      return;
    }
    let isStoragePermitted = await requestExternalWritePermission();
    if (isStoragePermitted) {
      ImagePicker.openPicker({
        multiple: true,
      })
        .then((selectedImages) => {
          if (selectedImages.length > 2) {
            ToastAndroid.show('You cannot upload more than 2 photos', ToastAndroid.SHORT);
          }
          const newImages = [...images, ...selectedImages];
          // console.log('selectedImages', selectedImages[0].path)
          setImages(newImages);
          setNumImagesSelected(newImages.length);

        })
        .catch((error) => console.log(error));
    }
  };

  const gettingAsyncValue = async () => {
    let emailJson = await AsyncStorage.getItem('Email');
    let userID = await AsyncStorage.getItem('USER ID');

    if (emailJson !== null || userID !== null) {
      const emailData = JSON.parse(emailJson);
      setUserEmail(emailData);
      fetchdata(userID)
      const id = userID;
      setUserId(id);
    }
  };

  const deleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    setNumImagesSelected(numImagesSelected - 1);
  };
  return (
    <View style={Style.mainView}>
      <View style={Style.innerView}>
            <Header />
          </View>
      {gif ?
        (
          <View style={Style.gifcontainer}>
            <View style={{ width: responsiveScreenWidth(40), height: responsiveScreenHeight(25) }}>
              <FastImage
                style={Style.gif}
                source={require('../../../../src/assets/pictures/shield.gif')}
              />
            </View>

          </View>
        )
        :
        (
          <><ScrollView>
              <View style={Style.v1}>
                <View style={Style.imageviewtop}>
                  <Image style={Style.img} source={require('../../../../src/assets/pictures/image30.png')} />
                </View>
                <Text style={Style.txttop}>NTN Registration</Text>
                <Text style={Style.txttop1}>The below cited document is for NTN{'\n'} Registration</Text>
              </View>
              {isLoading ?
                (
                  <View style={Style.loader}>
                    <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                  </View>
                )
                :
                (
                  <>
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: responsiveScreenHeight(1) }}>
                      <TextInput
                        ref={inputRefs.inputRef1}
                        style={[Style.placeholder1, { color: cnicError ? 'red' : 'black' }]}
                        outlineStyle={[Style.placeholder2, { borderColor: cnicError ? 'red' : 'black' }]}
                        outlineColor='black'
                        activeOutlineColor={cnicError ? 'red' : 'black'}
                        label="Cnic"
                        keyboardType='numeric'
                        maxLength={13}
                        value={cnic}
                        onChangeText={(text) => {
                          setCnic(text);
                          setCnicError(false)
                        }}
                        mode="outlined" />
                    </View>
                    <View>

                      <TouchableOpacity
                        onPress={() => GalleryImages()}
                        style={Style.btn11}>
                        <Text style={Style.btntxt}>Upload Cnic</Text>
                      </TouchableOpacity>
                      <Text style={Style.txt3}><Text style={Style.txt4}>i.</Text>Upload your CNIC back and front</Text>
                      <Text style={Style.txt5}><Text style={Style.txt6}>ii.</Text>The image must be clear</Text>
                    </View><View>
                      {loading ?
                        (
                          <View style={Style.buttonloader}>
                            <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                          </View>
                        ) : (
                          <TouchableOpacity style={Style.cntbtn} onPress={() => handleSubmit()}>
                            <Text style={Style.cntbtntxt}>
                              Continue
                            </Text>
                          </TouchableOpacity>
                        )}
                    </View><View style={Style.imageview2}>
                      {images.map((image, index) => {
                        return (
                          <View key={index} style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', margin: "5%", borderRadius: 10 }}>
                            <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={() => deleteImage()}>
                              <Entypo name='circle-with-cross' size={22} color={'red'} />
                            </TouchableOpacity>
                            <View key={index} style={{ width: responsiveScreenWidth(30), height: responsiveScreenHeight(16) }}>
                              {image.length !== undefined ?
                                (
                                  <Image source={{ uri: ASSET_URL + image }} style={Style.image} />
                                ) :
                                (
                                  <Image source={{ uri: image.path }} style={Style.image} />
                                )}
                            </View>
                          </View>
                        );
                      })}

                    </View></>
                )}
            </ScrollView></>
        )
      }
    </View>
  )
}

export default NtnRegistration

