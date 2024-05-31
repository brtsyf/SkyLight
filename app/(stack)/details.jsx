import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PressableButton from "../../Components/Button";
import { StyleSheet } from "react-native";
import { useToast } from "react-native-toast-notifications";
import * as Clipboard from "expo-clipboard";

const details = () => {
  const toast = useToast();
  const param = useLocalSearchParams();
  const video = useRef(null);
  const [status, setStatus] = useState({});
  console.log(param);

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
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require("../../assets/images/background.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View className="flex-2 my-2 px-3 ">
          {param.media_type === "video" ? (
            <Text className="text-2xl text-[#C2C061]  text-center font-extrabold italic py-2">
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
          <Text className="text-2xl text-[#C2C061]  text-center font-extrabold italic py-2">
            {param.title}
          </Text>
          <Text className="text-md text-[#C2C061]  text-center font-extrabold italic py-1">
            {param.date}
          </Text>
          <TouchableOpacity
            onPress={() => {
              copyText(param.explanation);
            }}
          >
            <ScrollView>
              <Text className="text-xs text-white text-center font-bold italic py-2 px-4 select-text">
                {param.explanation}
              </Text>
            </ScrollView>
          </TouchableOpacity>
          <View className="justify-center items-center">
            <PressableButton href={param.url} title="İndir" />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});

export default details;
