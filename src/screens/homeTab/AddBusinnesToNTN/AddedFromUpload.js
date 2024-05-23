import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import Style from './style';
import Header from '../../ImportHeader/Header';
import Button from '../../Components/Index';
import AnimatedLottieView from 'lottie-react-native';
import FontFamily from '../../../assets/customFonts/customFonts';
import { ASSET_URL, BASE_URL } from '../../../CommonUrl/CommonUrls';

const AddedFormUpload = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState()
  const [loading, setLoading] = useState(false)
  const [gif, setGif] = useState(false)
  const [imagesList, setImageList] = useState([
    {
      id: '0',
      name: 'Letter Head/Visiting Card.',
      img: null,
    },
  ]);

  //getting values from variables from gstscreen
  const name = useSelector((state) => state.salary.name);
  const useremail = useSelector((state) => state.salary.useremail);
  const phone = useSelector((state) => state.salary.phone);
  const irisPin = useSelector((state) => state.salary.irisPin);
  const commencementDate = useSelector((state) => state.salary.commencementDate);
  const incorporationtypeId = useSelector((state) => state.salary.incorporationtypeId);
  const registrationAdd = useSelector((state) => state.salary.registrationAdd) || 0;

  useEffect(() => {
    gettingAsyncValue();
  }, [])

  //post api
  const postdata = async (formData) => {
    console.log('Formdata',formData)
    const nonNullImages = formData._parts.filter(([name, value]) => {
      if (value.uri === null) {
        return false;
      }
      return true;
    });
    const formDataToSend = new FormData();
    nonNullImages.forEach(([name, value]) => {
      formDataToSend.append(name, value);
    });
    setLoading(true)
    try {
      axios({
        url: BASE_URL + `users/${userId}/business-incorporations`,
        method: 'Post',
        data: formDataToSend,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        console.log('res.data', res.data);
        setLoading(false)
        navigation.navigate('Payment');
        // setGif(true)

        // setTimeout(() => {
        //   setGif(false);
        //   navigation.navigate('Payment');
        // }, 3000);
      });
    } catch (err) {
      console.log('err', err);
    }
  };

  //formData
  const Submit = async () => {
    const formData = new FormData();
    formData.append('business[business_name]', name);
    formData.append('business[email]', useremail);
    formData.append('business[phone]', phone);
    formData.append('business[commencement_date]', commencementDate);
    formData.append('business[iris_pin]', irisPin);
    formData.append('business[incorporationtype_id]', incorporationtypeId);

    const imageFields = [
      'color_copy_cnic',
    ];
    imageFields.map((field, index) => {
      const image = imagesList[index];
      if (image && image.img) {
        formData.append(field, {
          uri: image.img,
          type: 'image/jpeg',
          name: `${field}_${index}.jpg`,
        });
      }
      return null;
    });

    postdata(formData);
  };

  //updateformData
  const UpdateFormData = async () => {
    const formData = new FormData();
    formData.append('_method', 'PATCH');
    formData.append('business[business_name]', name);
    formData.append('business[email]', useremail);
    formData.append('business[phone]', phone);
    formData.append('business[commencement_date]', commencementDate);
    formData.append('business[iris_pin]', irisPin);
    formData.append('business[incorporationtype_id]', incorporationtypeId);

    const imageFields = [
      'color_copy_cnic',
    ];
    imageFields.map((field, index) => {
      const image = imagesList[index];
      if (image && image.img) {
        formData.append(field, {
          uri: image.img,
          type: 'image/jpeg',
          name: `${field}_${index}.jpg`,
        });
      }
      return null;
    });
    UpdatePost(formData);
  };

  //post api
  const UpdatePost = async (formData) => {
    // console.log('formData', formData._parts);
    const nonNullImages = formData._parts.filter(([name, value]) => {
      if (value.uri === null) {
        return false;
      }
      return true;
    });
    const formDataToSend = new FormData();
    nonNullImages.forEach(([name, value]) => {
      formDataToSend.append(name, value);
    });
    setLoading(true)
    try {
      axios({
        url: BASE_URL + `users/${userId}/business-incorporations/${registrationAdd}`,
        method: 'Post',
        data: formDataToSend,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        console.log('res.data', res.data);
        setLoading(false)
        setGif(true)

        setTimeout(() => {
          setGif(false);
          navigation.navigate('Payment');
        }, 3000);
      });
    } catch (err) {
      console.log('err', err);
    }
  };

  const openImagePicker = async (itemId) => {
    try {
      const result = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      if (result.path) {
        const updatedList = imagesList.map((item) => {
          if (item.id === itemId) {
            console.log('item', item)
            return {
              ...item,
              img: result.path,
            };
          }
          return item;
        });
        const FinalList = updatedList.map((item) => {
          if (item.img && item.img.charAt(0) === '/') {
            console.log('String starts with /', item.img);
            item.img = ASSET_URL + item.img
          } else {
            console.log('String does not start with /', item.img);
          }
          return item;
        });
        setImageList(FinalList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteImage = (itemId) => {
    const updatedList = imagesList.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          img: null,
        };
      }
      return item;
    });

    setImageList(updatedList);
  };

  const gettingAsyncValue = async () => {
    let userID = await AsyncStorage.getItem('USER ID');
    if (userID !== null) {
      const id = userID;
      setUserId(id)
      fetchData(id)
    }
  };

  const fetchData = async (id) => {
    try {
      const res = await axios.get(BASE_URL + `users/${id}/business-incorporations/${registrationAdd}`);
      const businessIncorporations = res.data.business_incorporation;
      console.log('businessIncorporations',businessIncorporations)
      if (businessIncorporations) {
        const imageProperties = [
          'color_copy_cnic',
        ];

        setImageList((prevImagesList) => {
          return imageProperties.map((property, index) => {
            return {
              ...prevImagesList[index],
              img: businessIncorporations[property] ? ASSET_URL + businessIncorporations[property] : null,
            };
          });
        });
      }
    } catch (error) {
      console.error('Errorrrrr', error);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
          <><View style={Style.innerView}>
            <Header />
          </View><View style={{ backgroundColor: "red", borderBottomLeftRadius: 10, borderBottomEndRadius: 10 }}>
              <View style={{ margin: "5%" }}>
                <Text style={{ color: "white", fontFamily: FontFamily.MONTSERRAT_Medium, fontSize: responsiveScreenFontSize(2.5) }}>Add Business to NTN</Text>
                <Text style={{ color: "white", fontFamily: FontFamily.OpenSansRegular, fontSize: responsiveScreenFontSize(1.9) }}>Upload Following</Text>
              </View>
            </View><ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              {loading ?
                (
                  <View style={Style.loader}>
                    <AnimatedLottieView source={require('../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                  </View>
                )
                :
                (
                  <View style={{ backgroundColor: "white", }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                      {imagesList.map((item) => (
                        <View key={item.id} style={styles.itemContainer}>
                          <View style={{ marginLeft: responsiveScreenWidth(1), justifyContent: "center" }}>
                            <Text style={styles.itemName}>{item.name}</Text>

                          </View>
                          {item.img ? (
                            <View style={styles.imageContainer}>
                              <View style={{ width: responsiveScreenWidth(8), height: responsiveScreenHeight(6) }}>
                                <Image source={{ uri: item.img }} style={styles.image} />
                              </View>
                              <TouchableOpacity onPress={() => deleteImage(item.id)} style={styles.deleteIconContainer}>
                                <Image source={require('../../../../src/assets/pictures/image71.png')} style={styles.deleteIcon} />
                              </TouchableOpacity>
                            </View>
                          ) : (
                            <TouchableOpacity onPress={() => openImagePicker(item.id)} style={styles.imagePicker}>
                              <Image source={require('../../../../src/assets/pictures/photo.png')} style={styles.icon} />
                            </TouchableOpacity>
                          )}
                        </View>

                      ))}
                    </View>
                  </View>
                )}
            </ScrollView><Button
              onPressBack={() => navigation.goBack()}
              onPressForward={() => {
                if(registrationAdd === 0){
                  Submit()
                }else{
                  UpdateFormData()
                }
              }
               
            } /></>
        )}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  mainView1: {
    flex: 1,
    backgroundColor: "white"
  },
  itemContainer: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: "gainsboro",
    borderRadius: 4

  },
  itemName: {
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: FontFamily.MONTSERRAT_Regular,
    color: "black",

  },
  imagePicker: {
    alignItems: "center",
    justifyContent: "center",
    width: responsiveScreenWidth(8),
    height: responsiveScreenHeight(3),
    marginRight: responsiveScreenWidth(1)
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  deleteIconContainer: {
    width: responsiveScreenWidth(10),
    height: responsiveScreenHeight(6),
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
});
export default AddedFormUpload; 