import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function CreateProduct() {

    const initialState = {
        nombre:'',
        color:'',
        stock: '',
    }

    const [state, setState] = useState(initialState);

    const handleChange = (value, name) => {
        setState({...state, [name]: value})
    };

    const saveProduct = () => {
        console.log(state);
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
