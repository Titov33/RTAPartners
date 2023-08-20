import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; // RFPercentage - значение в %

const styles = StyleSheet.create({
  // Основной контейнер
  container: {
    flex: 1,
    top: '5%',
    backgroundColor: '#fff',
  },

  // down png
  imageBackground: {
    width: '100%',
    resizeMode: 'stretch',
    flex: 1,
  },

  // black box
  boxB: {
    backgroundColor: 'black',
    width: '94%',
    height: RFValue(52), 
  },
    boxGL:  {
    top: '5%',
    left: '15%',
    paddingHorizontal: RFValue(25),
    flexDirection: 'row',
    paddingVertical: RFValue(3),
  },
  textB: {
    width:'100%',
    height: '100%',
    fontSize: RFValue(16),
    fontFamily: 'mt-med',
    color: 'black',
    top: '-10%',
    marginHorizontal: RFValue(10),
  },
  OneR: {
    width:'5%',
    height: '26%',
    resizeMode: 'cover',
  },
  OneG: {
    width:'4%',
    height: '28%',
    resizeMode: 'cover',
  },

  // input and line
  box: {
    // flexDirection: 'row',
    top: '-5%',
    height: RFValue(20),
    marginVertical: RFValue(20),
    left: RFValue(55),
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: RFValue(1),
    marginVertical: RFValue(7),
    left: '5%',
    width: '89%',
  },
  One: {
    width:'100%',
    height: '100%',
    resizeMode: 'cover',
  },
  OneContainer: {
    top: '90%',
    left: '-7%',
    width:'4%',
    height: '80%',
  },
  text: {
    color: 'black',
    fontSize: RFValue(14),
    marginVertical: RFValue(20),
    left: '10%',
  },
  spase: {
    marginVertical: RFValue(10),
  },
  });

  export default styles;