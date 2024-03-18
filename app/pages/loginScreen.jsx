import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import profile from '../../assets/profile.png'
import { app } from '../../service/firebaseConfig';
import {  getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha,setSenha] = useState('')

  const auth = getAuth(app);

  const handleLogin = async () => {

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email + '', senha);
      navigation.navigate('ContactList');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert('Conta invalida')
    }

  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>


      <Image style={{width:150,height:150,marginBottom:25}} source={profile} />

      <TextInput
        style={styles.textInput}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={text=>setEmail(text)}

      />

      <TextInput
        style={styles.textInput}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={text=>setSenha(text)}
    
      />

      <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#fff',
   justifyContent: 'center',
   alignItems: 'center',
   padding: 20
  },
  textInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#d4d4d4',
    borderRadius: 15,
    paddingLeft: 15,
    marginBottom: 15
  },
  buttonStyle: {
    width:'80%',
    height: 45,
    backgroundColor: '#4368fa',
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});