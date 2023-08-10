import React from 'react';
import Styles from './Styles';
import {Text, View} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

export default function Head() {
  return (
    <View style={Styles.box}>
      <Text style={Styles.textRTA}>РТА ТЕЛЕКОМ</Text>
      <ResponsiveImage source={require('../../images/RTALogo.png')} style={Styles.logo}/>
      <ResponsiveImage source={require('../../images/logoGL1.png')} style={Styles.House}/>
    </View>
  );
}
