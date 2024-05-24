import { View, Text, ImageBackground, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PressableButton from "../../Components/Button";
import { StyleSheet } from "react-native";
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
          {param.media_type === "video" ? (
            <Text className="text-2xl text-[#C2C061]  text-center font-extrabold italic py-2">
              {" "}
              Does not support video images!{" "}
            </Text>
          ) : (
            <ImageBackground
              source={{ uri: param.url }}
              resizeMode="cover"
              style={{ flex: 1 }}
              borderRadius={20}
            ></ImageBackground>
          )}
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

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});

export default details;
