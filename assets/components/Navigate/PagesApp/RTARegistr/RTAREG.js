import React from 'react';
import Styles from './Styles';
import { GragientTextBlue } from '../../../GragientTextBlue';
import { GragientTextSmall } from '../../../GragientTextSmall';
import { View, Text, TouchableOpacity } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

export default function RTAREG({ navigation }) {
  const loadScene = () => {
    navigation.navigate('RTARK');
  }

  return (
  <View style={Styles.boxGL}>
    <View style={Styles.boxR}>
      <GragientTextBlue style={Styles.textR} text='РЕГИСТРАЦИЯ'></GragientTextBlue>
      <ResponsiveImage source={require('../../../../images/YkazBlue.png')} style={Styles.OneR}/>
    </View>
    <View style={Styles.line1}></View>
    <Text style={Styles.text1}>ИМЯ</Text>
    <ResponsiveImage source={require('../../../../images/YkazBlack.png')} style={Styles.One1}/>
    <View style={Styles.line2}></View>
    <Text style={Styles.text2}>ТЕЛЕФОН</Text>
    <ResponsiveImage source={require('../../../../images/YkazBlack.png')} style={Styles.One2}/>
    <View style={Styles.line3}></View>
    <Text style={Styles.text3}>АДРЕС</Text>
    <ResponsiveImage source={require('../../../../images/YkazBlack.png')} style={Styles.One3}/>
    <View style={Styles.line4}></View>
    <View style={Styles.boxG}>
      <TouchableOpacity onPress={loadScene}>
        <GragientTextSmall style={Styles.textG} text='ГОТОВО'></GragientTextSmall>
      </TouchableOpacity>
      <ResponsiveImage source={require('../../../../images/YkazRed.png')} style={Styles.OneG}/>
    </View>
    <Text style={Styles.text}>Пройдите регистрацию, чтобы начать работу</Text>
    <ResponsiveImage source={require('../../../../images/Fire1.png')} style={Styles.Fire}/>
  </View>
); 
}
