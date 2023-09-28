import React, { useState } from 'react';

import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import Formulario from './components/Formulario';
import Paciente from './components/Paciente';

function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [pacienteActualizado, setPacienteActualizado] = useState({})
  const newDateHandler =() =>{
    setModalVisible(false)
  }

  const pacienteEditar = id =>{
    const pacienteEditado = pacientes.filter(paciente => paciente.id === id)
    setPacienteActualizado(pacienteEditado[0])
    
  }

  const pacienteEliminar = id =>{
    Alert.alert(
    'Seguro que quiere eliminar esta cita?',
    'Una vez que elimine el paciente no se va a poder recuerar',
    [{text:'Cancelar'}, {text:'Eliminar', onPress:()=>{
      const pacientesEliminado= pacientes.filter(paciente => paciente.id !== id)
      setPacientes(pacientesEliminado)
    }}]
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Administrador de citas {''}
        <Text style={styles.titleBold}> Veterinaria</Text>
      </Text>
      <Text style={styles.textCitasHechas}>Citas hechas</Text>

      {pacientes.length === 0 ? 
      <Text style={styles.noPacientes}>No hay pacientes</Text>:
      <FlatList
        data={pacientes}
        keyExtractor={item => item.id}
        renderItem={({item})=>{
          return <Paciente item={item} setModalVisible={setModalVisible} pacienteEditar= {pacienteEditar} pacienteEliminar={pacienteEliminar}/>
        }}
        // renderItem={({ item: paciente }) => ( Aqui de la forma original que yo hice
        //   <View style={styles.pacienteItem} >
        //     <Text style={styles.label}>Nombre del Paciente:</Text>
        //     <Text>{paciente.paciente}</Text>

        //     <Text style={styles.label} >Propietario:</Text>
        //     <Text>{paciente.propietario}</Text>

        //     <Text style={styles.label} >Email del propietario:</Text>
        //     <Text>{paciente.email}</Text>

        //     <Text style={styles.label} >Telefono del propietario:</Text>
        //     <Text>{paciente.telefono}</Text>

        //     <Text style={styles.label} >Fecha:</Text>
        //     <Text>{paciente.date.toDateString()}</Text>

        //     <Text style={styles.label} >Sintomas:</Text>
        //     <Text>{paciente.sintomas}</Text>
        //   </View>
        // )}
      />
      }
      {/* <ScrollView>
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
      </ScrollView> */}
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
      pacienteActualizado = {pacienteActualizado}
      setPacienteActualizado={setPacienteActualizado}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77dd77',
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
    backgroundColor: '#fftad4',
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
  },
  noPacientes:{
    marginTop: 40,
    textAlign: "center",
    fontSize: 25,
    textTransform: 'uppercase'
  },
  lista:{
    backgroundColor: 'white',
    
  },

});


export default App;