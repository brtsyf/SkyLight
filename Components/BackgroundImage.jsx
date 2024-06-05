import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const BackgroundImage = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ImageBackground
        source={require("../assets/images/5_9267884.png")}
        style={{ flex: 1 }}
      >
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default BackgroundImage;
