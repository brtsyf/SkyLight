import { View, Text } from "react-native";
import React from "react";

const CountShower = ({ countValue }) => {
  return (
    <View className="flex-1 w-[80%] rounded-2xl bg-transparent border-[1.5px] border-[#9990FF] my-6 justify-center items-center">
      <Text className="text-3xl text-[#9990FF] font-extrabold italic">
        {countValue}
      </Text>
    </View>
  );
};

export default CountShower;
