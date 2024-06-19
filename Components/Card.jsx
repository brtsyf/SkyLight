import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import AnimatedSVGPaths from "react-native-svg-animations/components/AnimatedSVGPaths";
import { Images } from "../data";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Card = ({ cardTitle, cardValue }) => {
  const ref = useRef();
  const [ds, setDs] = useState(null);

  let animation = useSharedValue(0);
  const anim = useAnimatedStyle(() => {
    return {
      opacity: withTiming(animation.value, { duration: 2200 }),
      transform: [{ scale: withTiming(animation.value, { duration: 850 }) }],
    };
  });
  useEffect(() => {
    animation.value = 1;
  }, [cardTitle, cardValue]);
  useEffect(() => {
    let index = Images.findIndex((item) => item.name === cardValue);
    if (index !== -1) {
      setDs(Images[index].ds);
    }
  }, [cardValue]);

  return (
    <View style={styles.cardContainer}>
      <View ref={ref} style={styles.svgContainer}>
        {ds && (
          <AnimatedSVGPaths
            strokeColor="#CCCCCC"
            strokeWidth={2}
            duration={2500}
            width={500}
            loop={false}
            height={600}
            scale={0.3}
            delay={100}
            ds={ds}
          />
        )}
      </View>
      <Animated.View style={[styles.textContainer, anim]}>
        <Text style={styles.titleText}>{cardTitle}</Text>
        <Text style={styles.valueText}>"{cardValue}"</Text>
        {cardTitle == "Burç" && (
          <TouchableOpacity
            onPress={() => router.push(`/findAscendant/${cardValue}`)}
          >
            <Text className="text-white px-3 py-4 mt-1  rounded-xl bg-primary text-md font-bold ">
              {"Özelliklerini Göster"}
            </Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    </View>
  );
};

const styles = {
  cardContainer: {
    flex: 1,
    margin: 4,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  svgContainer: {
    flex: 2,
    paddingTop: 16,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 8,
  },
  titleText: {
    color: "#9990FF",
    fontSize: 23,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  valueText: {
    color: "#9990FF",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
  },
};

export default Card;
