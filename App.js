import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Chats from './screens/Chats';
import React from 'react';

const App=()=> {
  return (
    <SafeAreaView style={styles.container}>
     <Chats/>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
