import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';

import { frases } from './data/frasesData';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function App() {

  const [frase, setFrase] = useState(false);
  const [textoFrase, setTextoFrase] = useState('');
  const [imagem, setImagem] = useState(require('./assets/biscoito.png'));
  const [botao, setBotao] = useState('Quebrar Biscoito');

  const quebrarBiscoito = () => {

    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    if (!frase) {

      setFrase(true);
      setTextoFrase(` "${frases[numeroAleatorio]}"`);
      setImagem(require('./assets/biscoitoAberto.png'));
      setBotao('Pegar Outro');

    } else {

      setFrase(false);
      setTextoFrase('');
      setImagem(require('./assets/biscoito.png'));
      setBotao('Quebrar Biscoito');

    }


  }

  return (
    <SafeAreaView style={styles.container}>

      <Image source={imagem} style={styles.imagem} />

      <Text style={styles.frase}>
        {textoFrase}
      </Text>

      <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>

        <View styles={styles.areaBotao}>

          <Text style={styles.textoBotao}>
            {botao}
          </Text>

        </View>

      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  imagem: {
    height: 250,
    width: 250,

  },
  frase: {
    width: '80%',
    fontSize: 20,
    color: '#dd7b22',
    margin: 0,
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 30
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 4,
  },
  areaBotao: {
    flex: 1,
    flexDirection: 'row',
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }

});