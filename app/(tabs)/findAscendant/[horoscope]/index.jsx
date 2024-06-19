import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams, usePathname } from "expo-router";
import BackgroundImage from "../../../../Components/BackgroundImage";
import Goback from "../../../../Components/Goback";
import { properties } from "../../../../data";
import { ScrollView } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const index = () => {
  const [data, setData] = useState();
  const { horoscope } = useLocalSearchParams();
  useEffect(() => {
    properties.map((item, index) => {
      if (item.name === horoscope) {
        return setData(item);
      }
    });
  }, [horoscope]);

  return (
    <BackgroundImage>
      <Goback />
      <View className="flex-12 px-2">
        <ScrollView>
          <Text className="text-white text-left text-2xl font-bold">
            <AntDesign name="star" size={24} color="#C2C061" /> {data?.name}{" "}
            Burcu Özellikleri
          </Text>
          <View className="my-2">
            <Text className="text-white text-left text-lg font-normal">
              <Entypo name="dot-single" size={20} color="white" /> Pozitif
              Özellikleri
            </Text>
            <Text className="text-white text-left text-lg font-extralight">
              {data?.positive}
            </Text>
          </View>

          <View className="my-2">
            <Text className="text-white text-left text-lg font-normal">
              <Entypo name="dot-single" size={20} color="white" /> Negatif
              Özellikleri
            </Text>
            <Text className="text-white text-left text-lg font-extralight">
              {data?.negative}
            </Text>
          </View>
          <View className="my-2">
            <Text className="text-white text-left text-lg font-normal">
              <Entypo name="dot-single" size={20} color="white" /> {data?.name}{" "}
              Burcu Kadını Özellikleri
            </Text>
            <Text className="text-white text-left text-lg font-extralight">
              {data?.WomenProperties}
            </Text>
          </View>
          <View className="my-2">
            <Text className="text-white text-left text-lg font-normal">
              <Entypo name="dot-single" size={20} color="white" /> {data?.name}{" "}
              Burcu Erkeği Özellikleri
            </Text>
            <Text className="text-white text-left text-lg font-extralight">
              {data?.MenProperties}
            </Text>
          </View>
        </ScrollView>
      </View>
    </BackgroundImage>
  );
};

export default index;
