//Лицевая страница приложения//
import React from 'react';
import Styles from './Styles';
import RTAHead from '../../../RTAHead/RTAHead';
import UP from '../../../Carousel/UP';
import images from '../../../Carousel/images';
import Rect from '../../../RTAMiddle/Rect';
import { GragientText } from '../../../GragientText';
import { View, TouchableOpacity } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

export default function RTAGL({ navigation }) {
  const loadScene = () => {
    navigation.navigate('RTAREG');
  }

  return (
  <View>
    <UP images={images}/>
    <RTAHead/>
    <Rect/>
    <View style={Styles.box}>
      <TouchableOpacity onPress={loadScene}>
        <GragientText style={Styles.textR} text='РЕГИСТРАЦИЯ'></GragientText>
      </TouchableOpacity>
      <ResponsiveImage source={require('../../../../images/YkazRed.png')} style={Styles.One}/>
    </View>
  </View>
  ); 
}

