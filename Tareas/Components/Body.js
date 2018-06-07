import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import Tarea from './Tarea'

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'center',
    backgroundColor: '#EFFBF2',
  },
  horizontal: {
    justifyContent: 'space-around',
    padding: 10,
  },
})

const Body = ({ tareas, eliminar, cargando }) => (
  <View style={[styles.container, styles.horizontal]}>
    {cargando && <ActivityIndicator size="large" color="#4000FF" />}
    {!cargando && (
      <FlatList
        data={tareas}
        renderItem={({ item }) => <Tarea item={item} eliminar={eliminar} />}
        keyExtractor={item => item.key}
      />
    )}
  </View>
)

Body.propTypes = {
  eliminar: PropTypes.func.isRequired,
  tareas: PropTypes.arrayOf(
    PropTypes.shape({
      // key: PropTypes.number,
      texto: PropTypes.string,
    })
  ).isRequired,
  cargando: PropTypes.bool.isRequired,
}

export default Body
