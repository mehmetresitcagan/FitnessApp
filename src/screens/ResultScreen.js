import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ResultScreen({route}) {
  const {user} = route.params;

  return (
    <View>
      <Text style={styles.success}>Signed Up Successfully</Text>
      <Text style={styles.info}>Name: {user.userName}</Text>
      <Text style={styles.info}>Surname: {user.userSurname}</Text>
      <Text style={styles.info}>Age: {user.userAge}</Text>
      <Text style={styles.info}>Email: {user.userEmail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  success: {
    fontSize: 30,
    padding: 5,
    textAlign: 'center',
  },
  info: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
  },
});

export default ResultScreen;
