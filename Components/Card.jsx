import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import AnimatedSVGPaths from "react-native-svg-animations/components/AnimatedSVGPaths";
import { Images } from "../data";

const Card = ({ cardTitle, cardValue }) => {
  const ref = useRef();
  const [ds, setDs] = useState(null);

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
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{cardTitle}</Text>
        <Text style={styles.valueText}>"{cardValue}"</Text>
      </View>
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
