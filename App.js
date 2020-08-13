import React, { useState } from 'react';  
import { View, Text, Button, StyleSheet, TextInput, FlatList, ActivityIndicator, Image } from 'react-native';  
import { createAppContainer } from 'react-navigation';  
import { createStackNavigator } from 'react-navigation-stack';  
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { useSafeArea } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import hScreen from './src/screens/HomeScreen.js';
import NewsScreen from './src/screens/NewsScreen.js';
import DetailScreen from './src/screens/DetailScreen.js';





const AppNavigator = createStackNavigator(  
  {  
      Home: hScreen,  
      NewsList: NewsScreen,
      Detail: DetailScreen
  },  
  {  
      initialRouteName: "Home"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
  render() {  
      return <AppContainer />;  
  }  
}  