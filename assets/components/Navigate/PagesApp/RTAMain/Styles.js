import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({
    box: {
      backgroundColor: 'black',
      width: '94%',
      height: '7%',
      top: '-67%',
    },
    textR: {
      width:'100%',
      height: '100%',
      left: '15%',
      top: '32%',
      fontSize: RFValue(16),
      fontFamily: 'mt-med',
    },
    One: {
      width:'3%',
      height: '16%',
      left: '9%',
      top: '-60%',
    },
  });

  export default styles;