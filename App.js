import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
/*
* File: App.js
* Author: Kisgyorgy Bendeguz
* Copyright: 2023, Kisgyorgy
* Date: 2024-04-03
*
*/
function ListScreen(){
  
  const host = "http://localhost:8000/"
  const endpoint = "hangszerek"
  const url = host + endpoint

  const[hangszerek, sethangszerek] = useState([]);

  function getHangszerek(){
    fetch(url)
    .then(response => response.json())
    .then( result => {
      console.log(result)
      sethangszerek(result)
    })
    .catch(error=>{
      console.error('Hiba! Az adatok nem elérhetőek!', error)
    })
  }

  return (
    <View style={styles.container}>
      <Button 
        title='Adatok betöltése'
        onPress={getHangszerek}
      />
      <View style={styles.header}>
        <Text style={styles.header}>Név</Text>
        <Text style={styles.header}>Típus</Text>
        <Text style={styles.header}>Márka</Text>
        <Text style={styles.header}>Év</Text>
      </View>
      <FlatList
        data={hangszerek}
        renderItem={({item})=>(
          <View style={styles.item}>
            <Text style={styles.column}>{item.Név}</Text>
            <Text style={styles.column}>{item.Típus}</Text>
            <Text style={styles.column}>{item.Márka}</Text>
            <Text style={styles.column}>{item.Év}</Text>
          </View>
        )}
      />
    <StatusBar style='auto'/>
    </View>
  );
}
function AboutScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.plainHeader}>Üdvözöljük!</Text>
      <Text>Ez itt a hangszerek adatbázisa.</Text>
      <Text>
          Author: Kisgyorgy Bendeguz
          Copyright: 2023, Kisgyorgy
          Date: 2024-04-03
      </Text>
    </View>
  )
}
const Tab = createMaterialTopTabNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen
        name="Főoldal"
        component={AboutScreen}
      />
      <Tab.Screen 
        name="Lista"
        component={ListScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plainHeader:{
    fontSize:20,
    fontWeight: 'bold',
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    fontWeight: 'bold',
    fontSize:20
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ccc',
    width: '100%',
    paddingVertical: 10,
    marginBottom: 15,
  },
  navItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  item:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  column:{
    flex: 1,
    textAlign: 'center',
    marginRight: 20
  },
});
