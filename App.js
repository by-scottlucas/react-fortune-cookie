import React, { useState } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native-web';

import cookieSoundFile from './assets/crumple-92100.mp3';
import { phrases } from './data/phrasesData';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function App() {
  const [phrase, setPhrase] = useState(false);
  const [textPhrase, setTextPhrase] = useState('');
  const [image, setImage] = useState(require('./assets/biscoito.png'));
  const [button, setButton] = useState('Quebrar Biscoito');
  const cookieSound = new Audio(cookieSoundFile);

  const breakCookie = () => {
    let randomNumber = Math.floor(Math.random() * phrases.length);

    if (!phrase) {
      setPhrase(true);
      cookieSound.play();
      setTextPhrase(` "${phrases[randomNumber]}"`);
      setImage(require('./assets/biscoitoAberto.png'));
      setButton('Pegar Outro');
    } else {
      setPhrase(false);
      setTextPhrase('');
      setImage(require('./assets/biscoito.png'));
      setButton('Quebrar Biscoito');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.phrase}>{textPhrase}</Text>

      <TouchableOpacity style={styles.button} onPress={breakCookie}>
        <View style={styles.areaButton}>
          <Text style={styles.textButton}>{button}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  image: {
    height: 250,
    width: 250,
  },
  phrase: {
    width: '80%',
    fontSize: 20,
    color: '#dd7b22',
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 4,
  },
  areaButton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});
