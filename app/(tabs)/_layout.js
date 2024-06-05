import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#070707",
          borderTopColor: "transparent",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => null,

          tabBarLabelStyle: {
            color: "#9990FF",
            fontSize: 17,
            height: 10,
            fontWeight: "bold",
          },
          tabBarLabel: ({ focused }) => {
            return (
              <View
                className={`flex-1 w-full pb-3  bg-[#070707] justify-center  ${
                  focused ? "border-[2px]  border-b-[#9990FF]" : ""
                } items-center`}
              >
                <Text
                  className={`${focused ? "text-[#9990FF]" : "text-[#979C9E]"}`}
                >
                  Neler oluyor
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="findAscendant"
        options={{
          tabBarIcon: () => null,

          tabBarLabelStyle: {
            color: "#9990FF",
            fontSize: 17,
            height: 10,
            fontWeight: "bold",
          },
          tabBarLabel: ({ focused }) => {
            return (
              <View
                className={`flex-1 w-full pb-3  bg-[#070707] justify-center  ${
                  focused ? "border-[2px]  border-b-[#9990FF]" : ""
                } items-center `}
              >
                <Text
                  className={`${focused ? "text-[#9990FF]" : "text-[#979C9E]"}`}
                >
                  Yükselenini Öğren
                </Text>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default _layout;
