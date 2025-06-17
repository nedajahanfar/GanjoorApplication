import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import type { Poet } from "../../../modules/poetType";


type Props = {
  poets: Poet[];
};

const Drawer = createDrawerNavigator();

const MainContent = () => (
  <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-gray-800 text-base font-medium">
      یک شاعر را از فهرست انتخاب کنید
    </Text>
  </View>
);

const CustomDrawerContent = ({ poets }: { poets: Poet[] }) => (
  <View className="flex-1 px-4 py-6 bg-white">
    <Text className="text-lg font-bold mb-4 text-right">شاعران :</Text>
    <FlatList
      data={poets}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            console.log(`Pressed ${item.name}`);
          }}
          className="mb-2"
        >
          <Text className="text-base text-right text-gray-700">
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const MobileDrawer: React.FC<Props> = ({ poets }) => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: true,
      headerTitle: () => null,
    }}
    drawerContent={() => <CustomDrawerContent poets={poets} />}
  >
    <Drawer.Screen name="Main" component={MainContent} />
  </Drawer.Navigator>
);

export default MobileDrawer;
