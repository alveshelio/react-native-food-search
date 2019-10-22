import React from 'react';
import { useState } from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <View style={styles.container}>
      <Icon name='search' size={30} color='#000' />
      <TextInput
        style={styles.searchInput}
        placeholder='Search'
        autoCapitalize='none'
        autoCorrect={false}
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
        inlineImageLeft='search_icon'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f0eeee',
    borderRadius: 7,
    alignItems: 'center',
    paddingLeft: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    marginLeft: 15,
  },
})

export default SearchBar;