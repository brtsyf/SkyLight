import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const DropDown = ({ setChange, items }) => {
  return (
    <View className="flex-1 ">
      <RNPickerSelect
        style={{
          viewContainer: {
            backgroundColor: "#b7b7b721",
            borderRadius: 10,
            margin: 10,
            padding: 10,
          },
          inputAndroid: {
            color: "#d6dd6e",
            fontSize: 30,
          },

          placeholder: {
            color: "#d6dd6e",
          },
        }}
        placeholder={{
          label: "Seçiniz",
          value: null,
        }}
        pickerProps={{ mode: "dropdown" }}
        onValueChange={(v) => setChange(v)}
        items={items}
      />
    </View>
  );
};

export default DropDown;
