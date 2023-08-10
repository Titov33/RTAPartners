import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    boxGL: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
    },
    Fire: {
      width: '100%',
      resizeMode: 'stretch',
      height: '40%',
      top: '33%',
    },
  
    //Registr
    boxR: {
        backgroundColor: 'black',
        width: '94%',
        height: '7%',
        top: '6%',
        zIndex: 1,
    },
    boxG: {
        backgroundColor: 'black',
        width: '94%',
        height: '7%',
        top: '26%',
        zIndex: 1,
    },
    textR: {
        width:'100%',
        height: '100%',
        color: 'blue',
        left: '15%',
        top: '30%',
        fontSize: RFValue(16),
        fontFamily: 'mt-med',
    },
    textG: {
        width:'100%',
        height: '100%',
        left: '15%',
        top: '30%',
        fontSize: RFValue(16),
        fontFamily: 'mt-med',
  },
    OneR: {
        width:'4%',
        height: '20%',
        left: '9%',
        top: '-58%',
    },
    OneG: {
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
      text: {
        color: 'black',
        fontSize: RFValue(14),
        top: '29.5%',
        left: '10%',
        zIndex: 1,
      },
      text1: {
        color: 'black',
        fontSize: 16,
        top: '12.7%',
        left: '15%',
      },
      text2: {
        color: 'black',
        fontSize: 16,
        top: '16.7%',
        left: '15%',
      },
      text3: {
        color: 'black',
        fontSize: 16,
        top: '20.7%',
        left: '15%',
      },
      line1: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        top: '10%',
        left: '5%',
        width: '89%',
      },
      line2: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '89%',
        top: '14%',
        left: '5%',
      },
      line3: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        top: '18%',
        left: '5%',
        width: '89%',
      },
      line4: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        top: '22%',
        left: '5%',
        width: '89%',
      },
      One1: {
        width:'3.3%',
        height: '1.8%',
        left: '9%',
        top: '10.6%',
      },
      One2: {
        width:'3.3%',
        height: '1.8%',
        left: '9%',
        top: '14.6%',
      },
      One3: {
        width:'3.3%',
        height: '1.8%',
        left: '9%',
        top: '18.6%',
      },
  });

  export default styles;