import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import profile from '../../assets/profile.png'

export default function ContactListScreen({ navigation }) {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Jonathas', phoneNumber: '81 85911445' },
    { id: '2', name: 'Gabriel', phoneNumber: '81 93479260' },
  ]);

  const AlterarContato = () => {
    navigation.navigate('AlterarContato');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem} onPress={AlterarContato} >
      <Image style={{width:50,height:50}} source={profile} />
      <View style={styles.textContainer}>
      <Text>{item.name}</Text>
      <Text>{item.phoneNumber}</Text>
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


