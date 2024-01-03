import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      textoFrase: "",
      img: require('./assets/biscoito.png'),
    };

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = [
      "A vida trará coisas boas se tiver paciência.",
      "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
      "Não compense na ira o que lhe falta na razão.",
      "Defeitos e virtudes são apenas dois lados da mesma moeda.",
      "A maior de todas as torres começa no solo.",
      "Não há que ser forte.Há que ser flexível.",
    ]
  }

  quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./assets/biscoitoAberto.png')
    })
  }


  render() {

    return (
      <View style={styles.container}>

        <Image source={this.state.img} style={styles.img} />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2'
  },
  img: {
    height: 250,
    width: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 4,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }

});