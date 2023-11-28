import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

//importar firebase

import appFirebase from '../credenciasles'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct } from 'firebase/firestore'
import { useEffect, useState } from 'react';

const db = getFirestore(appFirebase)

export default function ListProduct(props) {

    const [lista, setLista]= useState([])

    useEffect(() => {
        const getLista = async()=>{
            try {
                const querySnapshot = await getDocs(collection(db, 'productos'))
                const docs = []
                querySnapshot.forEach((doc) =>{
                    const { nombre, color, stock }= doc.data()
                    docs.push({
                        id: doc.id,
                        nombre,
                        color,
                        stock,
                    })
                }) 
                setLista(docs)
            } catch (error) {
                console.error(error);
            }
        }
        getLista()
    },[lista]) 

  return (
    <ScrollView>
        <TouchableOpacity style={styles.boton} onPress={()=> props.navigation.navigate('Create')}>
            <Text style={styles.textboton}>
                Agregar Productos
            </Text>
        </TouchableOpacity>
        <View>
            <Text style={styles.textTitulo}>Lista de productos</Text>
        </View>

        <View>
            {
                lista.map((list)=>(
                    <TouchableOpacity key={list.id} style={styles.botonLista}
                        onPress={()=> props.navigation.navigate('Show', {productoId: list.id})}>
                        <Text style={styles.textNombre}>{list.nombre}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    backgroundColor: 'cyan',
    height: 35,
    borderColor: 'black',
    borderWidth:1
  },
  textboton:{
    fontSize: 18,
    textAlign: 'center'
  },
  textTitulo: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18
  },
  textNombre: {
    fontSize: 16
  },
  botonLista: {
    backgroundColor: '#DDDDDD',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 3,
    padding: 5
  },
});
