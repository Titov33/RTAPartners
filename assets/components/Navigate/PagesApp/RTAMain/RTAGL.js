//Лицевая страница приложения//
import React from 'react';
import Styles from './Styles';
import RTAHead from '../../../RTAHead/RTAHead';
import UP from '../../../Carousel/UP';
import images from '../../../Carousel/images';
import { GragientText } from '../../../GragientText';
import CustomInput from '../../../CustomInput';
import { useForm } from "react-hook-form"
import ResponsiveImage from 'react-native-responsive-image';
import { 
  View, 
  TouchableOpacity, 
  Image, 
  Text,
  KeyboardAvoidingView 
} from 'react-native';

export default function RTAGL({ navigation }) {
  const loadScene = () => {
    navigation.navigate('RTAREG');
  }

  const LOGIN_REGEX = /^[а-яА-ЯёЁa-zA-Z]+$/;
  const PASSWORD_REGEX = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  const {handleSubmit, control} = useForm({
    mode: 'all'
  });

  const onJoinPressed = async data => {
    const {login, password} = data;
    try {
      await Auth.signUp({
        attributes: {login, password},
      });
    } catch (e) {
      Alert.alert('Опа', e.message);
    }
  }

  return (
  <View style={Styles.container}>
     <UP images={images}/> 
     <RTAHead/>
    <KeyboardAvoidingView>
      <Text style={Styles.text}>Партнерская программа для сотрудничества,{'\n'}обмена скидками и размещения рекламы.</Text>
      <View style={Styles.line}></View>
        <View style={Styles.Strelkacontainer}>
          <Image source={require('../../../../images/YkazBlack.png')} style={Styles.OneST}/>
        </View>
        <View style={Styles.spaceInput}>
          <CustomInput
            name="login"
            control={control}
            placeholder="Логин"
            rules={{
              required: 'Введите логин',
              pattern: {value: LOGIN_REGEX, message: 'Логин не может содержать такие символы'},
              minLength: {
                value: 3,
                message: 'Логин должен быть больше 3 букв',
              },
              maxLength: {
                value: 15,
                message: 'Логин должен содержать не более 16 букв',
              },
            }}
          />
        </View>
      <View style={Styles.line}></View>
          <View style={Styles.Strelkacontainer}>
          <Image source={require('../../../../images/YkazBlack.png')} style={Styles.OneST}/>
        </View>
        <View style={Styles.spaceInput}>
          <CustomInput 
            name="password"
            control={control}
            placeholder="Пароль"
            rules={{
              required: 'Введите пароль',
              pattern: {value: PASSWORD_REGEX, message: 'Пароль должен содержать: строчные и прописные латинские буквы, цифры, спецсимволы, минимум 8 символов'},
              maxLength: {
                value: 15,
                message: 'Пароль должен содержать не более 16 символов',
              },
            }}
          />
        </View> 
      <View style={Styles.spase}></View>
      <View style={Styles.boxB}>
        <TouchableOpacity onPress={loadScene} style={Styles.boxGL}>
          <ResponsiveImage source={require('../../../../images/YkazRed.png')} style={Styles.OneR}/>
          <GragientText style={Styles.textR} text='РЕГИСТРАЦИЯ'></GragientText>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  </View>
  ); 
}

// handleSubmit(onJoinPressed)