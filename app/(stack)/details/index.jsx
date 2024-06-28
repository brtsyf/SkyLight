import { View, Text, ImageBackground, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import PressableButton from "../../../Components/Button";
import { useToast } from "react-native-toast-notifications";
import * as Clipboard from "expo-clipboard";
import BackgroundImage from "../../../Components/BackgroundImage";
import Goback from "../../../Components/Goback";
import ShareButton from "../../../Components/ShareButton";
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
    <BackgroundImage>
      <View className="flex-1 flex-row">
        <Goback />
        <ShareButton
          Image={param.url}
          Explanation={param.explanation}
          Title={param.title}
        />
      </View>
      <View className="flex-12 pb-4">
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
          <Text className="text-2xl text-primary  text-center font-extrabold italic py-2">
            {param.title}
          </Text>
          <Text className="text-md text-primary  text-center font-extrabold italic py-1">
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
    </BackgroundImage>
  );
};

export default details;
