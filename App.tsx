import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Formulario from './components/Formulario';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
type Paciente = {
  paciente: string;
  propietario: string;
  email: string;
  telefono: string;
  date: Date;
  sintomas: string;
};
function App(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const newDateHandler =() =>{
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Administrador de citas {''}
        <Text style={styles.titleBold}> Veterinaria</Text>
      </Text>
      <View>
      <Text style={styles.textCitasHechas}>Citas hechas</Text>
      {pacientes.map((paciente, index) => (
          <View style={styles.pacienteItem} key={index}>
            <Text style={styles.label}>Nombre del Paciente:</Text>
            <Text>{paciente.paciente}</Text>
            
            <Text style={styles.label}>Propietario:</Text>
            <Text>{paciente.propietario}</Text>
            
            <Text style={styles.label}>Email del propietario:</Text>
            <Text>{paciente.email}</Text>
            
            <Text style={styles.label}>Telefono del propietario:</Text>
            <Text>{paciente.telefono}</Text>
            
            <Text style={styles.label}>Fecha:</Text>
            <Text>{paciente.date.toDateString()}</Text>
            
            <Text style={styles.label}>Sintomas:</Text>
            <Text>{paciente.sintomas}</Text>
          </View>
        ))}
      </View>

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
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleBold: {
    fontWeight: 'bold',
    color: '#7209b7',
  },
  buttonStyle: {
    padding: 15,
    borderRadius: 17,
    backgroundColor: '#ffcad4',
    marginVertical: 10,
    marginHorizontal: 50,
  },
  buttonStyleText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  pacienteItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    elevation: 3, // Sombreado para Android
    shadowColor: '#000', // Sombreado para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  textCitasHechas:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label:{
    fontWeight: 'bold'
  }
});


export default App;