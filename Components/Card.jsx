import { View, Text } from "react-native";
import React, { useEffect, useReducer, useRef, useState } from "react";
import AnimatedSVGPaths from "react-native-svg-animations/components/AnimatedSVGPaths";
import { Images } from "../data";

const Card = ({ cardTitle, cardValue }) => {
  const ref = useRef();
  console.log(cardValue);
  const [ds, setDs] = useState();

  useEffect(() => {
    const index = Images.findIndex((item) => item.name == cardValue);
    setDs(Images[index].ds);
  }, []);

  return (
    <View className="flex-1 mx-1 bg-[#7d72f91c] justify-center items-center rounded-xl">
      <View ref={ref} className="flex-2 pt-4">
        <AnimatedSVGPaths
          strokeColor="#CCCCCC"
          strokeWidth={2}
          duration={2500}
          width={500}
          loop={false}
          height={600}
          scale={0.315}
          delay={100}
          ds={ds}
        />
      </View>
      <View className="flex-1">
        <Text className="text-[#9990FF] underline text-2xl text-center font-extrabold italic py-2">
          {cardTitle}
        </Text>
        <Text className="text-[#9990FF] text-2xl text-center font-extrabold italic py-2">
          "{cardValue}"
        </Text>
      </View>
    </View>
  );
};

export default Card;
