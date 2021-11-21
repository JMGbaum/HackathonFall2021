import { Menu } from "./Menu";
import { Nutrition } from "./nutrition.js";
import { Dropdowns } from "./Dropdowns";
import { DisplayMenu } from "./DisplayMenu";
import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {addMenuItem, removeMenuItem } from "./Data";
import { writeAsStringAsync } from "expo-file-system";
const fs = require("expo-file-system");

const Stack = createNativeStackNavigator();

export default function App() {
  // create local storage file if it doesn't already exist
  //fs.getInfoAsync(fs.documentDirectory + "data.json").then(info => {
    //if (!info.exists) {
      fs.writeAsStringAsync(fs.documentDirectory + "data.json", JSON.stringify(require("./data.json")));
    //}
  //});

  addMenuItem("Pizza", "An oven-baked dough with sauce and cheese", "dinner", "Mangia Mangia Pizza", "Sunday", {allergens: ["Gluten", "Dairy"]})

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="User" component={Menu}/>
        <Stack.Screen name="Select" component={Dropdowns}/>
        <Stack.Screen name="Home" component={DisplayMenu}/>
        <Stack.Screen name="Nutrition Info." component={Nutrition}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: "#000"
  }
});
