import * as React from 'react';
import { useState } from 'react'
import { validateEmail } from '../utils';
import { StyleSheet, Text, View, Image, Pressable, TextInput, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';

const showAlert = () => {
  Alert.alert("SubscribeAlert", "Thanks for subscribing, stay tuned!")
};

const SubscribeScreen = () => {
  const [email, onChangeEmail] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <ScrollView keyboardDismissMode='on-drag'>
        <Image
          style={styles.image}
          source={require("../assets/little-lemon-logo-grey.png")}
          resizeMode="contain"
        />
        <Text style={styles.text}>Subscribe to our newsletter for out latest delicious recipes!</Text>
        <TextInput
          style={[styles.inputBox, styles.button]}
          value={email}
          onChangeText={value => onChangeEmail(value)}
          placeholder={'Type Your Email...'}
          keyboardType={'email-address'}
        />
        <Pressable onPress={() => {showAlert()}} 
          style={[styles.button, validateEmail(email) ? styles.enabledSubscribeButton : styles.disabledSubscribeButton]}
          disabled={validateEmail(email) ? false : true}
          >
            <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
    margin: 30,
    marginLeft: '30%',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
  },
  button: {
    height: 40,
    width: '90%',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    margin: 12,
    justifyContent: 'center',
  },
  inputBox: {
    fontSize: 16,
    paddingLeft: 15,
  },
  enabledSubscribeButton: {
    backgroundColor: '#495E57',
  },
  disabledSubscribeButton: {
    backgroundColor: 'grey',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});


export default SubscribeScreen;
