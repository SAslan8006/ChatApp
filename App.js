import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Chats from './screens/Chats';
import Settings from './screens/Settings';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from './src/config/constants';

const ChatsStack=createStackNavigator();
const ChatsScreen=()=>{
  return(
  <ChatsStack.Navigator screenOptions={{headerShown:false}}>
    <ChatsStack.Screen name="Chats" component={Chats} />
  </ChatsStack.Navigator>)
}

const SettingsStack=createStackNavigator();
const SettingsScreen=()=>{
  return(
  <SettingsStack.Navigator screenOptions={{headerShown:false}}>
    <SettingsStack.Screen name="Settings" component={Settings} />
  </SettingsStack.Navigator>)
}

const Tabs = createBottomTabNavigator();

const TabsScreen=()=>{return(
  <Tabs.Navigator
  screenOptions={({ route }) => ({ headerShown:false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Chats') {
        iconName = focused
          ? 'chatbubbles'
          : 'chatbubbles-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: 'green',
  })}>
    <Tabs.Screen name="Chats" component={ChatsScreen} />
    <Tabs.Screen name="Settings" component={SettingsScreen} />

  </Tabs.Navigator>
)}
const MainStack=createStackNavigator()

const App=()=> {
  return (
    <NavigationContainer>
    <MainStack.Navigator screenOptions={{headerShown:false}}>
      <MainStack.Screen name='Tabs' component={TabsScreen}/>
    </MainStack.Navigator>
  </NavigationContainer>
  );
}
export default App;

