// Logo.js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>LOGO</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  logoText: {
    fontSize: 48, 
    fontWeight: 'bold',
    color: '#007bff', 
  },
  
  },
);
