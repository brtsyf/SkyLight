import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PressableButton from "../../Components/Button";
import { StyleSheet } from "react-native";
import { useToast } from "react-native-toast-notifications";
import * as Clipboard from "expo-clipboard";
import { Video, ResizeMode } from "expo-av";

const details = () => {
  const toast = useToast();
  const param = useLocalSearchParams();
  console.log(param);

  const copyText = async (text) => {
    try {
      await Clipboard.setStringAsync(text);
      toast.show("Copied Text", {
        type: "success",
        placement: "bottom",
        duration: 1500,
        offset: 30,
        animationType: "zoom-in",
      });
    } catch (e) {
      toast.show("An error occurred while copying", {
        type: "danger",
        placement: "bottom",
        duration: 1500,
        offset: 30,
        animationType: "zoom-in",
      });
    }
  };

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
          <TouchableOpacity
            onPress={() => {
              copyText(param.explanation);
            }}
          >
            <Text className="text-xs text-white text-center font-bold italic py-2 px-1 select-text">
              {param.explanation}
            </Text>
          </TouchableOpacity>
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
