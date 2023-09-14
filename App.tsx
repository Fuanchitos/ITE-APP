import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';


import Formulario from './components/Formulario';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const newDateHandler =() =>{
    setModalVisible(false)
  }
  console.log(pacientes)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Administrador de citas {''}
        <Text style={styles.titleBold}> Veterinaria</Text>
      </Text>
      <Pressable
      style={styles.buttonStyle}
      onPress={()=>{
        setModalVisible(true)
      }}
      >
        <Text style={styles.buttonStyleText}>Nueva cita</Text>
      </Pressable>
      <Formulario
      modalVisible={modalVisible}
      newDateHandler={newDateHandler}
      pacientes = {pacientes}
      setPacientes ={setPacientes}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe5d9',
    justifyContent:'center'
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleBold:{    
    fontWeight: 'bold',
    color: '#7209b7'
  },
  buttonStyle:{
    padding:15,
    borderRadius: 17,
    backgroundColor: '#ffcad4',
    marginVertical: 10,
    marginHorizontal: 50,
  },
  buttonStyleText:{
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform:'uppercase'
  }
});

export default App;
