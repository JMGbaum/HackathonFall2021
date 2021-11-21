import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';

export function Menu({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Button title="Student" onPress={()=>{navigation.navigate("Select")}}/>
      </View>
      <Button title="Administrator" onPress={()=>{}} style={styles.button}>
        <Text>I am an administrator</Text>
      </Button>
    </SafeAreaView>
  );
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
  