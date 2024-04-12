/*
* File: App.js
* Author: Béres Délia
* Copyright: 2024, Béres Délia
* Group: Szoft II_1_E
* Date: 2024-04-08
* Github: 
* Licenc: GNU GPL
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getStudents } from './services/studentsService';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

export default function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents()
      .then(data => {
        console.log(data)
        setStudents(data);
      })
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitleText}>Tanulók</Text>
      <FlatList
        data={students}
        renderItem={({ item }) => (
          <View style={styles.studentList}>
            <Text style={styles.nameText}>Név: {item.name}</Text>
            <View style={styles.footer}>
              <Text style={styles.cityText}>Város: {item.city}, </Text>
              <Text style={styles.birthText}>Szül: {item.birth}, </Text>
              <Text style={styles.groupText}>Csop: {item.groupId}</Text>
            </View>
          </View>
        )
        }
      />

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'brown',
    marginTop: 15,
    marginBottom: 15
  },
  studentList: {
    border: '1px solid blue',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin: 5,
    backgroundColor: 'lightgreen',
  },
  nameText: {
    color: 'brown',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row'
  }
});
