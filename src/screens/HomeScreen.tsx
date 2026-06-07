import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from '../components/HomeScreen/Header';
import MapSection from '../components/HomeScreen/MapSection';
import SearchBar from '../components/HomeScreen/SearchBar';
import SavedLocations from '../components/HomeScreen/SavedLocation';
import VehicleSelector from '../components/HomeScreen/VehicleSelector';
import BottomNav from '../components/HomeScreen/BottomNav';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />

      <MapSection />

      <SearchBar />

      <SavedLocations />

      <VehicleSelector />

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});