import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function AdicionarContato({ navigation }) {

  const [email,setEmail] = useState('')
  const [nome,setNome] = useState('')
  const [telefone,setTelefone] = useState('')


  const Salvar = () => {

    const data = {
      email: email,
      nome: nome,
      telefone: telefone,
    }


    axios.post('http://192.168.18.5:3000/contatos', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    navigation.navigate('ContactList');
  };

  return (
    <View style={styles.container}>
      
      <TextInput style={styles.textInput} placeholder='Nome' onChangeText={text=>setNome(text)}/>
      <TextInput style={styles.textInput} placeholder='Email' onChangeText={text=>setEmail(text)}/>
      <TextInput style={styles.textInput} placeholder='Telefone' onChangeText={text=>setTelefone(text)}/>

      <TouchableOpacity onPress={Salvar} style={styles.buttonStyle}>
        <Text>Salvar</Text>
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