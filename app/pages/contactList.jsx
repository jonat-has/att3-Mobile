import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import profile from '../../assets/profile.png'
import axios from 'axios';

export default function ContactListScreen({ navigation }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.18.5:3000/contatos')
      .then((response) => {
        setContacts(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [contacts]);
  

  const AlterarContato = (id) => {
    navigation.navigate('AlterarContato', {id});
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem} onPress={() => AlterarContato(item.id)} >
      <Image style={{width:50,height:50}} source={profile} />
      <View style={styles.textContainer}>
      <Text>{item.nome}</Text>
      <Text>{item.telefone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contactItem: {
    padding: 16,
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
  },
  textContainer: {
    paddingLeft:25
  }
});


