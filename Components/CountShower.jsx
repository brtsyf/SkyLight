import { View, Text } from "react-native";
import React from "react";

const CountShower = ({ countValue }) => {
  return (
    <View className="flex-1 w-[35%] bg-[#062949] my-1 justify-center items-center">
      <Text className="text-3xl text-white font-extrabold italic">
        {countValue}
      </Text>
    </View>
  );
};

export default CountShower;
