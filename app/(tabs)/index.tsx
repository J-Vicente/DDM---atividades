import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ContadorSimples() {

  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState('');

  function aumentar() {
    setContador(contador + 1);
    setMensagem('');
  }

  function diminuir() {
    setContador(contador - 1);
    setMensagem('');
  }

  function resetar() {
    setContador(0);
    setMensagem('Contador reiniciado!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador App</Text>

      <Text style={styles.contador}>{contador}</Text>

      <Text style={styles.mensagem}>{mensagem}</Text>

       <View style={styles.botoesContainer}>
        <TouchableOpacity style={[styles.botao, styles.diminuir]} onPress={diminuir}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.resetar]} onPress={resetar}>
          <Text style={styles.textoBotao}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.aumentar]} onPress={aumentar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ededed',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight:900,
  },
  contador: {
    fontSize: 40,
    fontWeight: 900,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    paddingHorizontal: '14%',
    paddingVertical: '10%',
    borderRadius: 150,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  mensagem:{
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  diminuir: {
    backgroundColor: '#ff6b6b',
  },
  resetar: {
    backgroundColor: '##4ecdc4',   
  },
  aumentar: {
    backgroundColor: '#5ac9a5',
  },
    botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%',
    marginBottom: 40,
  },
  botao: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900',
  },
});