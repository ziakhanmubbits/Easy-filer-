
import React, { useState, useEffect } from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  ToastAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Style from './Style';
import Button from '../../../Components/Index';
import axios from 'axios';
import { BASE_URL } from '../../../../CommonUrl/CommonUrls';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import { useFocusEffect } from '@react-navigation/native';

const FBR = () => {

  //using useeffect
  useEffect(() => {
    GettinAsyncValue()
    // savelastscreen();
  }, [])

  //define navigation here
  const navigation = useNavigation();

  //we define states here
  const [loading, setLoading] = useState('')
  const [changeView, setChangeView] = useState(true)
  const [images, setImages] = useState([])
  const [thatState, setThatState] = useState("FBR Credentials")
  const [numImagesSelected, setNumImagesSelected] = useState(0)
  const [fbrId, setFbrId] = useState()
  const [fbrPassword, setFbrPassword] = useState()
  const [fbrPin, setFbrPin] = useState()
  const [lastStatus, setLastStatus] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [gif, setGif] = useState(false)


  // getting id through variable 
  const taxFilingId = useSelector((state) => state.myReducer.taxFilingId);
  const lastStatusName = useSelector((state) => state.myReducer.lastStatusName);
  console.log('lastStatusName', lastStatusName)

  //post api
  const psotdata = async (formData) => {
    if (images.length === 0) {
      setModalVisible(true)
    } else {
      setLoading(true)
      try {
        axios({
          url: BASE_URL + `taxfillings/${taxFilingId}/fbrinformations`,
          method: 'Post',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          console.log('res.data', res.data)
          setLoading(false)
          setGif(true)
          setTimeout(() => {
            setGif(false);
            // navigation.navigate('Index4');
          }, 3000);
        })

      } catch (err) {
        setLoading(false)
        console.log('err', err)
      }
    }
  }

  //post api form data
  const handleSubmit = async () => {
    console.log('inside')
    const formData = new FormData();
    formData.append('fbr[fbrid]', fbrId);
    console.log('fbrId', fbrId)
    formData.append('fbr[fbrpassword]', fbrPassword);
    console.log('fbrPassword', fbrPassword)
    formData.append('fbr[fbrpin]', fbrPin);
    console.log('fbrPin', fbrPin)
    images.forEach((image, i) => {
      formData.append(`cnic[]`, {
        uri: image.path,
        type: image.mime,
        name: `photo_${i}.jpg`,
      });
    });
    psotdata(formData)
  };


  //cgetting camnera permission from user
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

  //selecting image from phone gallery 
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
        // mediaType:'photo',
        // maxFiles:files

      })
        .then((selectedImages) => {
          if (selectedImages.length > 2) {
            ToastAndroid.show('You cannot upload more than 2 photos', ToastAndroid.SHORT);
          }

          console.log('hhhhhh', selectedImages.length)
          const newImages = [...images, ...selectedImages];
          setImages(newImages);
          setNumImagesSelected(newImages.length);

        })
        .catch((error) => console.log(error));
    }
  };

  //take image from camera
  const openCamera = async () => {
    if (numImagesSelected >= 2) {
      ToastAndroid.show('You cannot upload more than 2 photos', ToastAndroid.SHORT);
      return;
    }
    let isStoragePermitted = await requestExternalWritePermission();
    if (isStoragePermitted) {
      ImagePicker.openCamera({
        multiple: true,
        // mediaType: 'photo',
        // showsSelectedCount: true,
      }).then((selectedImages) => {
        if (numImagesSelected >= 2) {
          ToastAndroid.show('You cannot upload more than 2 photos', ToastAndroid.SHORT);
          return;
        }

        const newImages = [...images, selectedImages];
        setImages(newImages);
        setNumImagesSelected(newImages.length);

      }).catch((error) => console.log(error));
    }
  }

  //method for deleting image from state
  const deleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    setNumImagesSelected(numImagesSelected - 1);
  };


  //setting  screen name in taxfillign updated api  
  const DataSubmit = async (uId) => {
    try {
      const response = await axios.patch(BASE_URL + `users/${uId}/taxfillings/${taxFilingId}}`,
        {
          taxfiling: {
            last_status: lastStatusName,
          }
        })
    } catch (error) {
      console.log('nnnnTax Filing Id', error)

    }
  }


  //getting async values 
  const GettinAsyncValue = async () => {
    let userID = await AsyncStorage.getItem('USER ID')
    let Laststatus = await AsyncStorage.getItem('lastStatusName')
    if (userID !== null || Laststatus !== null) {
      const status = (Laststatus)
      setLastStatus(status)
      DataSubmit(userID)

    }
  }

  useFocusEffect(
    React.useCallback(() => {
      //save screen name in async 
      const savelastscreen = async (lastStatusName) => {
        try {
          await AsyncStorage.setItem('lastscreen', lastStatusName);
        } catch (error) {
          console.log('failed to save last screen', error);
        }
      }
      savelastscreen();
      return () => {
        // Optional cleanup function if needed when the screen is unfocused
      };
    }, [])
  );
  return (
    <View style={Style.mainView}>
      <ScrollView contentContainerStyle={Style.contentContainer}>
        {gif ?
          (
            <View style={Style.gifcontainer}>
              <View style={{ width: responsiveScreenWidth(40), height: responsiveScreenHeight(25) }}>
                <FastImage
                  style={Style.gif}
                  source={require('../../../../../src/assets/pictures/shield.gif')}
                />
              </View>

            </View>
          ) : (
            <><View>
              <>
                <View style={Style.v1}>
                  <Image style={Style.img} source={require('../../../../assets/pictures/image30.png')} />
                  <Text style={Style.txttop}>The below cited document is for NTN</Text>
                  <Text style={Style.txttop1}> Registration</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => GalleryImages()}
                    style={Style.btn11}>
                    <Text style={Style.btntxt}>Upload Cnic</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => openCamera()}
                    style={Style.btn11}>
                    <Text style={Style.btntxt}>Capture From Camera</Text>
                  </TouchableOpacity>
                  <Text style={Style.txt3}><Text style={Style.txt4}>i.</Text>Upload your CNIC back and front</Text>
                  <Text style={Style.txt5}><Text style={Style.txt6}>ii.</Text>The image must be clear</Text>
                </View>
              </>
              <><View style={Style.v1}>
                <Image style={Style.img} source={require('../../../../../src/assets/pictures/image30.png')} />
                <Text style={Style.txttop}>Please enter your <Text style={Style.txtbold}>FBR Credetials</Text></Text>
                <Text style={Style.txttop1}>We ensure your information is secure that is why</Text>
                <Text style={Style.txttop1}>it is encrypted</Text>
              </View>
                <View style={Style.txtinput}>
                  <TextInput style={Style.innerplaceholder1}
                    keyboardType='numeric'
                    placeholder='Fbr ID'
                    placeholderTextColor={"black"}
                    value={fbrId}
                    onChangeText={text => setFbrId(text)} />
                  <TextInput style={Style.innerplaceholder1}
                    keyboardType='numeric'
                    placeholder='Password'
                    placeholderTextColor={"black"}
                    value={fbrPassword}
                    onChangeText={text => setFbrPassword(text)} />
                </View>
                <View style={Style.txtinput}>
                  <TextInput style={Style.innerplaceholder1}
                    keyboardType='numeric'
                    placeholder='Pin'
                    placeholderTextColor={"black"}
                    value={fbrPin}
                    onChangeText={text => setFbrPin(text)} />
                </View></>
            </View><View>
                {loading === true ?
                  (
                    <View style={{ marginTop: "7%" }}>
                      <ActivityIndicator size={25} color={'red'} />
                    </View>
                  ) : (
                    true
                  )}
              </View>
              <View style={Style.imagesmainview}>
                <View style={Style.imageview2}>
                  {images.map((image, index) => {
                    return (
                      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', margin: "5%" }}>
                        <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={() => deleteImage()}>
                          <Entypo name='circle-with-cross' size={22} color={'red'} />
                        </TouchableOpacity>
                        <View style={{ width: responsiveScreenWidth(30), height: responsiveScreenHeight(16) }}>
                          <Image key={index} source={{ uri: image.path }} style={Style.image} />
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View></>
          )}
      </ScrollView>
      <Button onPressForward={() => handleSubmit()} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)', }}>
          <View style={Style.modalmainview}>
            <View style={Style.modalimageview}>
              <Image source={require('../../../../../src/assets/pictures/image73.png')} style={Style.modalimage} />
            </View>
            <View style={Style.modaltextview}>
              <Text style={Style.modaltext}>Please Select Image</Text>
            </View>
            <View style={Style.modalbuttonview}>
              <TouchableOpacity title="OK" onPress={() => setModalVisible(false)} style={Style.modalbutton}>
                <Text style={Style.modalbuttontext}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
export default FBR;