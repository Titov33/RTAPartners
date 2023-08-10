import React from 'react';
import Styles from './Styles';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ResponsiveImage from 'react-native-responsive-image';

export default function RTAREG({ navigation }) {
  const loadScene = () => {
    navigation.goBack();
  }

  return (
  <View style={Styles.box}>
    <LinearGradient 
    style={Styles.box}
    start={{x: 0, y: 0.5}}
    end={{x: 1, y: 0.55}}
    locations={[0.1, 0.5, 0.8]}
    colors={['#00BFFF', '#0000ff', '#FF00FF']}
    >
      <View style={Styles.box1}>
        <Text style={Styles.textRS}>СТАТИСТИКА</Text>
      </View>
      <View style={Styles.box2}>
        <TouchableOpacity onPress={loadScene}>
          <Text style={Styles.textR}>ВСЕГО СКИДОК</Text>
        </TouchableOpacity>
        <ResponsiveImage source={require('../../../../images/YkazWhite.png')} style={Styles.One}/>
      </View>
      <View style={Styles.box3}>
        <TouchableOpacity onPress={loadScene}>
          <Text style={Styles.textR}>ПОКАЗОВ ВИДЕО</Text>
        </TouchableOpacity>
        <ResponsiveImage source={require('../../../../images/YkazWhite.png')} style={Styles.One}/>
      </View>
    </LinearGradient>
  </View>
); 
}

  