import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // When the user presses the login button, show the email and password entered
    Alert.alert("Login Info", `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View style={myStyle.container}>
      <Image
        style={{ alignSelf: 'center', margin: 10, width: 130 }}
        resizeMode="contain"
        source={require('../image/fire.png')} 
      />
      <Text style={{ alignSelf: 'center', fontSize:30, marginBottom: 50 }} variant="displayMedium">
        Welcome To Back
      </Text>
      
            <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Nhập email"
        style={myStyle.input}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Nhập password"
        secureTextEntry={!showPassword}
        style={myStyle.input}
      />


      <Button title="Login" onPress={handleLogin} color="blue" />

      <Text style={myStyle.link}>Create New Account</Text>
      <Text style={myStyle.link}>Forgot Password</Text>
    </View>
  );
};

const myStyle = {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  link: {
    textAlign: 'center',
    color: 'blue',
    marginTop: 10,
  },
};

export default LoginScreen;
