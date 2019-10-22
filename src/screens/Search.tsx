import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'

const Search = () => (
  <View style={styles.container}>
    <View style={styles.searchContainer}>
      <SearchBar />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    height: 60,
    padding: 10,
  }
})

export default Search;