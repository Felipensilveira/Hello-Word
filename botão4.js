import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Button
        title="Clique Aqui"
        color="red"
        onPress={() => setBackgroundColor(backgroundColor === '#ffffff' ? '#ffcccb' : '#ffffff')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});