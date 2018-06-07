import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  text: {
    flex: 1,
    fontWeight: '900',
    fontSize: 20,
    textAlign: 'center',
  },
})

const Tarea = ({ item, eliminar }) => (
  <View style={styles.contain}>
    <Text style={styles.text}>{item.texto}</Text>
    <TouchableOpacity onPress={() => eliminar(item.key)}>
      <Icon name="trash" type="evilicon" size={40} color="#B40404"  />
    </TouchableOpacity>
  </View>
)

Tarea.propTypes = {
  eliminar: PropTypes.func.isRequired,
  item: PropTypes.shape({
    texto: PropTypes.string,
    // key: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
}

export default Tarea
