import React from 'react'
import { View, StyleSheet, Text, AsyncStorage } from 'react-native'
import Header from './Components/Header'
import Body from './Components/Body'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})

class AddTarea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tareas: [],
      texto: '',
      cargando: true,
    }
  }

  // Se carga solamente una vez
  componentDidMount() {
    this.recuperarEnElTelefono()
  }

  establecerTexto = value => {
    this.setState({
      texto: value,
    })
  }

  agregarTarea = () => {
    const nuevasTareas = [
      ...this.state.tareas,
      { texto: this.state.texto, key: Date.now() },
    ]
    this.guardarEnTelefono(nuevasTareas)
    this.setState({
      tareas: nuevasTareas,
      texto: '',
    })
  }

  guardarEnTelefono = tareas => {
    AsyncStorage.setItem('@AppCursoUdemy:tareas', JSON.stringify(tareas))
      .then()
      .catch()
  }

  recuperarEnElTelefono = () => {
    AsyncStorage.getItem('@AppCursoUdemy:tareas')
      .then(valor => {
        const nuevasTareas = JSON.parse(valor)

        setTimeout(() => {
          this.setState({
            cargando: false,
          })
        }, 2000)
        
        if (valor !== null) {
          this.setState({
            tareas: nuevasTareas,
          })
        }
      })
      .catch(
        this.setState({
          cargando: false,
        })
      )
  }

  eliminarTarea = id => {
    const nuevasTareas = this.state.tareas.filter(tarea => tarea.key !== id)
    this.guardarEnTelefono(nuevasTareas)
    this.setState({
      tareas: nuevasTareas,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
          texto={this.state.texto}
        />
        <Body
          tareas={this.state.tareas}
          eliminar={this.eliminarTarea}
          cargando={this.state.cargando}
        />
        <Text>{this.state.texto}</Text>
      </View>
    )
  }
}

export default AddTarea
