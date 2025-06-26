import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Poet } from "../../../modules/poetSchema";

type Props = {
  poets: Poet[];
};

const DesktopDrawer = ({ poets }: Props) => {
  const [open, setOpen] = useState(true);

  return (
    <View className="flex flex-row flex-1 bg-gray-100">
      <View
        className={`bg-white border-r border-gray-300 flex flex-col ${
          open ? "w-64" : "w-12"
        }`}
      >
        <TouchableOpacity
          onPress={() => setOpen(!open)}
          className="w-12 h-12 border-b border-gray-300 flex items-center justify-center"
          style={{ alignSelf: "flex-start" }}
        >
          <Text className="text-lg select-none">{open ? "←" : "→"}</Text>
        </TouchableOpacity>

        {open && (
          <View className="flex-1 px-4 py-2">
            <Text className="text-xl font-semibold mb-3 text-right">
              Poets :
            </Text>
            <FlatList
              data={poets}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Text className="text-base text-right mb-2 text-gray-700 pr-4">
                  {item.name}
                </Text>
              )}
              contentContainerStyle={{ paddingBottom: 16, paddingRight: 8 }}
              className="flex-1"
              showsVerticalScrollIndicator={true}
            />
          </View>
        )}
      </View>

      <View
        className={`flex-1 flex items-center justify-center ${
          open ? "ml-0" : "ml-0"
        }`}
      >
        <Text>
        یک شاعر را از فهرست انتخاب کنید
        </Text>
      </View>
    </View>
  );
};

export default DesktopDrawer;
