import { StyleSheet, View, SafeAreaView, ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import { Card } from 'react-native-paper';
import texts from '../../texts.json';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Afeccion({ route }) {
  const navigation = useNavigation();
  const { afeccion } = route.params;
  const data = texts[afeccion];

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const renderHeader = () => (
    <View style={styles.view}>
      <Image source={require('./../../assets/icon.png')} style={styles.image}/>
      <Text style={styles.title}>{data.titulo}</Text>
      <Text style={styles.intro}>{data.intro}</Text>
    </View>
  );

  const renderFooter = () => (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Volver a Home</Text>
    </TouchableOpacity>
  );

  const renderList = (title, items) => (
    <Card style={styles.card}>
      <Card.Title title={title} titleStyle={styles.sectionTitle} />
      <Card.Content>
        {items.map((item, index) => (
          <Text key={index} style={styles.listItem}>• {item}</Text>
        ))}
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView overScrollMode='never'>
        {renderHeader()}
        {renderList('Causas comunes:', data.causas)}
        {renderList('Síntomas:', data.sintomas)}
        {renderList('Soluciones:', data.soluciones)}
        {renderFooter()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  view: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  intro: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  card: {
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 5,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});