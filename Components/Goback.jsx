import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { router } from "expo-router";

const Goback = () => {
  return (
    <View className="flex-1   justify-center items-center  px-4 flex-row">
      <TouchableOpacity onPress={() => router.back()} className="flex-row">
        <AntDesign name="back" size={26} color="#9990FF" />
        <Text className="text-left px-2 text-xl text-[#9990FF] flex-12">
          Geri
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Goback;
