import { StyleSheet, View, SafeAreaView, ScrollView, Image, TouchableOpacity, Text } from 'react-native';

export default function Reflujo() {
  return (
    <ScrollView overScrollMode="never"> 
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <Image source={require('./../assets/icon.png')} style={styles.image}/>
          <Text style={styles.text}>Reflujo</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Boton reflujo</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f7f7',
      padding: 20,
    },
    text:{
        fontSize: 14,
        color: 'grey',
        padding: 4,
        marginVertical: 10,
        textAlign: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 25,
    },
    button: {
        backgroundColor: 'rgb(109, 193, 254)',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        alignSelf: 'center', 
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
    },
  });
  