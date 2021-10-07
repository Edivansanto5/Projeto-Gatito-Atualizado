import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {View } from 'react-native';
import { Button,Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/src/estiloGlobal/estilo';


export default function Login({navigation}) {
  let [email, setEmail] = useState("");
  let[password,setPassword] = useState("")

  const  entrar =() => {
    navigation.reset({
        index:0,
        routes:[{name:'principal'}]

    });
   
  }
  return (
    <View style={styles.container}>
      <Text h2 >Bem-Vindo ao house pets!</Text>
      <Text h3> Faça seu Cadastro para Receber Mais Informações de Nossos Serviços </Text>

      <Input
        placeholder="E-mail" 
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />
      <Input
        placeholder="E-mail" 
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry = {'true'}
      />
      <Button icon={
          <Icon
            name="arrow-right"
            size={20}
            color="white"
          />
        }
        title="Entrar"
        onPress = {() => entrar()}
      />
      <StatusBar style="auto" />
    </View>
    
  );
  //
}


