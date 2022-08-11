import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

function HomeScreen({navigation}) {
  function goToSignUpScreen() {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the App</Text>
      <Button title="Sign Up" onPress={goToSignUpScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default HomeScreen;
