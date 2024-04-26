import { Text } from "../Themed";
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Logo from '../../assets/brand/logo.svg'; // Import SVG logo

export const Header = (props) => {

  return (
    <>
      <View style={styles.header}>
        {/* <Logo width={50} height={50} style={styles.logo} /> Display SVG logo */}
        <Text style={styles.headerText}>Header</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    width: '100%',
    height: 60, // Adjust as needed
    backgroundColor: '#eee', // Adjust as needed
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  menuButton: {
    marginRight: 20,
  },
  menuText: {
    fontSize: 18,
  },
  logo: {
    marginRight: 10, // Space between logo and text
  },
  sidebar: {
    position: 'absolute',
    top: 60, // Adjust based on header height
    left: 0,
    width: 250, // Adjust as needed
    height: '100%',
    backgroundColor: '#f0f0f0', // Adjust as needed
    padding: 20,
  },
});
