import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{flexDirection: 'column', padding:50}}>

      <View style={{borderColor:'black',borderWidth:1, padding:10}}>
        <TextInput placeholder='wallet address' />
      </View>
      <Button title='Purchase' />

    </View>
    
  );
}


