import React from "react";
import { useWindowDimensions } from "react-native";
import MobileDrawer from "./MobileDrawer";
import DesktopDrawer from "./DesktopDrawer";

const DrawerSwitcher = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;

  return isLargeScreen ? <DesktopDrawer /> : <MobileDrawer />;
};

export default DrawerSwitcher;
