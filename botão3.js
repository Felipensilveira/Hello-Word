import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [text, setText] = useState('Texto original');

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button
        title="Clique Aqui"
        color="red"
        onPress={() => setText('Texto alterado!')}
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