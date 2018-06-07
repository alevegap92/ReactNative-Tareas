import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TextInput } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#190710',
  },
  textoInput: {
    paddingHorizontal: 16,
    fontSize: 20,
    height: 40,
    color: '#FAFEFE',
  },
})
const Header = ({ texto, cambiarTexto, agregar }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.textoInput}
      onChangeText={cambiarTexto}
      placeholder="Esciba su tarea aqui ..."
      onSubmitEditing={agregar}
      value={texto}
    />
  </View>
)

Header.propTypes = {
  cambiarTexto: PropTypes.func.isRequired,
  agregar: PropTypes.func.isRequired,
  texto: PropTypes.string.isRequired,
}
export default Header
