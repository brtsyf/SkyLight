import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PressableButton from "../../Components/Button";
import { useToast } from "react-native-toast-notifications";
import * as Clipboard from "expo-clipboard";
import { AntDesign } from "@expo/vector-icons";
const details = () => {
  const toast = useToast();
  const param = useLocalSearchParams();

  const copyText = async (text) => {
    try {
      await Clipboard.setStringAsync(text);
      toast.show("Metin kopyalandı", {
        type: "success",
        placement: "bottom",
        duration: 1500,
        offset: 30,
        animationType: "zoom-in",
      });
    } catch (e) {
      toast.show("Metin kopyalanırken bir hata oluştu", {
        type: "danger",
        placement: "bottom",
        duration: 1500,
        offset: 30,
        animationType: "zoom-in",
      });
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#070707]">
      <View className="flex-1 border-b-[1px] border-white justify-center items-center  px-4 flex-row">
        <TouchableOpacity onPress={() => router.back()} className="flex-row">
          <AntDesign name="back" size={26} color="#9990FF" />
          <Text className="text-left px-2 text-xl text-[#9990FF] flex-12">
            Geri
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-12">
        <View className="flex-2 my-2 px-3 ">
          {param.media_type === "video" ? (
            <Text className="text-2xl text-[#C2C061]  text-center font-light italic py-2">
              {" "}
              Video görüntülerini desteklemiyor!{" "}
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
          <Text className="text-2xl text-[#9990FF]  text-center font-extrabold italic py-2">
            {param.title}
          </Text>
          <Text className="text-md text-[#9990FF]  text-center font-extrabold italic py-1">
            {param.date}
          </Text>

          <ScrollView scrollEnabled>
            <Text className="text-xs text-white text-center font-bold italic py-2 px-4 select-text">
              {param.explanation}
            </Text>
          </ScrollView>

          <View className="my-2 justify-center items-center">
            <PressableButton href={param.url} title="İndir" />
          </View>
          <View className="my-2 justify-center items-center">
            <PressableButton
              title="Metni Kopyala"
              onClick={() => {
                copyText(param.explanation);
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default details;
