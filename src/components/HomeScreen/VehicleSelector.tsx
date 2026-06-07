import React from 'react';
import {
  View,
  TouchableOpacity, Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function VehicleSelector() {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.card}>
        <Image source={require('../../assets/images/HomeScreen/VehicleSelector/car.png')} style={{ width: '100%', height: undefined, aspectRatio: 240/62, resizeMode: 'contain' }} />
        <Text>CAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Image source={require('../../assets/images/HomeScreen/VehicleSelector/bike.png')} style={{ width: '100%', height: undefined, aspectRatio: 146/62, resizeMode: 'contain' }} />
        <Text>BIKE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
  },

  card: {
    width: 140,
    height: 100,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
  },
});