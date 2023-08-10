import React from 'react';
import Styles from './Styles';
import { GragientText } from '../../../GragientText';
import { GragientTextBlue } from '../../../GragientTextBlue';
import { View, Text, TouchableOpacity } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

export default function RTAREG({ navigation }) {
  const loadScene = () => {
    navigation.navigate('RTARK');
  }

  return (
  <View style={Styles.boxGL}>
    <View style={Styles.boxU}>
      <GragientTextBlue style={Styles.textU} text='УПРАВЛЕНИЕ РЕКЛАМОЙ'></GragientTextBlue>
      <ResponsiveImage source={require('../../../../images/YkazBlue.png')} style={Styles.OneU}/>
    </View>
    <Text style={Styles.text1}>Вставьте ссылку для{'\n'}скачивания видео</Text>
    <View style={Styles.line1}></View>
    <Text style={Styles.textS}>CСЫЛКА</Text>
    <ResponsiveImage source={require('../../../../images/YkazBlack.png')} style={Styles.One1}/>
    <View style={Styles.line2}></View>
    <Text style={Styles.text2}>Разрешение видео - 1080р,{'\n'}Формат - mp4,{'\n'}Длительность - не более 30 сек.</Text>
    <View style={Styles.boxO}>
      <TouchableOpacity onPress={loadScene}>
        <GragientText style={Styles.textO} text='ОТПРАВИТЬ'></GragientText>
      </TouchableOpacity>
      <ResponsiveImage source={require('../../../../images/YkazRed.png')} style={Styles.OneO}/>
    </View>
    <ResponsiveImage source={require('../../../../images/Fire2.png')} style={Styles.Fire}/>
  </View>
); 
}


