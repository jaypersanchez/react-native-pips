import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Web3 from 'web3'

export default function App() {

  var web3 = new Web3('http://localhost:8545')

  const styles = StyleSheet.create({
    title: {
      marginTop: 16,
      paddingVertical: 8,
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
      alignItems: 'center'
    }

  });

  const [newWallet, listWallets] = useState([])
  var [walletAddress, createWallet] = useState('')


  function addWallet(address) {
    //now add new wallet address to list of wallets
    listWallets( newWallet => [...newWallet, address] )
    Alert.alert(`Wallet ${address} added to list`)
  }

  /*
  * Will need to import web3 and ethers
  */
  function generateWalletAddress()  {
    var address = '0X0';
    //address = web3.eth.accounts.create()
    createWallet(address);
    //now add new wallet to list of wallets
    addWallet(address);
    //Alert.alert('create new wallet :: ' + {walletAddress});
  }

  return (
    <View style={{flexDirection: 'column', padding:50}}>

      <View style={styles.title}>
        <Text>Your Wallet Addresses</Text>
      </View>
      <Button title='Create New Wallet' 
              onPress={generateWalletAddress} />

      <View>
        {newWallet.map( (wallet) => <Text key={wallet}>{wallet}</Text> )}
      </View>

    </View>
  
  );

}


