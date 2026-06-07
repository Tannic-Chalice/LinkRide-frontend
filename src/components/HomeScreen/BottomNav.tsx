import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function BottomNav() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../../assets/images/HomeScreen/BottomNav/home.png')} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../../assets/images/HomeScreen/BottomNav/history.png')} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../../assets/images/HomeScreen/BottomNav/ride.png')} style={{ width: 60, height: 60 }} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../../assets/images/HomeScreen/BottomNav/wallet.png')} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../../assets/images/HomeScreen/BottomNav/profile.png')} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  centerIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});