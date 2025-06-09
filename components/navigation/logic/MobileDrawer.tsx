import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, FlatList } from "react-native";
import { Poet } from "../../poets/PoetsList";
import styles from "../../navigation/styles/MobileDrawer.styles";

type Props = {
  poets: Poet[];
};

const Drawer = createDrawerNavigator();

const MainContent = () => (
  <View style={styles.placeholderContainer}>
    <Text>Select a poet from the sidebar</Text>
  </View>
);

const CustomDrawerContent = ({ poets }: { poets: Poet[] }) => (
  <View style={styles.drawerContentContainer}>
    <FlatList
      data={poets}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Text
          style={styles.link}
          onPress={() => {
            // For now, just console log the poet as a placeholder action
            console.log(`Pressed ${item.name}`);
          }}>
          {item.name}
        </Text>
      )}
    />
  </View>
);

const MobileDrawer = ({ poets }: Props) => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: true,
      headerTitle: () => null, 
    }}
    drawerContent={({ navigation }) => (
      <CustomDrawerContent poets={poets}  />
    )}
  >
    <Drawer.Screen name="Main" component={MainContent} />
  </Drawer.Navigator>
);

export default MobileDrawer;
