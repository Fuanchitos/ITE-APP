import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from './Button'

const Paciente = ({item, setModalVisible, pacienteEditar, pacienteEliminar}) => {
    const {paciente, propietario,email,telefono, date,sintomas, id} = item

    const formatearFecha = fecha =>{
        const nuevaFecha = new Date(fecha)
        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return nuevaFecha.toLocaleDateString('es-ES',opciones)
    }

    return( 
          <View style={styles.pacienteItem}>
            <Text style={styles.label}>Nombre del Paciente:</Text>
            <Text>{paciente}</Text>

            <Text style={styles.label} >Propietario:</Text>
            <Text>{propietario}</Text>

            <Text style={styles.label} >Email del propietario:</Text>
            <Text>{email}</Text>

            <Text style={styles.label} >Telefono del propietario:</Text>
            <Text>{telefono}</Text>

            <Text style={styles.label} >Fecha:</Text>
            <Text>{formatearFecha(date)}</Text>

            <Text style={styles.label} >Sintomas:</Text>
            <Text>{sintomas}</Text>
            <View style={styles.button}>
            <CustomButton
            title="Editar"
            onPress={()=>{
              setModalVisible(true)
              pacienteEditar(id)
            }}
            customColor={'#333'}/>

            <CustomButton
            title="Eliminar"
            onPress={()=>{
              pacienteEliminar(id)
            }}
            customColor={'#c82929'}/>
            </View>
          </View>
    )
}
const styles = StyleSheet.create({
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
    label:{
      fontWeight: 'bold'
    },
    button:{
        flex: 1,
        flexDirection: 'row'
    }
  });

export default Paciente