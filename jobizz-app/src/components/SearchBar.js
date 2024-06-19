import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Ionicons name="search-outline" size={25} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search job or position"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../assets/settings.png')} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#F2F2F3',
    borderColor: '#FBF9F7',
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 14,
    height: 50,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 14,
  },
  buttonContainer: {
    position: 'relative',
  },
  settingsIcon: {
    backgroundColor: '#F2F2F3',
    width: 50,
    height: 48,
    borderRadius: 15
  },
});
export default SearchBar;