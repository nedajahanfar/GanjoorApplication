import React from 'react';
import { SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DrawerSwitcher from '../components/navigation/logic/DrawerSwitcher';
import './globals.css';

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerSwitcher />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default Layout;
