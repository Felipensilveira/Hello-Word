import { Button, Alert, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Clique Aqui"
        color="red"
        onPress={() => Alert.alert('Você clicou no botão!')}
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