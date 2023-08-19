import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Chats from './screens/Chats';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
const Tab = createBottomTabNavigator();
const App=()=> {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'chatbubbles'
              : 'chatbubbles-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
