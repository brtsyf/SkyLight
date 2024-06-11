import { View, Text, Pressable } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import CustomTab from "../../Components/CustomTab";

const _layout = () => {
  const CustomTabBar = (props, index) => {
    return <CustomTab key={index} {...props} />;
  };

  return (
    <Tabs
      tabBar={CustomTabBar}
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default _layout;
