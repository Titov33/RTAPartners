import React from 'react';
import Styles from './Styles';
import {Text, View} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

export default function Recti () {
  return (
    <View style={Styles.box}>
      <Text style={Styles.text}>Партнерская программа для сотрудничества,{'\n'}обмена скидками и размещения рекламы.</Text>
      <Text style={Styles.login}>ЛОГИН</Text>
      <ResponsiveImage source={require('../../images/YkazBlack.png')} style={Styles.OneLog}/>
      <View style={Styles.line1}></View>
      <Text style={Styles.password}>ПАРОЛЬ</Text>
      <ResponsiveImage source={require('../../images/YkazBlack.png')} style={Styles.OnePass}/>
      <View style={Styles.line2}></View>
    </View>
  );
}
