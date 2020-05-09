import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const App: React.FC = () => (
  <View style={styles.container}>
    <Image
      source={{
        uri:
          'https://i.pinimg.com/originals/45/32/f9/4532f92e4e002bb591ede7ce7ff95e15.png',
      }}
      style={{
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      }}
    />
    <Text style={styles.texto}>Je mange une orange</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },

  texto: {
    fontSize: 22,
    color: '#fff',
  },
});

export default App;
