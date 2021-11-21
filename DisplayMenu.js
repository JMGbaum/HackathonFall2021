import React, { useState } from 'react';
import{ StyleSheet, SafeAreaView, Button, ScrollView, Alert } from 'react-native';

export const DisplayMenu = ({navigation, props}) => {
  return(
  <SafeAreaView style = {styles.container}>
    <ScrollView>
      <Button
      title = "Pizza"
      onPress ={() => navigation.navigate("Nutrition Info.", {name: "Pizza", description: "An oven-baked dough with tomato sauce and cheese.", allergens: ["gluten", "dairy"]})}
      />
      <Button
      title = "Cheeseburger"
      onPress ={() => navigation.navigate("Nutrition Info.", {name: "Cheeseburger", description: "Meat and cheese between two wheat buns.", allergens: ["gluten", "dairy", "eggs"]})}
      />
      <Button
      title = "Ceasar Salad"
      onPress = {() => navigation.navigate("Nutrition Info.", {name: "Caesar Salad", description: "Lettuce with croutons, cheese, and caesar dressing.", allergens: ["gluten", "eggs", "fish"]})}
      />
      <Button
      title = "Crispy Chicken"
      onPress = {() => navigation.navigate("Nutrition Info.", {name: "Crispy Chicken", description: "Breaded and fried chicken breast.", allergens: ["gluten", "egg"]})}
      />


    </ScrollView>
  </SafeAreaView>  
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fitToText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  scrollView: {
    backgroundColor : 'red'
  },
  text: {
    fontSize: 20,
  }

});