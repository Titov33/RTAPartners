//Стили//
import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  //Черный блок//
    box: {
      backgroundColor: 'black',
      width: '94%',
      height: '7%',
      top: '-47.5%',
      zIndex: 1,
    },
  //Логотип//
    logo: {
      width:'20%',
      height: '50%',
      left: '4%',
      top: '-55%',
    },
  //Логотип дома//
    House: {
      width:'6%',
      height:'31%',
      left: '85%',
      top: '-95%',
    },
  //Стиль для текста//
    textRTA: {
      color: 'white',
      height: '80%',
      left: '21%',
      top: '37%',
      fontSize: RFValue(16),
      fontFamily: 'mt-med',
    },
  });
  
  export default styles;