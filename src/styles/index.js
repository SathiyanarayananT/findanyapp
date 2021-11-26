import {StyleSheet} from 'react-native';

export const APP_MAIN_COLOR_RED = '#E32F45';
export const APP_BG_COLOR_WHITE = '#FFFFFF';
export const APP_BG_COLOR_GREY = 'gainsboro';
export const APP_SIMPLE_BUTTON_COLOR_BLUE = '#177BD2';

const commonUxStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    height: '20%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  centerAlignContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  scrollContainerStyle: {
    paddingTop: 40,
  },
  inputView: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'gainsboro',
    borderRadius: 25,
    height: 40,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    width: '100%',
    height: 40,
  },
  underline: {
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  buttonLarge: {
    width: '80%',
    backgroundColor: APP_MAIN_COLOR_RED,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  flatlistPadding: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  buttonText: {
    color: 'white',
  },
  labelText: {
    width: '70%',
    fontSize: 13,
  },
  errorInputText: {
    width: '70%',
    fontSize: 12,
    color: 'red',
  },
  simpleInlineButton: {
    color: APP_SIMPLE_BUTTON_COLOR_BLUE,
  },
  innerTextColor: {
    color: 'grey',
  },
});

export default commonUxStyles;
