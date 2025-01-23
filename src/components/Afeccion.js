import { StyleSheet, View, SafeAreaView, ScrollView, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { Card } from 'react-native-paper';
import texts from '../../texts.json';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Afeccion({ route }) {
  const navigation = useNavigation();
  const { afeccion } = route.params;
  const data = texts[afeccion];
  const [showConsejos, setShowConsejos] = useState(false);


  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const getImageSource = (imageName) => {
    switch (imageName) {
      case 'acidez.png':
        return require('./../../assets/acidez.png');
      case 'reflujo.png':
        return require('./../../assets/reflujo.png');
      case 'estreñimiento.png':
        return require('./../../assets/estreñimiento.png');
      case 'diarrea.png':
        return require('./../../assets/diarrea.png');
      case 'hinchazon.png':
        return require('./../../assets/sibo.png');
      case 'enfermedad intestinal.png':
        return require('./../../assets/enfermedad intestinal.png');
      case 'iintolerancia.png':
        return require('./../../assets/iintolerancia.png');
      case 'sibo.png':
        return require('./../../assets/sibo.png');

      default:
        return require('./../../assets/icon.png');
    }
  };

  const renderHeader = () => (
    <View style={styles.view}>
      <Image source={getImageSource(data.imagen)} style={styles.image}/>
      <Text style={styles.title}>{data.titulo}</Text>
      <Text style={styles.intro}>{data.intro}</Text>
    </View>
  );

  const renderFooter = () => (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Volver</Text>
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

  const renderConsejos = () => (
    <Card style={styles.card}>
      <Card.Title title="Consejos" titleStyle={styles.sectionTitle} />
      <Card.Content>
        {data.consejos.map((item, index) => (
          <Text key={index} style={styles.listItem}>• {item}</Text>
        ))}
      </Card.Content>
    </Card>
  );
  
  const handleEmailPress = () => {
    const email = 'mailto:?subject=Consulta&body=Hola, tengo una consulta sobre...';
    Linking.openURL(email).catch((err) => console.error('Error al abrir el correo:', err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView overScrollMode='never'>
        {renderHeader()}
        {renderList('Causas comunes:', data.causas)}
        {renderList('Síntomas:', data.sintomas)}
        {renderList('Soluciones:', data.soluciones)}
        <TouchableOpacity style={styles.button} onPress={() => setShowConsejos(!showConsejos)}>
          <Text style={styles.buttonText}>{showConsejos ? 'Ocultar Consejos' : 'Mostrar Consejos'}</Text>
        </TouchableOpacity>
        {showConsejos && renderConsejos()}
        <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
          <Text style={styles.buttonText}>Enviar Correo</Text>
        </TouchableOpacity>
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
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 40,
    marginBottom: 15,
    tintColor: '#1983c6',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1983c6',
    marginBottom: 10,
  },
  intro: {
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1983c6',
  },
  card: {
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  listItem: {
    fontSize: 19,
    paddingVertical: 5,
    color: '#333',
  },
  button: {
    backgroundColor: '#1983c6',
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