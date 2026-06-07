import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const locations = [
  {
    title: 'Hebbal BMTC Bus Stop',
    subtitle: 'Bangalore',
  },
  {
    title: 'MS Ramaiah',
    subtitle: 'Bangalore',
  },
];

export default function SavedLocations() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
    >
      {locations.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>
            {item.title}
          </Text>

          <Text style={styles.subtitle}>
            {item.subtitle}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 15,
    marginTop: 15,
  },

  card: {
    width: 180,
    backgroundColor: '#F7F7F7',
    padding: 12,
    borderRadius: 12,
    marginRight: 10,
  },

  title: {
    fontWeight: '600',
  },

  subtitle: {
    marginTop: 4,
    color: 'gray',
  },
});