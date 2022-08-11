import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

function Input({label, placeHolder, onChangeText}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput placeholder={placeHolder} onChangeText={onChangeText} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input_container: {
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
    borderColor: '#bdbdbd',
  },
  label: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Input;
