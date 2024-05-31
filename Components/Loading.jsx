import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View className="h-full w-full justify-center items-center">
      <ActivityIndicator size="large" color="#AAAF60" />
    </View>
  );
};

export default Loading;
