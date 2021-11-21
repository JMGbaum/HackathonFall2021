import DropDownPicker from "react-native-dropdown-picker";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export function SpecialInterest(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Sunday", value: "Sunday" },
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" }
  ]);
  return (
    <SafeAreaView style={styles.loginContainer}>
      <DropDownPicker
        placeholder = "Day of the week"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={true}
        min={0}
        max={9}
        onChangeValue={(val) => {
          //props.setFieldValue(props.name, val);
        }}
        style = {styles.styles}
      />
    </SafeAreaView>
  );
}

export function SpecialInterest2(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Breakfast", value: "Breakfast" },
    { label: "Lunch", value: "Lunch" },
    { label: "Dinner", value: "Dinner" }
  ]);
  return (
    <SafeAreaView style={styles.loginContainer}>
      <DropDownPicker
        placeholder = "Meal"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={true}
        min={0}
        max={9}
        onChangeValue={(val) => {
          //props.setFieldValue(props.name, val);
        }}
        style = {styles.styles}
      />
    </SafeAreaView>
  );
}
export function SpecialInterest3(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Magellans", value: "Magellans" },
    { label: "Chef's Table", value: "Chef's Table" },
    { label: "Chew Street Deli", value: "Chew Street Deli" },
    { label: "Croutons Salad Bar", value: "Croutons Salad Bar" },
    { label: "Edamame & Rice", value: "Edamame & Rice" },
    { label: "Wildfire Grill", value: "Wildfire Grill" },

  ]);
  return (
    <SafeAreaView style={styles.loginContainer}>
      <DropDownPicker
        placeholder = "Stations"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={true}
        min={0}
        max={9}
        onChangeValue={(val) => {
          //props.setFieldValue(props.name, val);
        }}
        style = {styles.styles}

      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  loginContainer: {
    height: 250,
    width: "30%",
    alignItems: "center",
    margin: 10,
    elevation: 10,
    backgroundColor: "#9BD1D1"
  },
  text: {
    fontSize: 20
  }, 
  styles: {padding: 50}
});
