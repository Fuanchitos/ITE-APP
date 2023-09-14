import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
const CustomButton = ({title, onPress, customColor}) => {
  return (
    <Pressable
    style={StyleSheet.create({padding:15,
        borderRadius: 17,
        marginVertical: 10,
        marginHorizontal: 50,
    backgroundColor: customColor})}
    onPress={onPress}
    >
      <Text style={styles.buttonStyleText}>{title}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    buttonStyle:{
        padding:15,
        borderRadius: 17,
        marginVertical: 10,
        marginHorizontal: 50,
      },
      buttonStyleText:{
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform:'uppercase'
      },
})
export default CustomButton