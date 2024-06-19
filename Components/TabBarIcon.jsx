import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const TabBarIcon = ({ route }) => {
  const [path, usePath] = useState();
  const TabsData = [
    {
      name: "index",
      label: "Neler oluyor",
      icon: <AntDesign name="home" size={24} color="#9990FF" />,
    },
    {
      name: "findAscendant",
      label: "Yükselenini Öğren",
      icon: <AntDesign name="staro" size={26} color="#9990FF" />,
    },
  ];

  useEffect(() => {
    switch (route.name) {
      case "index":
        usePath(TabsData[0].icon);
        break;
      case "findAscendant":
        usePath(TabsData[1].icon);
        break;
      default:
        usePath(TabsData[0].icon);
    }
  }, [route]);

  return (
    <View className={`h-full w-full justify-center items-center`}>{path}</View>
  );
};

export default TabBarIcon;
