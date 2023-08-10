import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({

    //Блок//
    box: {
      backgroundColor: '#fff',
      top: '-51%',
    },
    //Подзаголовок//
    text: {
      color: 'black',
      fontSize: RFValue(12),
      top: '13%',
      left: '9%',
      fontFamily: 'mt-reg',
    },
    //Логин//
    login: {
      color: 'black',
      fontSize: RFValue(16),
      top: '24%',
      left: '15%',
      fontFamily: 'mt-reg',
    },
    //Пароль//
    password: {
      color: 'black',
      fontSize: RFValue(16),
      top: '34%',
      height: '30%',
      left: '15%',
      fontFamily: 'mt-reg',
    },
    //Верхняя линия//
    line1: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      width: '89%',
      top: '10%',
    },
    //Нижняя линия//
    line2: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      top: '-6%',
      width: '89%',
    },
    //Стрелка логин//
    OneLog: {
      width:'3%',
      height: '3%',
      left: '8%',
      top: '20.2%',
    },
    //Стрелка пароль//
    OnePass: {
      width:'3%',
      height: '3%',
      left: '8%',
      top: '5%',
    },
  });
  
  export default styles;