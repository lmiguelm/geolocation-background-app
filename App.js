import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {getPosition} from './src/services/geolocation';
import {
  addTaskForeground,
  startForegroundService,
  closeTask,
} from './src/services/foreground';

export default function App() {
  const [cargaId, setCargaId] = useState(1006);

  useEffect(() => {
    addTaskForeground(cargaId, () => getPosition(cargaId));
    startForegroundService(cargaId);
    return () => closeTask();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={closeTask}>
          <View style={[styles.button, {backgroundColor: 'red'}]}>
            <Text style={styles.buttonText}>Stop</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => startForegroundService(cargaId)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'blue',
    padding: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});
