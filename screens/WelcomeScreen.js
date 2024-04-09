import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image 
          style={styles.image}
          source={require("../assets/little-lemon-logo.png")}
          resizeMode="contain"
        />
        <Text style={styles.text}>Little Lemon, your local Mediterranean Bistro</Text>
      </View>

      <Pressable onPress={() => {navigation.navigate('Subscribe')}} style={styles.button}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 10,
    margin: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 20,
  },
  button: {
    fontSize: 22,
    padding: 20,
    paddingHorizontal: 100,
    marginVertical: 40,
    margin: 10,
    backgroundColor: '#495E57',
    borderColor: '#495E57',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default WelcomeScreen;
