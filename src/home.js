import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';

export default function App() {
  const [selectedSex, setSelectedSex] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedTabaco, setSelectedTabaco] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  const areas = [
    { id: 1, name: "Reflujo", image: require('./assets/icon.png') },
    { id: 2, name: "Acidez", image: require('./assets/icon.png') },
    { id: 3, name: "Estreñimiento", image: require('./assets/icon.png') },
    { id: 4, name: "Diarrea", image: require('./assets/icon.png') },
    { id: 5, name: "SIBO", image: require('./assets/icon.png') },
    { id: 6, name: "Intestino irritable", image: require('./assets/icon.png') },
    { id: 7, name: "Helicobacter pylori", image: require('./assets/icon.png') },
    { id: 8, name: "Hinchazón y gases", image: require('./assets/icon.png') },
    { id: 9, name: "Intolerancias", image: require('./assets/icon.png') },
    { id: 10, name: "Digestión pesada", image: require('./assets/icon.png') },
  ];

  const handleSubmit = () => {
    if (!selectedSex || !selectedAge || !selectedTabaco || !selectedArea) {
      Alert.alert("Error", "Por favor, completa todos los campos antes de enviar.");
      return;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Formulario</Text>

      {/* Sexo */}
      <Text style={styles.label}>Sexo:</Text>
      <View style={styles.optionsContainer}>
        {['Hombre', 'Mujer', 'Otros'].map((sex) => (
          <TouchableOpacity
            key={sex}
            style={[
              styles.optionButton,
              selectedSex === sex && styles.selectedOptionButton,
            ]}
            onPress={() => setSelectedSex(sex)}
          >
            <Text
              style={[
                styles.optionText,
                selectedSex === sex && styles.selectedOptionText,
              ]}
            >
              {sex}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Edad */}
      <Text style={styles.label}>Edad:</Text>
      <View style={styles.optionsContainer}>
        {['30-45', '46-55', '56-65', 'Mayor de 65'].map((age) => (
          <TouchableOpacity
            key={age}
            style={[
              styles.optionButton,
              selectedAge === age && styles.selectedOptionButton,
            ]}
            onPress={() => setSelectedAge(age)}
          >
            <Text
              style={[
                styles.optionText,
                selectedAge === age && styles.selectedOptionText,
              ]}
            >
              {age}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tabaco */}
      <Text style={styles.label}>Tabaco:</Text>
      <View style={styles.optionsContainer}>
        {['Fumo', 'No fumo', 'Deje de fumar'].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              selectedTabaco === option && styles.selectedOptionButton,
            ]}
            onPress={() => setSelectedTabaco(option)}
          >
            <Text
              style={[
                styles.optionText,
                selectedTabaco === option && styles.selectedOptionText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Áreas de mejora */}
      <Text style={styles.label}>Áreas de mejora:</Text>
      <View style={styles.areasContainer}>
        {areas.map((area) => (
          <TouchableOpacity
            key={area.id}
            style={[
              styles.areaCard,
              selectedArea === area.name && styles.selectedAreaCard,
            ]}
            onPress={() => setSelectedArea(area.name)}
          >
            <View style={styles.areaImage}>
              {/* Imagen de ejemplo (puedes reemplazar con imágenes reales) */}
              {area.image ? (
                <Image source={area.image} style={styles.image} />
              ) : (
                <Text style={styles.imagePlaceholder}>Img</Text>
              )}
            </View>
            <Text
              style={[
                styles.areaText,
                selectedArea === area.name && styles.selectedOptionText,
              ]}
            >
              {area.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 5,
  },
  selectedOptionButton: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  optionText: {
    fontSize: 16,
  },
  selectedOptionText: {
    color: '#fff',
  },
  areasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  areaCard: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  selectedAreaCard: {
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
  },
  areaImage: {
    width: 50,
    height: 50,
    backgroundColor: '#eee',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  imagePlaceholder: {
    color: '#aaa',
  },
  areaText: {
    fontSize: 14,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
