import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';
import commonUxStyles, {APP_BG_COLOR_GREY, APP_BG_COLOR_WHITE} from '../styles';
import ImagePicker from 'react-native-image-crop-picker';
import AttachPhotos from '../components/AttachPhotos';
import ModalSelector from 'react-native-modal-selector';
import {BEARER, CATEGORY_LIST, UOM_LIST} from '../constants';
import AdditionalDetailsRow from '../components/AdditionalDetailsRow';
import {AddProductActionCreator} from '../actions/ProductAction';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import LoadingIndicator from '../components/LoadingIndicator';

const AddProductScreen = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [uom, setUom] = useState('pc');
  const [price, setPrice] = useState(0.0);
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('Food');
  const [city, setCity] = useState('');
  const [productDescriptionList, setProductDescriptionList] = useState([]);
  const [dynamicRowForDescription, setDynamicRowForDescription] = useState([]);
  const dispatch = useDispatch();
  const accessToken = useSelector(
    state => state.AuthenticationReducer.accessToken,
  );
  const email = useSelector(state => state.AuthenticationReducer.email);
  const allProducts = useSelector(state => state.ProductReducer.allProducts);
  const navigation = useNavigation();
  const isLoading = useSelector(state => state.ProductReducer.isLoading);

  onClickAdd = () => {
    // let imageBlobs = images.length > 0 ? images.map(image => image.data) : null;
    let productDescription = {};
    productDescriptionList.forEach(item => {
      productDescription[item.name] = item.description;
    });
    try {
      const productInfo = {
        productName,
        quantity,
        uom,
        price,
        category,
        city,
        productDescription,
      };
      const headers = {
        Authorization: BEARER + accessToken,
        'x-user-id': email,
        'Content-Type': 'multipart/form-data',
      };
      let image = null;
      if (images.length > 0) {
        image = {
          uri:
            Platform.OS === 'android'
              ? images[0].path
              : images[0].path.replace('file://', ''),
          type: images[0].type,
          name: images[0].filename,
        };
      }
      console.log(image);
      dispatch(AddProductActionCreator(productInfo, image, headers))
        .then(response => {
          Alert.alert('Information', 'Product added successfully.', [
            {
              text: 'OK',
              onPress: () => {
                navigation.goBack();
              },
            },
          ]);
        })
        .catch(e => {
          console.log('Add product failed.');
          Alert.alert('Error', 'Something went wrong. Please try again!', [
            {text: 'OK'},
          ]);
        });
    } catch (e) {
      console.log('Something went wrong.', e);
    }
  };

  openImagePicker = () => {
    let imageList = [];
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
      compressImageQuality: 0.8,
      maxFiles: 10,
      mediaType: 'any',
      includeBase64: true,
    })
      .then(response => {
        response.map(image =>
          imageList.push({
            filename: image.filename,
            path: image.path,
            type: image.mime,
            data: image.data,
          }),
        );
        setImages(imageList);
      })
      .catch(error => {
        console.log(error);
      });
  };

  addNewRow = () => {
    let index = dynamicRowForDescription.length;
    let OldDynamicRowForDescription = Object.assign(
      [],
      dynamicRowForDescription,
    );
    let oldProductDescription = Object.assign([], productDescriptionList);
    OldDynamicRowForDescription.push(
      <AdditionalDetailsRow
        key={index}
        index={index}
        addKey={addKey}
        addValue={addValue}
      />,
    );
    oldProductDescription.push({name: '', description: '', index: index});
    setDynamicRowForDescription(OldDynamicRowForDescription);
    setProductDescriptionList(oldProductDescription);
  };

  deleteRow = () => {
    let OldDynamicRowForDescription = Object.assign(
      [],
      dynamicRowForDescription,
    );
    let oldProductDescription = Object.assign([], productDescriptionList);
    OldDynamicRowForDescription.pop();
    oldProductDescription.pop();
    setDynamicRowForDescription(OldDynamicRowForDescription);
    setProductDescriptionList(oldProductDescription);
  };

  addKey = (index, text) => {
    let dataArray = productDescriptionList;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach(element => {
        if (element.index === index) {
          element.name = text;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      setProductDescriptionList(dataArray);
    } else {
      dataArray.push({name: text, description: '', index: index});
      setProductDescriptionList(dataArray);
    }
  };

  addValue = (index, text) => {
    let dataArray = productDescriptionList;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach(element => {
        if (element.index === index) {
          element.description = text;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      setProductDescriptionList(dataArray);
    } else {
      dataArray.push({description: text, name: '', index: index});
      setProductDescriptionList(dataArray);
    }
  };

  if (isLoading) {
    return LoadingIndicator();
  }
  return (
    <KeyboardAvoidingView
      behavior="padding"
      backgroundColor={APP_BG_COLOR_WHITE}
      style={commonUxStyles.mainContainer}>
      <ScrollView
        nestedScrollEnabled={true}
        style={commonUxStyles.scrollContainerStyle}
        contentContainerStyle={commonUxStyles.scrollContainer}>
        <View style={commonUxStyles.centerAlignContainer}>
          <Text style={commonUxStyles.labelText}>Name</Text>
          <View style={commonUxStyles.inputView}>
            <TextInput
              autoFocus
              style={commonUxStyles.inputText}
              onChangeText={setProductName}
            />
          </View>
          <View style={styles.customInputViewForMultipleFields}>
            <View style={[styles.customLabelInputView, {width: '60%'}]}>
              <Text style={styles.customLabelText}>Quantity</Text>
              <View style={styles.customInputText}>
                <TextInput
                  style={commonUxStyles.inputText}
                  keyboardType="decimal-pad"
                  onChangeText={setQuantity}
                />
              </View>
            </View>
            <View style={[styles.customLabelInputView, {width: '30%'}]}>
              <Text style={styles.customLabelText}>UOM</Text>
              <View style={styles.customInputText}>
                <ModalSelector
                  selectStyle={styles.disableBorderForSelector}
                  style={commonUxStyles.inputText}
                  data={UOM_LIST}
                  value={CATEGORY_LIST}
                  onChange={option => setUom(option.value)}>
                  <TextInput
                    style={commonUxStyles.inputText}
                    editable={false}
                    value={uom}
                  />
                </ModalSelector>
              </View>
            </View>
          </View>
          <Text style={commonUxStyles.labelText}>Price</Text>
          <View style={commonUxStyles.inputView}>
            <Text style={styles.customTextInInput}>Rs.</Text>
            <TextInput
              style={commonUxStyles.inputText}
              keyboardType="decimal-pad"
              onChangeText={setPrice}
            />
          </View>
          <Text style={commonUxStyles.labelText}>Category</Text>
          <View style={commonUxStyles.inputView}>
            <ModalSelector
              selectStyle={styles.disableBorderForSelector}
              style={commonUxStyles.inputText}
              data={CATEGORY_LIST}
              value={category}
              onChange={option => setCategory(option.label)}>
              <TextInput
                style={commonUxStyles.inputText}
                editable={false}
                value={category}
              />
            </ModalSelector>
          </View>
          <Text style={commonUxStyles.labelText}>City</Text>
          <View style={commonUxStyles.inputView}>
            <TextInput
              style={commonUxStyles.inputText}
              onChangeText={setCity}
            />
          </View>
          <Text style={commonUxStyles.labelText}>Photos</Text>
          <AttachPhotos images={images} addImages={openImagePicker} />
          <View style={styles.labelWithHeaderButtons}>
            <Text style={commonUxStyles.labelText}>Additional Details</Text>
            <TouchableOpacity onPress={addNewRow}>
              <Text style={commonUxStyles.simpleInlineButton}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteRow}>
              <Text
                style={[commonUxStyles.simpleInlineButton, {marginLeft: 5}]}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
          {dynamicRowForDescription.length > 0 ? (
            <View style={{marginBottom: 150}}>
              {dynamicRowForDescription.map(value => {
                return value;
              })}
            </View>
          ) : (
            <View style={styles.customTablePlaceHolder}>
              <Text
                style={[
                  styles.customTextInInput,
                  commonUxStyles.innerTextColor,
                ]}>
                No details
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={commonUxStyles.bottomContainer}>
        <TouchableOpacity
          style={commonUxStyles.buttonLarge}
          onPress={onClickAdd}>
          <Text style={commonUxStyles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  customButtonForProductDescription: {
    width: '80%',
    backgroundColor: 'gainsboro',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  customTablePlaceHolder: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: APP_BG_COLOR_GREY,
    borderRadius: 25,
    height: 40,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  customInputViewForMultipleFields: {
    flexDirection: 'row',
    width: '80%',
    height: 60,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  customLabelInputView: {
    flexDirection: 'column',
    height: 60,
    justifyContent: 'flex-start',
  },
  customInputText: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'gainsboro',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  customLabelText: {
    marginLeft: 20,
    fontSize: 13,
  },
  customTextInInput: {
    height: 15,
  },
  disableBorderForSelector: {
    borderWidth: 0,
  },
  labelWithHeaderButtons: {
    width: '70%',
    flexDirection: 'row',
  },
});
