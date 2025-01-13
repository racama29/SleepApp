import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  { key: 'acidez', title: 'Acidez', image: require('./../../assets/icon.png') },
  { key: 'reflujo', title: 'Reflujo', image: require('./../../assets/icon.png') },
  { key: 'estrenimiento', title: 'Estreñimiento', image: require('./../../assets/icon.png') },
  { key: 'diarrea', title: 'Diarrea', image: require('./../../assets/icon.png') },
  { key: 'sibo', title: 'Sobrecrecimiento Bacteriano del Intestino Delgado', image: require('./../../assets/icon.png') },
  { key: 'sii', title: 'Síndrome del Intestino Irritable', image: require('./../../assets/icon.png') },
  { key: 'intolerancias', title: 'Intolerancias Alimentarias', image: require('./../../assets/icon.png') },
  { key: 'microbiota', title: 'Microbiota Intestinal', image: require('./../../assets/icon.png') },
];

export default function Home() {
  const navigation = useNavigation();

  const navigateToAfeccion = (afeccion) => {
    navigation.navigate('Afeccion', { afeccion });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => navigateToAfeccion(item.key)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  grid: {
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});