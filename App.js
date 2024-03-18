
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IconButton from './app/components/iconButton';

import LoginScreen from './app/pages/loginScreen';
import RegisterScreen from './app/pages/registerScreen';
import ContactListScreen from './app/pages/contactList';
import AlterarContato from './app/pages/changeContact';
import AdicionarContato from './app/pages/addContact';

const Stack = createStackNavigator();

const AddContactButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('AdicionarContato');
  };

  return <IconButton onPress={handlePress} />;
};

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AdicionarContato" component={AdicionarContato} options={{title: 'Adicionar Contato'}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{title: 'Cadastrar'}} />
        <Stack.Screen
          name="ContactList"
          component={ContactListScreen}
          options={{
            title: 'Lista de Contatos',
            headerRight: () => <AddContactButton />,
          }}
        />
        <Stack.Screen name="AlterarContato" component={AlterarContato} options={{title: 'Alterar Contato'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
