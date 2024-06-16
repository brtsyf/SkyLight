import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SelectCountry } from "react-native-element-dropdown";

const DropDown = ({ setChange, items }) => {
  const [country, setCountry] = useState("1");
  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      maxHeight={200}
      value={country}
      data={[
        ...items.map((item) => {
          return {
            value: item.value,
            lable: item.lable,
            image: require("../assets/images/5_9267884.png"),
          };
        }),
      ]}
      itemContainerStyle={{
        backgroundColor: "transparent",
        color: "white",
        height: 45,
        borderRadius: 10,
      }}
      activeColor="#fff4"
      imageStyle={styles.imageStyle}
      iconStyle={styles.iconStyle}
      containerStyle={{
        backgroundColor: "#393939",
        marginTop: 10,
        borderWidth: 0,
        borderRadius: 10,
      }}
      iconColor="white"
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
    marginHorizontal: 16,
    marginVertical: 14,
    flex: 1,
    backgroundColor: "#9494941c",
    borderRadius: 22,
    paddingHorizontal: 8,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 0,
    height: 0,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 23,
    color: "white",
    fontWeight: 350,
    marginLeft: 8,
  },
  selectedTextStyle: {
    fontSize: 22,
    fontWeight: 350,
    marginLeft: 8,
    color: "white",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
