import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {Avatar} from 'react-native-elements';
import commonUxStyles, {
  APP_BG_COLOR_GREY,
  APP_BG_COLOR_WHITE,
  APP_MAIN_COLOR_RED,
} from '../styles';
import {signOutActionCreator} from '../actions/AuthenticationAction';
import {useNavigation} from '@react-navigation/core';
import {SIGNIN_ROUTE} from '../navigation/routes';

const UserAccountScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const profilePicUrl = useSelector(
    state => state.UserAccountReducer.profilePicUrl,
  );
  const firstname =
    /* useSelector(state => state.UserAccountReducer.firstname); */ 'Sathiyanarayanan';
  const lastname =
    /*  useSelector(state => state.UserAccountReducer.lastname); */ 'T';
  const email =
    /* useSelector(state => state.UserAccountReducer.email); */ 'tsathiyanarayanan92@gmail.com';
  const defaultProfile =
    firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase();
  const location = 'Bengaluru';
  const phone = '9902482828';
  // useEffect(() => {}, []);

  onClickSignOut = () => {
    dispatch(signOutActionCreator())
      .then(() => {
        console.log('Sign out Successfully');
        navigation.navigate(SIGNIN_ROUTE);
      })
      .catch(() => {
        console.log('Sign out failed.');
        Alert.alert('Error', 'Email or Password cannot be empty.', [
          {text: 'OK'},
        ]);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerTop} />
        <View style={styles.imageWrapper}>
          {profilePicUrl ? (
            <Avatar
              rounded
              containerStyle={styles.image}
              source={{
                uri: 'data:image/png;base64,' + profilePicUrl,
              }}
            />
          ) : (
            <Avatar
              rounded
              containerStyle={styles.image}
              size="large"
              title={defaultProfile}>
              <Avatar.Accessory
                size={30}
                onPress={() => console.log('i pressed')}
              />
            </Avatar>
          )}
        </View>
      </View>
      <View>
        <Icon
          style={styles.editIconAccount}
          name="edit"
          color={APP_MAIN_COLOR_RED}
          size={30}
        />
      </View>
      <View>
        <Text style={styles.name}>
          {firstname} {lastname}
        </Text>
        <View style={styles.detailsWrapper}>
          <Icon
            style={styles.icon}
            name="email"
            color={APP_MAIN_COLOR_RED}
            size={20}
          />
          <Text>{email}</Text>
        </View>
        <View style={styles.detailsWrapper}>
          <Icon
            style={styles.icon}
            name="call"
            color={APP_MAIN_COLOR_RED}
            size={20}
          />
          <Text>{phone}</Text>
        </View>
        <View style={styles.detailsWrapper}>
          <Icon
            style={styles.icon}
            name="location-pin"
            color={APP_MAIN_COLOR_RED}
            size={20}
          />
          <Text>{location}</Text>
        </View>
        {/*         <Text
          style={{
            fontWeight: '400',
            fontSize: 20,
            margin: 10,
          }}>
          Other details
        </Text>
        <View>
          <View style={styles.detailsWrapper}>
            <Text style={styles.details}>Gender:</Text>
            <Text>Male</Text>
          </View>
          <View style={styles.detailsWrapper}>
            <Text style={styles.details}>Gender:</Text>
            <Text>Male</Text>
          </View>
        </View> */}
      </View>
      <View style={commonUxStyles.bottomContainer}>
        <TouchableOpacity style={styles.signoutButton} onPress={onClickSignOut}>
          <Text style={styles.signoutButtonText}>SIGN OUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_BG_COLOR_WHITE,
  },
  headerTop: {
    backgroundColor: 'darkgrey',
    height: 100,
  },
  imageWrapper: {
    marginLeft: 10,
    marginTop: -75,
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 5,
    borderColor: APP_BG_COLOR_WHITE,
    borderRadius: 100,
    backgroundColor: APP_BG_COLOR_GREY,
  },
  name: {
    fontSize: 30,
    margin: 10,
  },
  detailsWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  details: {
    fontWeight: '600',
    width: 100,
    color: APP_MAIN_COLOR_RED,
    textAlign: 'right',
  },
  signoutButton: {
    width: '80%',
    borderRadius: 25,
    borderWidth: StyleSheet.hairlineWidth,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signoutButtonText: {
    color: APP_MAIN_COLOR_RED,
  },
  editIconAccount: {
    alignSelf: 'flex-end',
    margin: 10,
  },
});
