import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  //CarouselItem
  item: {
    width: '100%',
    height: screenWidth,
    backgroundColor: 'purple',
    height: '50%',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },

  //UP.js
  container: {
    height: '80%',
  },
  text: {
    zIndex: 2,
    width: '100%',
    top: '60%',
    left: '7%',
    fontSize: RFValue(35),
    fontFamily: 'mt-med',
    position: 'absolute',
    backgroundColor: 'transparent',
    color: '#fff',
  },

  text2: {
    zIndex: 2,
    width: '100%',
    top: '60%',
    left: '7%',
    fontSize: RFValue(20),
    fontFamily: 'mt-med',
    position: 'absolute',
    backgroundColor: 'transparent',
    color: '#fff',
  },
});

export default styles;