import React from 'react';
import Styles from './Styles';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { LinearGradient } from 'expo-linear-gradient';
import { GragientText } from '../../../GragientText';

export default function RTAREG({ navigation }) {
  const loadScene = () => {
    navigation.goBack();
  }

  return (
  <View style={Styles.container}>
    <LinearGradient 
    style={Styles.container}
    start={{x: 0.3, y: 1.2}}
    end={{x: 0, y: 0}}
    locations={[0.2, 0.6, 0.9]}
    colors={['#00BFFF', '#0000ff', '#FF00FF']}
    >
      <View style={Styles.boxRTA}>
        <Image source={require('../../../../images/RTALogo.png')} style={Styles.logo}/>
        <Text style={Styles.textRTA}>РТА ТЕЛЕКОМ</Text>
      </View>
      <View style={Styles.boxB}>
        <TouchableOpacity onPress={loadScene} style={Styles.boxGL}>
          <ResponsiveImage source={require('../../../../images/YkazWhite.png')} style={Styles.One}/>
          <Text style={Styles.textB}>СКАНИРОВАТЬ КЛЮЧ</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.boxB}>
        <TouchableOpacity onPress={loadScene} style={Styles.boxGL}>
          <ResponsiveImage source={require('../../../../images/YkazRed.png')} style={Styles.One}/>
          <GragientText style={Styles.textB} text='ПРЕДОСТАВИТЬ СКИДКУ'></GragientText>
        </TouchableOpacity>
      </View>
      <Text style={Styles.text}>Скидкой могут воспользоваться клиенты{'\n'}Умных домофонов от РТА Телеком,{'\n'}у которых есть цифровой ключ.{'\n'}{'\n'}Для предоставления скидки поднесите{'\n'}ключ к смартфону.</Text>
    </LinearGradient>
  </View>
); 
}


