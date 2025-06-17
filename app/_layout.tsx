import React from 'react';
import { SafeAreaView } from 'react-native';
import DrawerSwitcher from '../components/navigation/logic/DrawerSwitcher';
import './globals.css';

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerSwitcher />
    </SafeAreaView>
  );
};

export default Layout;
