import React, {useState} from 'react';
import {Alert, Button, View} from 'react-native';

import Input from '../components/Input/Input';

function SignUpScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userEmail, setUserEmail] = useState('');

  function handleSubmit() {
    if (!userName || !userName || !userAge || !userEmail) {
      Alert.alert('Blank in formation!');
      return;
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userEmail,
    };
    navigation.navigate('Result', {user});
  }

  return (
    <View>
      <Input
        label="Name"
        placeHolder="Please enter your name..."
        onChangeText={setUserName}
      />
      <Input
        label="Surname"
        placeHolder="Please enter your surname..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Age"
        placeHolder="Please enter your age..."
        onChangeText={setUserAge}
      />
      <Input
        label="E-Mail"
        placeHolder="Please enter your e-mail..."
        onChangeText={setUserEmail}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

export default SignUpScreen;
