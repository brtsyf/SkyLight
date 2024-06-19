import { View, Text, TouchableOpacity, Share } from "react-native";
import { Octicons } from "@expo/vector-icons";
const ShareButton = ({ Image, Explanation, Title }) => {
  const ShareDocs = () => {
    try {
      Share.share({
        message: Title + ":" + "\n" + Explanation + "\n" + Image,
      }).catch((e) => {
        console.log(e);
      });
    } catch (e) {
      console.log(e);
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
