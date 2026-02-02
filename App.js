import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('green');

  const colors = [
    { name: 'GREEN', color: 'green' },
    { name: 'BLUE', color: 'blue' },
    { name: 'BROWN', color: 'brown' },
    { name: 'YELLOW', color: 'yellow' },
    { name: 'RED', color: 'red' },
    { name: 'BLACK', color: 'black' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {colors.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, { backgroundColor: item.color }]}
          onPress={() => setBgColor(item.color)}
        >
          <Text
            style={[
              styles.text,
              item.color === 'yellow' ? { color: 'black' } : { color: 'white' }
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '85%',
    padding: 15,
    marginVertical: 30,
    borderRadius: 6,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
