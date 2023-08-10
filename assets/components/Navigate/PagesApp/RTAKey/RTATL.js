import React from 'react';
import Styles from './Styles';
import { View, Text, TouchableOpacity } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { LinearGradient } from 'expo-linear-gradient';
import { GragientText } from '../../../GragientText';

export default function RTAREG({ navigation }) {
  const loadScene = () => {
    navigation.goBack();
  }

  return (
  <View style={Styles.box}>
    <LinearGradient 
    style={Styles.box}
    start={{x: 0.3, y: 1.2}}
    end={{x: 0, y: 0}}
    locations={[0.2, 0.6, 0.9]}
    colors={['#00BFFF', '#0000ff', '#FF00FF']}
    >
      <View style={Styles.boxRTA}>
        <Text style={Styles.textRTA}>РТА ТЕЛЕКОМ</Text>
        <ResponsiveImage source={require('../../../../images/RTALogo.png')} style={Styles.logo}/>
      </View>
      <View style={Styles.box1}>
        <TouchableOpacity onPress={loadScene}>
          <Text style={Styles.textR}>СКАНИРОВАТЬ КЛЮЧ</Text>
        </TouchableOpacity>
        <ResponsiveImage source={require('../../../../images/YkazWhite.png')} style={Styles.One}/>
      </View>
      <View style={Styles.box2}>
        <TouchableOpacity onPress={loadScene}>
          <GragientText style={Styles.textR} text='ПРЕДОСТАВИТЬ СКИДКУ'></GragientText>
        </TouchableOpacity>
        <ResponsiveImage source={require('../../../../images/YkazRed.png')} style={Styles.One}/>
      </View>
      <Text style={Styles.text}>Скидкой могут воспользоваться клиенты{'\n'}Умных домофонов от РТА Телеком,{'\n'}у которых есть цифровой ключ.{'\n'}{'\n'}Для предоставления скидки поднесите{'\n'}ключ к смартфону.</Text>
    </LinearGradient>
  </View>
); 
}


