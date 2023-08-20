import React from 'react';
import Styles from './Styles';
import CustomInput from '../../../CustomInput';
import { useForm } from "react-hook-form"
import { GragientTextBlue } from '../../../GragientTextBlue';
import { GragientTextSmall } from '../../../GragientTextSmall';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

export default function RTAREG({ navigation }) {
  const loadScene = () => {
    navigation.navigate('RTARK');
  }

  const {handleSubmit, control} = useForm({
    mode: 'all'
  });

  const onRegisterPressed = async data => {
    const {username, email, phonenumber} = data;
    try {
      await Auth.signUp({
        username,
        attributes: {email, phonenumber, preferred_username: username},
      });
    } catch (e) {
      Alert.alert('Опа', e.message);
    }
  }

  const USERNAME_REGEX = /^[а-яА-ЯёЁa-zA-Z]+$/;
  const PHONE_REGEX = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
  <View style={Styles.container}>
    <KeyboardAvoidingView>
      <View style={Styles.boxB}>
        <View style={[Styles.boxGL, {left: '10%'}]}>
          <ResponsiveImage source={require('../../../../images/YkazBlue.png')} style={Styles.OneR}/>
          <GragientTextBlue style={[Styles.textB, {left: '-2%'}]} text='РЕГИСТРАЦИЯ'></GragientTextBlue>
        </View>
      </View>
      <View style={Styles.spase}></View>
      <View style={Styles.line}></View>
      <View style={Styles.box}>
        <View style={Styles.OneContainer}>
          <Image source={require('../../../../images/YkazBlack.png')} style={Styles.One}/>
        </View>
        <CustomInput
          name="username"
          control={control}
          placeholder="Имя"
          rules={{
            required: 'Введите имя пользователя',
            pattern: {value: USERNAME_REGEX, message: 'В имени не должны содержаться цифры'},
            minLength: {
              value: 3,
              message: 'Имя должно быть больше 3 букв',
            },
            maxLength: {
              value: 24,
              message: 'Имя должно содержать не более 25 букв',
            },
          }}
        />
      </View>
      <View style={Styles.line}></View>
      <View style={Styles.box}>
        <View style={Styles.OneContainer}>
          <Image source={require('../../../../images/YkazBlack.png')} style={Styles.One}/>
        </View>
        <CustomInput
          name="phonenumber"
          placeholder="Телефон"
          control={control}
          rules={{
            required: 'Введите номер телефона',
            pattern: {value: PHONE_REGEX, message: 'Не верно введен номер телефона'},
          }}
        />
        </View>
      <View style={Styles.line}></View>
      <View style={Styles.box}>
        <View style={Styles.OneContainer}>
          <Image source={require('../../../../images/YkazBlack.png')} style={Styles.One}/>
        </View>
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Введите email',
            pattern: {value: EMAIL_REGEX, message: 'Не верно введен email'},
          }}
        />
      </View>
      <View style={Styles.line}></View>
      <View style={Styles.spase}></View>
      <View style={Styles.boxB}>
        <TouchableOpacity onPress={loadScene} style={Styles.boxGL}>
          <ResponsiveImage source={require('../../../../images/YkazRed.png')} style={Styles.OneG}/>
          <GragientTextSmall style={Styles.textB} text='ГОТОВО'></GragientTextSmall>
        </TouchableOpacity> 
      </View>
    </KeyboardAvoidingView>
    <Text style={Styles.text}>Пройдите регистрацию, чтобы начать работу</Text>
    <ImageBackground source={require('../../../../images/Fire1.png')} style={Styles.imageBackground}/> 
  </View>
); 
}
