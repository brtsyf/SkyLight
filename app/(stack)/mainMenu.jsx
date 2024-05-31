import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PressableButton from "../../Components/Button";

const MainMenu = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../assets/images/background.png")}
      >
        <View className="flex-1  justify-center items-center">
          <Text className="text-4xl text-white font-extrabold italic">
            Sky Light' a Hoşgeldin
          </Text>
        </View>
        <View className="flex-4 flex-col items-center">
          <View className="my-4 w-full items-center">
            <PressableButton title="Bu Tarihte Neler Oldu?" href="home" />
          </View>
          <View className="my-4 w-full items-center">
            <PressableButton
              title="Burcunu & Yükselenini Öğren"
              href="findAscendant"
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MainMenu;
