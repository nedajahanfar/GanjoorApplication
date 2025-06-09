import React from 'react';
import { useWindowDimensions } from 'react-native';
import { poetsList } from '../../poets/PoetsList';
import DesktopDrawer from './DesktopDrawer';
import MobileDrawer from './MobileDrawer';

const DrawerSwitcher = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;

  return isLargeScreen
    ? <DesktopDrawer poets={poetsList} />
    : <MobileDrawer poets={poetsList} />;
};

export default DrawerSwitcher;
