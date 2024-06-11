import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ToastProvider } from "react-native-toast-notifications";
const Layout = () => {
  return (
    <ToastProvider
      successColor="#9990FF"
      dangerColor="red"
      warningColor="orange"
      normalColor="gray"
    >
      <StatusBar style="auto" />
      <Slot />
    </ToastProvider>
  );
};

export default Layout;
