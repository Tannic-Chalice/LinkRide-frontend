import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';

import { loginAPI } from '../services/api';
import { saveAuthData } from '../services/storage';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const data = await loginAPI(email, password);
      console.log('Login success:', data);
      await saveAuthData(data.accessToken, data.refreshToken, data.user);
      navigation.replace('Home');
    } catch (error: any) {
      Alert.alert('Login Failed', error.message || 'An error occurred during login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />

        <Text style={styles.label}>College Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter college email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>
            New Registration? Sign Up
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 50,
  },
  label: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F1F1F1',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2563EB',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  link: {
    textAlign: 'center',
    marginTop: 30,
    color: '#2563EB',
  },
});