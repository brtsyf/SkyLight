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
          <View className="pt-2 my-2 gap-1 ">
            <Text className="text-white text-left  text-lg font-normal px-2 ">
              <Entypo name="dot-single" size={15} color="white" />
              Yönetici Gezegeni :{" "}
              <Text className="text-md font-extralight">
                {data?.horoscopePersonality?.planet}
              </Text>
            </Text>
            <Text className="text-white text-left  text-lg font-normal px-2 ">
              <Entypo name="dot-single" size={15} color="white" />
              Element :{" "}
              <Text className="text-md font-extralight">
                {data?.horoscopePersonality.element}
              </Text>
            </Text>
            <Text className="text-white text-left  text-lg font-normal px-2 ">
              <Entypo name="dot-single" size={15} color="white" />
              Nitelik :{" "}
              <Text className="text-md font-extralight">
                {data?.horoscopePersonality.quality}
              </Text>
            </Text>
            <Text className="text-white text-left  text-lg font-normal px-2 ">
              <Entypo name="dot-single" size={15} color="white" />
              Şanslı Gün :{" "}
              <Text className="text-md font-extralight">
                {data?.horoscopePersonality.luckyDay}
              </Text>
            </Text>
            <Text className="text-white text-left  text-lg font-normal px-2 ">
              <Entypo name="dot-single" size={15} color="white" />
              Şanslı Renk :{" "}
              <Text className="text-md font-extralight">
                {data?.horoscopePersonality.luckyColor}
              </Text>
            </Text>
            <Text className="text-white text-left  text-lg font-normal px-2 ">
              <Entypo name="dot-single" size={15} color="white" />
              Şanslı Sayı :{" "}
              <Text className="text-md font-extralight">
                {data?.horoscopePersonality.luckyNumber}
              </Text>
            </Text>
            <Text className="text-white text-left  text-lg font-normal px-2 ">
              <Entypo name="dot-single" size={15} color="white" />
              Bitki :{" "}
              <Text className="text-md font-extralight">
                {data?.horoscopePersonality.flower}
              </Text>
            </Text>
            <Text className="text-white text-left  text-lg font-normal px-2 ">
              <Entypo name="dot-single" size={15} color="white" />
              Kıymetli Maden :{" "}
              <Text className="text-md font-extralight">
                {data?.horoscopePersonality.stone}
              </Text>
            </Text>
            <Text className="text-white text-left  text-lg font-normal px-2 ">
              <Entypo name="dot-single" size={15} color="white" />
              Metal :{" "}
              <Text className="text-md font-extralight">
                {data?.horoscopePersonality.metal}
              </Text>
            </Text>
            <Text className="text-white text-left  text-lg font-normal px-2 ">
              <Entypo name="dot-single" size={15} color="white" />
              Hayvan :{" "}
              <Text className="text-md font-extralight">
                {data?.horoscopePersonality.animal}
              </Text>
            </Text>
          </View>
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
