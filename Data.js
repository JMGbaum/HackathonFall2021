import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';
const fs = require("expo-file-system");

function DataTest() {
  // create local storage file if it doesn't already exist
  fs.getInfoAsync(fs.documentDirectory + "data.json").then(info => {
    if (!info.exists) {
      fs.writeAsStringAsync(fs.documentDirectory + "data.json", JSON.stringify(require("./data.json")));
    }
  });

  /*console.log(getDataForDay(11,21,2021));
  console.log(addMenuItem("Test", "This is a test menu item.", "breakfast", "Magellan's", 11, 21, 2021, {allergens: []}));
  console.log(getDataForDay(11,21,2021));
  console.log(removeMenuItem(0, "breakfast", "Magellan's", 11, 21, 2021));
  console.log(getDataForDay(11,21,2021));*/

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="Get data" onPress={async ()=>console.log(await getDataForDay(11,21,2021))}/>
      <Button title="Add item" onPress={()=>addMenuItem("Test", "This is a test menu item.", "breakfast", "Wildfire Grill", "Sunday", {allergens: []})}/>
      <Button title="Remove item" onPress={async ()=>console.log(await removeMenuItem(0, "breakfast", "Wildfire Grill", 11, 21, 2021))}/>
    </SafeAreaView>
  );
}

export function addMenuItem(name, description, meal, station, day, nutritionalInfo) {
  fs.readAsStringAsync(fs.documentDirectory + "data.json").then(d => {
    let data = JSON.parse(d);
    const STATIONS = [
      "Chef's Table",
      "Chef's Table East",
      "Chew Street Deli",
      "Croutons Salad Bar",
      "Edamame & Rice",
      "Magellan's",
      "Mangia Mangia Pizza",
      "Miscellaneous",
      "Mule Express",
      "Noshery North",
      "Noshery South",
      "Soup",
      "Top This!",
      "Wildfire Grill",
    ];

    if (!data[day]) {
      data[day] = {};

      // initialize object for the day
      for (let i = 0; i < STATIONS.length; i++)
      {
        data[day][STATIONS[i]] = {breakfast: [], lunch: [], dinner: []};
      }
    }

    data[day][station][meal].push({id: data.next_id++, name, description: description, nutrition: nutritionalInfo});
    fs.writeAsStringAsync(fs.documentDirectory + "data.json", JSON.stringify(data));
    //console.log(data);
  });
}

export function removeMenuItem(id, meal, station, day) {
  fs.readAsStringAsync(fs.documentDirectory + "data.json").then(d => {
    let data = JSON.parse(d);
    let removed;

    for (let i = 0; i < data[day][station][meal].length; i++)
    {
      if (data[day][station][meal][i].id === id)
      {
        removed = data[day][station][meal][i];
        delete data[day][station][meal][i];
        break;
      }
    }
    fs.writeAsStringAsync(fs.documentDirectory + "data.json", JSON.stringify(data));
    //console.log(removed);
    //console.log(data);
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Bodoni Ornaments',
    fontSize: 100,
    textAlign: 'center',
  },
});