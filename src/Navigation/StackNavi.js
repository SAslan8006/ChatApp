import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Chats from './screens/Chats';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Home=({navigation})=>{
  return(
    <SafeAreaView>
      <Text style={styles.text}>Home</Text>
      <Button title='Go to Settings screen' onPress={()=>{navigation.navigate("Settings")}}/>
    </SafeAreaView>
  )
}

const Settings=({navigation})=>{
  return(
    <SafeAreaView>
      <Text style={styles.text}>Settings</Text>
      <Button title='Go to Home screen' onPress={()=>{navigation.navigate("Home")}}/>      
    </SafeAreaView>
  )
}
const MainStack=createNativeStackNavigator()
const App=()=> {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home" mode="modal">
        <MainStack.Screen name='Home' component={Home}/>
        <MainStack.Screen name='Settings' component={Settings} /> 
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
