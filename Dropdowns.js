import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { SpecialInterest, SpecialInterest2, SpecialInterest3 } from "./DropDownCal";

export function Dropdowns({navigation}) {
  return (
        <View>
            <View style={styles.app}>
                <SpecialInterest />
                <SpecialInterest2 />
                <SpecialInterest3 />
            </View>
            <Button title="Submit" onPress={()=>navigation.navigate("Home")}/>
        </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500, 
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //margin: "auto",
    padding: 20
    
  },
});