import { StyleSheet,Modal, SafeAreaView, Text, Button, TextInput, View, Pressable, StatusBar, ScrollView, Alert } from "react-native"
import CustomButton from "./Button"
import DatePicker from "react-native-date-picker"
import React, { useState } from 'react';
const Formulario =({modalVisible, newDateHandler, setPacientes,pacientes}) =>{
   
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [date, setDate] = useState(new Date())
    const [sintomas, setSintomas] = useState('')

    const handleAppointment =() =>{
        if([paciente, propietario, email,telefono,sintomas].includes('')){
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios',
                [{text:'Entendido'}],
            )
            return  
        }

        const nuevoPaciente ={
            id: Date.now(),
            paciente,
            propietario,
            email,
            telefono,
            date,
            sintomas
        }
        setPacientes([...pacientes,nuevoPaciente])
        ClearFields()
        newDateHandler();

    }
    const ClearFields =() =>{
        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setDate(new Date())
        setSintomas('')
    }
    return(
        <Modal animationType='slide' visible={modalVisible}>
            <StatusBar backgroundColor={'#333'}/>
            <ScrollView>
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Nueva {''}
            <Text style={styles.titleBold}>Cita</Text>
        </Text>
        <CustomButton title ={'CANCELAR'}
        onPress={()=>{
            newDateHandler()
        }}
        customColor={'#edede9'}
        />
        <View style={styles.group}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput 
            value={paciente}
            onChangeText={setPaciente}
            style={styles.input}
            placeholder="Nombre paciente" 
            />

            <Text style={styles.label}>Nombre propietario</Text>
            <TextInput 
             value={propietario}
             onChangeText={setPropietario}
            style={styles.input}
            placeholder="Nombre propietario" 
            />

            <Text style={styles.label}>Email propietario</Text>
            <TextInput 
             value={email}
             onChangeText={setEmail}
            style={styles.input}
            placeholder="Email propietario" 
            keyboardType='email-address'
            />
             <Text style={styles.label}>Telefono propietario</Text>
            <TextInput 
             value={telefono}
             onChangeText={setTelefono}
            style={styles.input}
            placeholder="Telefono propietario" 
            keyboardType='numeric'
            />
            
        </View>
        <View style={styles.group}>
            <Text style={styles.label}>Fecha</Text>
            <DatePicker 
            date={date}
            textColor="green"
        />
        </View>
        <TextInput style={[styles.input, styles.inputSymptoms]}
        value={sintomas}
        onChangeText={setSintomas}
        placeholder="Sintomas"
        multiline ={true}
        placeholderTextColor={"#666"}
        />
        <CustomButton 
        title ={'Registrar'}
        onPress={()=>{
            handleAppointment()
        }}
        customColor={'#edede9'}
        />
        </SafeAreaView>
        </ScrollView>
      </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5', // Color de fondo más claro
    },
    group: {
      marginTop: 10,
      marginHorizontal: 20, // Menos margen horizontal
      marginBottom: 10,
    },
    input: {
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: '#FFFFFF', // Fondo blanco
      padding: 12, // Más espacio de relleno
      borderRadius: 8, // Bordes más redondeados
      borderWidth: 1, // Agregamos un borde
      borderColor: '#E0E0E0', // Color del borde
    },
    label: {
      fontSize: 18, // Tamaño de fuente ligeramente más pequeño
      fontWeight: '600',
      color: '#333333', // Color de texto más oscuro
      marginTop: 10, // Menos espacio superior
    },
    title: {
      fontSize: 24, // Tamaño de fuente más pequeño
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: 20, // Más espacio inferior
    },
    titleBold: {
      fontWeight: '700', // Fuente más negra
    },
    inputSymptoms: {
      height: 80, // Altura del cuadro de entrada de síntomas reducida
      marginBottom: 15, // Más espacio inferior
    },
  });
  
export default Formulario