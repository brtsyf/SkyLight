import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const PressableButton = ({ title, href, onClick }) => {
  return href ? (
    <Link href={href} asChild>
      <TouchableOpacity
        onPress={() => {
          onClick ? onClick() : null;
        }}
        className="w-[85%] h-16 px-2  bg-[#07345A] text-center rounded-full justify-center items-center border-4 border-[#A26F55]"
      >
        <Text className="text-[#C2C061] text-xl font-extrabold italic">
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  ) : (
    <TouchableOpacity
      onPress={() => {
        onClick ? onClick() : null;
      }}
      className="w-[75%] h-16  bg-[#07345A] text-center rounded-full justify-center items-center border-4 border-[#A26F55]"
    >
      <Text className="text-[#C2C061] text-3xl font-extrabold italic">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PressableButton;
