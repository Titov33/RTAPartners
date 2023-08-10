import React from 'react';
import Styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { GragientText } from '../../../GragientText';
import { View, Text, TouchableOpacity } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

export default function RTAREG({ navigation }) {
  const loadScene = () => {
    navigation.navigate('RTASTAT');
  }
  const discount = () => {
    navigation.navigate('RTATL');
  }
  const advmanag = () => {
    navigation.navigate('RTAUR');
  }

  return (
  <View style={Styles.box}>
    <LinearGradient 
    style={Styles.box}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
    locations={[0.3, 0.5, 0.7]}
    colors={['#00BFFF', '#0000ff', '#FF00FF']}
    >
      <View style={Styles.box1}>
        <TouchableOpacity onPress={discount}>
          <GragientText style={Styles.textR} text='СДЕЛАТЬ СКИДКУ'></GragientText>
        </TouchableOpacity>
        <ResponsiveImage source={require('../../../../images/YkazRed.png')} style={Styles.One}/>
      </View>
      <View style={Styles.box2}>
        <TouchableOpacity onPress={advmanag}>
          <Text style={Styles.textR}>УПРАВЛЯТЬ РЕКЛАМОЙ</Text>
        </TouchableOpacity>
        <ResponsiveImage source={require('../../../../images/YkazWhite.png')} style={Styles.One}/>
      </View>
      <View style={Styles.box3}>
        <TouchableOpacity onPress={loadScene}>
          <Text style={Styles.textR}>СМОТРЕТЬ СТАТИСТИКУ</Text>
        </TouchableOpacity>
        <ResponsiveImage source={require('../../../../images/YkazWhite.png')} style={Styles.One}/>
      </View>
    </LinearGradient>
  </View>
); 
}
  