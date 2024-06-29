import { View, TouchableOpacity, Share, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { useToast } from "react-native-toast-notifications";
const ShareButton = ({ Image, Title }) => {
  const toast = useToast();
  const ShareDocs = async () => {
    if (
      Image.split(".")[Image.split(".").length - 1] === "jpg" ||
      Image.split(".")[Image.split(".").length - 1] === "png" ||
      Image.split(".")[Image.split(".").length - 1] === "gif"
    ) {
      try {
        const result = await FileSystem.downloadAsync(
          Image,
          FileSystem.documentDirectory +
            Title +
            `.${Image.split(".")[Image.split(".").length - 1]}`
        );
        Sharing.shareAsync(result.uri).catch((error) => {
          toast.show("Resmi Paylaşırken bir hata oluştu", {
            type: "danger",
            placement: "bottom",
            duration: 1500,
            offset: 30,
            animationType: "zoom-in",
          });
        });
      } catch (e) {
        toast.show("Resmi Paylaşırken bir hata oluştu", {
          type: "danger",
          placement: "bottom",
          duration: 1500,
          offset: 30,
          animationType: "zoom-in",
        });
      }
    } else {
      try {
        Share.share({
          message: `${Image}`,
        });
      } catch (e) {
        toast.show("Resmi Paylaşırken bir hata oluştu", {
          type: "danger",
          placement: "bottom",
          duration: 1500,
          offset: 30,
          animationType: "zoom-in",
        });
      }
    }
  };
  return (
    <View className="flex-1  justify-end items-center pr-4 flex-row">
      <TouchableOpacity onPress={ShareDocs} className="flex-row">
        <Octicons name="share" size={30} color="#9990FF" />
      </TouchableOpacity>
    </View>
  );
};

export default ShareButton;
