import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="details" />
      <Stack.Screen name="mainMenu" />
    </Stack>
  );
};

export default Layout;
