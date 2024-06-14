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
        className="w-[90%] h-14 px-2  bg-primary text-center rounded-full justify-center items-center "
      >
        <Text className="text-white text-xl  italic">{title}</Text>
      </TouchableOpacity>
    </Link>
  ) : (
    <TouchableOpacity
      onPress={() => {
        onClick ? onClick() : null;
      }}
      className="w-[90%] h-14  bg-primary text-center rounded-full justify-center items-center "
    >
      <Text className="text-white text-xl  italic">{title}</Text>
    </TouchableOpacity>
  );
};

export default PressableButton;
