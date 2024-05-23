import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Style from './Style';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Header from '../../../ImportHeader/Header';
import FontFamily from '../../../../assets/customFonts/customFonts';
import Button from '../../../Components/Index';
import { ASSET_URL, BASE_URL } from '../../../../CommonUrl/CommonUrls';
import AnimatedLottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';

const AopFormUpload = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState()
  const [loading, setLoading] = useState(false)
  const [gif, setGif] = useState(false)
  const [imagesList, setImageList] = useState([
    {
      id: '0',
      name: 'Partnership deed duly signed and registerd',
      name2: 'with Register of Firms',
      img: null,
    },
    {
      id: '1',
      name: 'Partnership Registration Certificate issued',
      name2: 'by Register of Firms',
      img: null,
    },
    {
      id: '2',
      name: 'Authority letter in favour of a partner to',
      name2: 'represent in connection ...',
      img: null,
    },
    {
      id: '3',
      name: 'Color copy of CNICs of all Partners',
      img: null,
    },
    {
      id: '4',
      name: 'Rent agreement ownership documents of',
      name2: 'Partnerships register',
      img: null,
    },
    {
      id: '5',
      name: 'Letterhead of the Firm',
      img: null,
    },
    {
      id: '6',
      name: 'Late paid electricity bill of registerd office',
      img: null,
    },
  ]);

  useEffect(() => {
    gettingAsyncValue();
  }, [])

  //getting values from variables from gstscreen
  const name = useSelector((state) => state.salary.name);
  const useremail = useSelector((state) => state.salary.useremail);
  const phone = useSelector((state) => state.salary.phone);
  const incorporationtypeId = useSelector((state) => state.salary.incorporationtypeId);
  const registrationAop = useSelector((state) => state.salary.registrationAop) || 0;

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
        // console.log('FinalList', FinalList)
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

  //post api
  const postdata = async (formData) => {
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
        // console.log('res.dataaaaaa', res.data);
        setLoading(false)
        setGif(true)

        setTimeout(() => {
          setGif(false);
          navigation.navigate('Payment');
        }, 3000);
      });
    } catch (err) {
      setLoading(false)
      console.log('err', err);
    }
  };

  //formData
  const Submit = async () => {
    const formData = new FormData();
    formData.append('business[business_name]', name);
    formData.append('business[email]', useremail);
    formData.append('business[phone]', phone);
    formData.append('business[incorporationtype_id]', incorporationtypeId);

    const imageFields = [
      'partinership_deed',
      'authority_letter',
      'color_copy_cnic',
      'rent_agreement',
      'letter_of_firm',
      'latest_electricity_bill',
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
    formData.append('business[incorporationtype_id]', incorporationtypeId);

    const imageFields = [
      'partinership_deed',
      'partinership_registration_certificate',
      'authority_letter',
      'color_copy_cnic',
      'rent_agreement',
      'letter_of_firm',
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

    try {
      axios({
        url: BASE_URL + `users/${userId}/business-incorporations/${registrationAop}`,
        method: 'Post',
        data: formDataToSend,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        console.log('res.data', res.data);
      });
    } catch (err) {
      console.log('err', err);
    }
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
      const res = await axios.get(BASE_URL + `users/${id}/business-incorporations?incorporationtype_id=${incorporationtypeId}`);
      const businessIncorporations = res.data.business_incorporations;
      const keys = Object.keys(businessIncorporations);
      const lastKey = keys[keys.length - 1];
      const lastObject = businessIncorporations[lastKey];
      if (lastObject) {
        const imageProperties = [
          'partinership_deed',
          'partinership_registration_certificate',
          'authority_letter',
          'color_copy_cnic',
          'rent_agreement',
          'letter_of_firm',
        ];

        setImageList((prevImagesList) => {
          return imageProperties.map((property, index) => {
            return {
              ...prevImagesList[index],
              img: lastObject[property] ? ASSET_URL + lastObject[property] : null,
            };
          });
        });

      }
    } catch (error) {
      console.error('Errorrrrr', error);
    }
  };
  return (
    <View style={Style.mainView1}>
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
        )
        :
        (
          <><View style={Style.innerView}>
            <Header />
          </View><View style={{ backgroundColor: "red", borderBottomLeftRadius: 10, borderBottomEndRadius: 10 }}>
              <View style={{ margin: "5%" }}>
                <Text style={{ color: "white", fontFamily: FontFamily.MONTSERRAT_Medium, fontSize: responsiveScreenFontSize(2.5) }}>NTN Registration of AOP</Text>
                <Text style={{ color: "white", fontFamily: FontFamily.OpenSansRegular, fontSize: responsiveScreenFontSize(1.9) }}>Upload Following</Text>
              </View>
            </View><ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              {loading ?
                (
                  <View style={Style.loader}>
                    <AnimatedLottieView source={require('../../../../../src/assets/pictures/51043-color-changing-pre-loader.json')} autoPlay loop />
                  </View>
                )
                :
                (
                  <View style={{ backgroundColor: "white", }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                      {imagesList.map((item) => (
                        <View key={item.id} style={styles.itemContainer}>
                          <View style={{ marginLeft: responsiveScreenWidth(1), justifyContent: "center", marginTop: responsiveScreenHeight(1) }}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemName}>{item.name2}</Text>
                          </View>
                          {item.img ? (
                            <View style={styles.imageContainer}>
                              <View style={{ width: responsiveScreenWidth(8), height: responsiveScreenHeight(6) }}>
                                <Image source={{ uri: item.img }} style={styles.image} />
                              </View>
                              <TouchableOpacity onPress={() => deleteImage(item.id)} style={styles.deleteIconContainer}>
                                <Image source={require('../../../../../src/assets/pictures/image71.png')} style={styles.deleteIcon} />
                              </TouchableOpacity>
                            </View>
                          )
                            :
                            (
                              <TouchableOpacity onPress={() => openImagePicker(item.id)} style={styles.imagePicker}>
                                <Image source={require('../../../../../src/assets/pictures/photo.png')} style={styles.icon} />
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
                if(registrationAop === 0){
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
    fontFamily: FontFamily.OpenSansRegular,
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
  loader: {
    flex: 1,
    minHeight: responsiveScreenHeight(10),
    justifyContent: "center",
    alignItems: "center",
  }
});
export default AopFormUpload; 