import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SelectCountry } from "react-native-element-dropdown";

const DropDown = ({ setChange, items }) => {
  const [country, setCountry] = useState("1");
  console.log(items);
  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      maxHeight={200}
      value={country}
      data={[...items]}
      itemContainerStyle={{
        backgroundColor: "#7d72f91c",
        color: "white",
        height: 45,
      }}
      containerStyle={{
        backgroundColor: "#9990FF",
        marginTop: 5,
        borderWidth: 0,
      }}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Seçiniz"
      searchPlaceholder="Search..."
      onChange={(e) => {
        setCountry(e.value);
        setChange(e.value);
      }}
    />
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    flex: 1,
    backgroundColor: "#b7b7b721",
    borderRadius: 22,
    paddingHorizontal: 8,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  placeholderStyle: {
    fontSize: 24,
    color: "white",
    fontWeight: "200",
    marginLeft: 8,
  },
  selectedTextStyle: {
    fontSize: 22,
    marginLeft: 8,
    fontWeight: "200",
    color: "white",
  },
});
