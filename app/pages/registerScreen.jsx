import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import profile from '../../assets/profile.png'
import { useState } from 'react';

export default function RegisterScreen({ navigation }) {

  const [email,setEmail] = useState('')
  const [nome,setNome] = useState('')
  const [senha,setSenha] = useState('')

  const cadastrar = () => {
    alert(`Cadastrado com sucesso!
    Nome: ${nome}
    Email: ${email}
    Senha: ${senha}`);
    navigation.navigate('Login');
  }

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>


      <Image style={{width:150,height:150,marginBottom:25}} source={profile} />

      
      <TextInput style={styles.textInput} placeholder='Nome' onChangeText={text=>setNome(text)}/>
      <TextInput style={styles.textInput} placeholder='Email' onChangeText={text=>setEmail(text)}/>
      <TextInput style={styles.textInput} placeholder='Senha' onChangeText={text=>setSenha(text)} secureTextEntry={true}/>

      <TouchableOpacity onPress={cadastrar} style={styles.buttonStyle}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin} style={styles.buttonStyle}>
        <Text>Voltar</Text>
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