import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    box: {
      height: '100%',
    },
  
    box1: {
      backgroundColor: '#fff',
      width: '94%',
      height: '7%',
      top: '35%',
    },
    box2: {
      backgroundColor: 'black',
      width: '94%',
      height: '7%',
      top: '40%',
    },
    box3: {
      backgroundColor: 'black',
      width: '94%',
      height: '7%',
      top: '45%',
    },
    textR: {
      width:'100%',
      height: '100%',
      left: '17%',
      top: '30%',
      fontSize: RFValue(16),
      fontFamily: 'mt-med',
      color: '#fff',
    },
    textRS: {
      width:'100%',
      height: '100%',
      left: '15%',
      top: '30%',
      fontSize: RFValue(16),
      fontFamily: 'mt-bold',
      color: '#000',
    },
    One: {
      width:'3%',
      height: '22%',
      left: '10%',
      top: '-60%',
    },
  });
  
  export default styles;