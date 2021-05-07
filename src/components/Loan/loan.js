import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default class Loan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      sueldo: 0,
      prestamo: 0,
      meses: 0,
      interes: 0,
    };
  }

  _Calculo() {
    if (this.state.sueldo < 10000) {
      if (this.state.meses < 7) {
        this.setState({ interes: 2 });
        console.log(this.state.interes);
      }
    } else if (this.state.sueldo >= 10000 && this.state.sueldo <= 20000) {
      if (this.state.meses < 10) {
        this.setState({ interes: 4 });
        console.log(this.state.interes);
        console.log(this.state.meses);
      }
      console.log("Hola");
    } else if (this.state.sueldo > 20000) {
      if (this.state.meses < 25) {
        this.setState({ interes: 6 });
        console.log(this.state.interes);
      }
    }
  }
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>Realiza tu cotizacion!</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#ffffff"
          onChange={(e) => this.setState({ nombre: e.target.value })}
        />

        <TextInput
          style={styles.input}
          placeholder="Prestamo"
          placeholderTextColor="#ffffff"
          onChange={(e) => this.setState({ prestamo: e.target.value })}
        />
        <Text>Meses a pagar</Text>
        <Picker
          style={styles.picker}
          onValueChange={(value) => this.setState({ meses: value })}
        >
          <Picker.Item label="3 meses" value="3" />
          <Picker.Item label="6 meses" value="6" />
          <Picker.Item label="9 meses" value="9" />
          <Picker.Item label="12 meses" value="12" />
          <Picker.Item label="24 meses" value="24" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Suledo"
          placeholderTextColor="#ffffff"
          onChange={(e) => this.setState({ sueldo: e.target.value })}
        />
        <TouchableOpacity style={styles.btn} onPress={() => this._Calculo()}>
          <Text style={styles.btnText}>Cotizar</Text>
        </TouchableOpacity>

        <View style={styles.container}>
        <Text>
            Nombre: {this.state.nombre}
        </Text>
        <Text>
            Cantidad Solicitada: {this.state.prestamo}
        </Text>
        <Text>
            Interes: {this.state.interes}
        </Text>
        <Text>
            IVA: {(this.state.prestamo * .16)}
        </Text>
        <Text>
            Pago Mensual: {(parseFloat(this.state.prestamo * .16) + parseFloat(this.state.prestamo)+((parseFloat(this.state.prestamo * .16)+(parseFloat(this.state.prestamo) * (parseFloat(this.state.interes)/100)))))/parseFloat(this.state.meses)}
        </Text>
      </View>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
container:{
    alignItems:"flex-start"

},
  view: {
    flex: 1,
    alignItems: "center",
    color: "#15700F",
  },
  btn: {
    marginBottom: 10,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 18,
    backgroundColor: "#15700F",
    borderRadius: 20,
    padding: 10,
  },
  title: {
    fontSize: 28,
    padding: 10,
  },
  input: {
    height: 35,
    color: "#ffffff",
    marginBottom: 10,
    width: "80%",
    backgroundColor: "#15700F",
    paddingHorizontal: 20,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#00000",
  },
  picker: {
    height: 35,
    width: "80%",
    color: "#15700F",
    borderWidth: 1,
    borderColor: "#00000",
    marginBottom: 10,
  },
});
