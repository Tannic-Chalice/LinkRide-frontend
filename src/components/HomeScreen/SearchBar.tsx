import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function SearchBar() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>
        🔍 Where to?
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 15,
  },

  text: {
    color: '#555',
  },
});