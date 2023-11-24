import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function ListProduct(props) {
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
