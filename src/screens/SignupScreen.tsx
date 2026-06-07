import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';

const SignupScreen = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    console.log({
      name,
      phone,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>

        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />

        <Text style={styles.label}>Name</Text>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter name"
        />

        <Text style={styles.label}>Phone Number</Text>

        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
        />

        <Text style={styles.label}>College Email</Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Enter college email"
        />

        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter password"
        />

        <Text style={styles.label}>Confirm Password</Text>

        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholder="Confirm password"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSignup}>
          <Text style={styles.buttonText}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>
            Already Registered? Login here
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 40,
  },
  label: {
    marginBottom: 8,
    color: '#444',
  },
  input: {
    backgroundColor: '#F1F1F1',
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 18,
  },
  button: {
    backgroundColor: '#2563EB',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
  link: {
    textAlign: 'center',
    marginTop: 25,
    color: '#2563EB',
  },
});