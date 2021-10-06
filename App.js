import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button,Input, Text } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';

export default function App() {
  let [email, setEmail] = useState("");
  let[password,setPassword] = useState("")
   function entrar() {
    console.log(email)
    console.log(password)
  }
  return (
    <View style={styles.container}>
      <Text h2 >Bem-Vindo ao house pets!</Text>
      <Text h3> Faça seu Cadastro para Receber Mais Informações de Nossos Serviço </Text>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
