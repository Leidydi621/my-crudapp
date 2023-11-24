import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

//importar firebase

import appFirebase from '../credenciasles'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct } from 'firebase/firestore'

const db = getFirestore(appFirebase)


export default function CreateProduct(props) {

    const initialState = {
        nombre:'',
        color:'',
        stock: '',
    }

    const [state, setState] = useState(initialState);

    const handleChange = (value, name) => {
        setState({...state, [name]: value})
    };

    const saveProduct = async() => {
        try {
            await addDoc(collection(db, 'productos'), {
                ...state,
            })

            Alert.alert('Alerta', 'guardado con exito!')
            props.navigation.navigate('List')

        } catch (error) {
            console.error(error)
        }
    }

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.titulo}>
            Crear nuevo producto
        </Text>
        <View style={styles.inputGroup}>
            <TextInput  placeholder='nombre' onChangeText={(value)=>handleChange(value, 'nombre')}
             value={state.nombre}
            />
        </View>
        <View style={styles.inputGroup}>
            <TextInput placeholder='color' onChangeText={(value)=>handleChange(value, 'color')}
             value={state.color}
            />
        </View>
        <View style={styles.inputGroup}>
            <TextInput placeholder='stock'onChangeText={(value)=>handleChange(value, 'stock')}
             value={state.stock}
            />
        </View>
        <View>
            <Button title='Guardar Producto' onPress={saveProduct} />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 12,
    marginBottom: 20
  },
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup:{
    flex: 1,
    padding: 0,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  }
});
