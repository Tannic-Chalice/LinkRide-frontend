import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MapSection() {
  return (
    <View style={styles.map}>
      <Text>Mapbox Map Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 250,
    marginHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#DCEEFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});