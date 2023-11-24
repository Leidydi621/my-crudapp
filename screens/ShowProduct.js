import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

//importar firebase

import appFirebase from '../credenciasles'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct } from 'firebase/firestore'
import { useState, useEffect } from 'react';


const db = getFirestore(appFirebase)


export default function ShowProduct(props) {

    const [product, setProduct] = useState({})

    const getProduct = async(id)=>{
        try {
            const docRef = doc(db, 'productos',id)
            const docSnap = await getDoc(docRef)
            setProduct(docSnap.data())

        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(()=>{
        getProduct(props.route.params.productoId)
    },[])

    const deleteProduct = async(id)=>{
        await deleteDoc(doc(db, 'productos', id))
        Alert.alert('exito', 'Producto eliminado con exito')
        props.navigation.navigate('List')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalle de Producto</Text>

      <Text style={styles.sub}>Nombre: {product.nombre}</Text>
      <Text style={styles.sub}>Color: {product.color}</Text>
      <Text style={styles.sub}>Stock: {product.stock}</Text>

      <TouchableOpacity style={styles.botonLista} onPress={()=>deleteProduct(props.route.params.productoId)}>
        <Text style={styles.textoNombre}>Eliminar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20
  },
  sub: {
    fontSize: 16
  },
  textoNombre: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white'
  },
  botonLista: {
    backgroundColor: 'red',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    marginBottom: 3,
    padding: 5,
    marginTop: 5,
  }
});
