import { View, TouchableOpacity, Dimensions } from "react-native";
import TabBarIcon from "./TabBarIcon";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

function CustomTab({ state, descriptors, navigation }) {
  const { width } = Dimensions.get("window");
  const MARGIN = 20;
  const TAB_BAR_WIDTH = width - 2 * MARGIN;
  const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length - 1.5;

  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(TAB_WIDTH * state.index, {
            damping: 20,
          }),
        },
      ],
    };
  });
  return (
    <View className="h-24 justify-center  bg-[#010101] items-center px-2 py-1  flex-row">
      <View
        style={{ width: TAB_BAR_WIDTH }}
        className={` h-16 border-2  bg-[#9494941c] rounded-full justify-center items-center flex-row`}
      >
        <Animated.View
          className="h-full  bg-[#272727e8] rounded-full absolute left-0"
          style={[{ width: TAB_WIDTH }, translateAnimation]}
        ></Animated.View>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <TabBarIcon route={route} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default CustomTab;
