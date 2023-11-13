import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

//set up redux

export default function App() {
  return (
   <Provider store={store.js}>
    <View style={styles.container}>
      <Text>Lets Build Uber!!</Text>
      <StatusBar style="auto" />
    </View>
  </Provider>
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
