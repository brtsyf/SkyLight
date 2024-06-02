import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
const Header = () => {
  return (
    <View className="flex-1 w-full bg-[#070707] justify-left border-b-[1px] items-center px-1 border-b-white flex-row">
      <Text className="text-white text-2xl font-extrabold italic px-2">
        Sky Light'a Hoşgeldin!
      </Text>
      <FontAwesome name="star-half-empty" size={28} color="#9990FF" />
    </View>
  );
};

export default Header;
