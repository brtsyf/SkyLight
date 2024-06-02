import { Slot } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";
const Layout = () => {
  return (
    <ToastProvider>
      <Slot />
    </ToastProvider>
  );
};

export default Layout;
