import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PressableButton from "../../Components/Button";

const details = () => {
  const param = useLocalSearchParams();
  console.log(param);
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require("../../assets/images/background.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View className="flex-2 my-2 px-3 ">
          <ImageBackground
            source={{ uri: param.url }}
            resizeMode="cover"
            style={{ flex: 1 }}
            borderRadius={20}
          ></ImageBackground>
        </View>
        <View className="flex-4">
          <Text className="text-2xl text-[#C2C061]  text-center font-extrabold italic py-2">
            {param.title}
          </Text>
          <Text className="text-md text-[#C2C061]  text-center font-extrabold italic py-1">
            {param.date}
          </Text>
          <Text className="text-xs text-white text-center font-bold italic py-2">
            {param.explanation}
          </Text>
          <View className="justify-center items-center">
            <PressableButton href={param.url} title="Download" />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default details;
