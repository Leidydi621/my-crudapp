import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// components

import ListProduct from './screens/ListProduct';
import CreateProduct from './screens/CreateProduct';
import ShowProduct from './screens/ShowProduct';

const stack = createStackNavigator();

function MyStack(){
  return (
    <stack.Navigator>
      <stack.Screen name='List' component={ListProduct}/>
      <stack.Screen name='Create' component={CreateProduct}/>
      <stack.Screen name='Show' component={ShowProduct}/>
    </stack.Navigator>
  )
}

export default function App() {
  return (
   <NavigationContainer>
    <MyStack/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
