import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ToastProvider } from "react-native-toast-notifications";
const Layout = () => {
  return (
    <ToastProvider>
      <StatusBar style="auto" />
      <Slot />
    </ToastProvider>
  );
};

export default Layout;
