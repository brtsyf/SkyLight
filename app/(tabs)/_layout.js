import React from "react";
import { Tabs } from "expo-router";
import CustomTab from "../../Components/CustomTab";

const _layout = () => {
  return (
    <Tabs
      tabBar={(props, index) => <CustomTab {...props} index={index} />}
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default _layout;
