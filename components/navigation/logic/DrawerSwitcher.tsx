import React from 'react';
import { useWindowDimensions, View, Text, ActivityIndicator } from 'react-native';
import { usePoets } from '../../../hooks/usePoets';
import DesktopDrawer from './DesktopDrawer';
import MobileDrawer from './MobileDrawer';


const DrawerSwitcher = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;

  const { data: poets, isLoading, error } = usePoets();

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
        <Text className="mt-2">در حال بارگذاری...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-600 font-bold">
          خطا: {error.message}
        </Text>
      </View>
    );
  }

  if (!poets || poets.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>هیچ شاعری یافت نشد.</Text>
      </View>
    );
  }


  return isLargeScreen
    ? <DesktopDrawer poets={poets} />
    : <MobileDrawer poets={poets} />;
};

export default DrawerSwitcher;
