import React, { useState } from 'react';
import { View, Text, Pressable, useWindowDimensions, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.mainContent}>
      <Pressable onPress={() => navigation.openDrawer()} style={styles.mobileToggleButton}>
        <Ionicons name="menu" size={28} />
      </Pressable>
      <Text>Home Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const SidebarContent = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => (
  <View style={[styles.sidebar, !isOpen && styles.sidebarCollapsed]}>
    <Pressable onPress={toggle} style={styles.toggleButton}>
      <Ionicons name={isOpen ? 'close' : 'menu'} size={24} />
    </Pressable>
    {isOpen && (
      <View style={styles.menuItems}>
        <Text> Home</Text>
        <Text> About</Text>
      </View>
    )}
  </View>
);

const MainContent = () => (
  <View style={styles.mainContent}>
    <Text>Main content here</Text>
  </View>
);

export default function Layout() {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  if (!isLargeScreen) {
    // Small screen: use Drawer Navigator with swipe and overlay
    return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    );
  }

  // Large screen: persistent sidebar + main content with toggle button
  return (
    <View style={styles.container}>
      <SidebarContent isOpen={sidebarOpen} toggle={toggleSidebar} />
      <View style={[styles.mainWrapper, !sidebarOpen && styles.mainWrapperCollapsed]}>
        <MainContent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  sidebar: {
    width: 240,
    backgroundColor: '#eee',
    padding: 10,
  },
  sidebarCollapsed: {
    width: 60,
  },
  toggleButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItems: {
    marginTop: 20,
  },
  mainWrapper: {
    flex: 1,
    padding: 20,
  },
  mainWrapperCollapsed: {
    marginLeft: 60,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileToggleButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1000,
    padding: 10,
  },
});
