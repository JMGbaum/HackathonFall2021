import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, SafeAreaView, Button, View, ScrollView, Image } from 'react-native';
const fs = require("expo-file-system");

var allergy = false;
var gluten = false;
{//key1 is the actual meal, key2 is a list of T/F where first value is whether or not it
//is gluten free and the second is if it has alergin, if it does ther will be a list of the
//allergins rather than false
}
var choice = "pizza";
var meals = {};
meals["pizza"] = [true,false];

export function Nutrition({route, navigation}) {
    const props = route.params;

    return (        
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style = {styles.fitToText}>    
                <Button
                title = "Home"
                color = '#8b0000'
                onPress={()=>navigation.navigate("Home")}
                />
            </View>    
            <Text style={styles.food}>
                {props.name}
            </Text>
            <Text style={styles.description}>
                {props.description}
            </Text>
            <View style={styles.box}>
                <Text style={styles.facts}>
                    Nutrition Facts:
                </Text>
                <Text>
                    {"Known allergens: " + props.allergens.join(", ")}
                </Text>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    food: {
      fontSize: 40,
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    facts: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: 'red',
        fontWeight: 'bold'
    },
    description:{
        fontStyle:'italic',
    },
    scrollView:{
        marginHorizontal: 20,
        marginVertical: 20
    },
    box:{
        marginVertical: 10,
        width: Dimensions.get('window').width-100,
        borderWidth: 5,
        borderColor: 'red'
    }
  });