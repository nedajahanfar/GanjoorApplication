import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import styles from "../styles/MobileDrawer.styles";

const Drawer = createDrawerNavigator();

const Placeholder = ({ title }: { title: string }) => (
  <View style={styles.placeholderContainer}>
    <Text>{title}</Text>
  </View>
);

const MobileDrawer = () => (
  <NavigationContainer {...({ independent: true } as any)}>
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" children={() => <Placeholder title="Home" />} />
      <Drawer.Screen name="About" children={() => <Placeholder title="About" />} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default MobileDrawer;
