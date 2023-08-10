import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    box: {
        height: '100%',
    },
    box1: {
        backgroundColor: 'black',
        width: '94%',
        height: '7%',
        top: '37%',
    },
    box2: {
        backgroundColor: 'black',
        width: '94%',
        height: '7%',
        top: '42%',
    },
    boxRTA: {
        left: '40%',
        top: '10%',
        width: '100%',
        height: '10%',
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
    One: {
        width:'3%',
        height: '22%',
        left: '10%',
        top: '-60%',
    },
    text: {
        color: '#fff',
        fontSize: RFValue(14),
        top: '46%',
        left: '9%',
        fontFamily: 'mt-reg',
    },
    textRTA: {
        color: '#fff',
        fontSize: RFValue(21),
        top: '60%',
        left: '-5%',
        fontFamily: 'mt-med',
    },
    logo: {
        width:'20%',
        height: '70%',
        top: '5%',
        left: '-25%',
    },
  });
  
  export default styles;