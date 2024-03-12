import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function AlterarContato({ route, navigation }) {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const { id } = route.params;

  useEffect(() => {
    axios.get(`http://192.168.18.5:3000/contatos/${id}`)
      .then((response) => {
        const contato = response.data;
        setNome(contato.nome);
        setEmail(contato.email);
        setTelefone(contato.telefone);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const Voltar = () => {
    navigation.navigate('ContactList');
  }

  const Alterar = () => {
    const dadosAtualizados = {
      nome: nome,
      email: email,
      telefone: telefone,
    };

    axios.put(`http://192.168.18.5:3000/contatos/${id}`, dadosAtualizados)
      .then((response) => {
        console.log(response);
        Voltar();
      })
      .catch((error) => {
        console.error(error);
      });

      Voltar()
  };

  const Excluir = () => {
    axios.delete(`http://192.168.18.5:3000/contatos/${id}`)
      .then((response) => {
        console.log(response);
        Voltar();
      })
      .catch((error) => {
        console.error(error);
      });

      Voltar()
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder='Nome' onChangeText={text => setNome(text)} value={nome} />
      <TextInput style={styles.textInput} placeholder='Email' onChangeText={text => setEmail(text)} value={email} />
      <TextInput style={styles.textInput} placeholder='Telefone' onChangeText={text => setTelefone(text)} value={telefone} />

      <TouchableOpacity onPress={Alterar} style={styles.buttonStyle}>
        <Text>Alterar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={Excluir} style={styles.buttonStyle}>
        <Text>Excluir</Text>
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
    width: '80%',
    height: 45,
    backgroundColor: '#4368fa',
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
