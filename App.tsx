import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MeyerScreen from './Screens/MeyerScreen';

const Stack = createStackNavigator();

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hovedmenu</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Meyer')}
      >
        <Text style={styles.buttonText}>Start Meyer Game</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Another game coming soon!')}
      >
        <Text style={styles.buttonText}>Start Another Game</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Settings screen coming soon!')}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Help screen coming soon!')}
      >
        <Text style={styles.buttonText}>Help</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Main Menu' }} />
        <Stack.Screen name="Meyer" component={MeyerScreen} options={{ title: 'Meyer Game' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6DEFF',
    alignItems: 'center',
    justifyContent: 'flex-start',  
    padding: 20,
  },
  title: {
    fontSize: 32,  
    fontWeight: 'bold',
    color: '#333',
    marginTop: 60,  
    marginBottom: 70,  
    textAlign: 'center',  
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});