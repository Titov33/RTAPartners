import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  boxGL: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  Fire: {
    width: null,
    resizeMode: 'contain',
    height: '40%',
    top: '30%',
  },

  //Registr
    boxU: {
        backgroundColor: 'black',
        width: '94%',
        height: '7%',
        top: '6%',
        zIndex: 1,
        },
    boxO: {
        backgroundColor: 'black',
        width: '94%',
        height: '7%',
        top: '33.5%',
        zIndex: 1,
    },
    textU: {
        width:'100%',
        height: '100%',
        left: '15%',
        top: '30%',
        fontSize: RFValue(16),
        fontFamily: 'mt-med',
    },
    textO: {
        width:'100%',
        height: '100%',
        left: '15%',
        top: '30%',
        fontSize: RFValue(16),
        fontFamily: 'mt-med',
    },
    OneU: {
        width:'4%',
        height: '20%',
        left: '9%',
        top: '-58%',
    },
    OneO: {
        width:'3%',
        height: '22%',
        left: '9%',
        top: '-60%',
    },

  //Rect
  boxRect: {
      backgroundColor: '#fff',
      top: '10%',
    },
    text1: {
        color: 'black',
        fontSize: RFValue(16),
        fontFamily: 'mt-reg',
        top: '10%',
        left: '8%',
      },
    text2: {
      color: 'black',
      fontSize: RFValue(12),
      fontFamily: 'mt-reg',
      top: '27%',
      left: '8%',
    },
    textS: {
      color: 'black',
      fontSize: RFValue(16),
      top: '18%',
      left: '15%',
    },
    line1: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      width: '89%',
      top: '16%',
      left: '5%',
    },
    line2: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      top: '18%',
      left: '5%',
      width: '89%',
    },
    One1: {
      width:'3%',
      height: '1.8%',
      left: '8%',
      top: '15.6%',
    },
});  

  export default styles;