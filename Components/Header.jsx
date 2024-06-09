import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
const Header = () => {
  return (
    <View className="flex-1 w-full  justify-left items-center px-1 flex-row">
      <Text className="text-white text-2xl font-extrabold italic px-3">
        Sky Light'a Hoşgeldin!
      </Text>
      <FontAwesome name="star-half-empty" size={28} color="#9990FF" />
    </View>
  );
};

export default Header;
