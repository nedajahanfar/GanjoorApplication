import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "../styles/DesktopDrawer.styles";
import { Poet } from "../../poets/PoetsList";

type Props = {
  poets: Poet[];
};

const DesktopDrawer = ({ poets }: Props) => {
  const [open, setOpen] = useState(true);

  return (
    <View style={styles.container}>
      <View style={[styles.sidebar, open ? styles.sidebarOpen : styles.sidebarClosed]}>
        <TouchableOpacity onPress={() => setOpen(!open)} style={styles.toggleButton}>
          <Text>{open ? "←" : "→"}</Text>
        </TouchableOpacity>

        {open && (
          <View style={styles.menu}>
            <Text style={styles.sectionTitle}>Poets :</Text>
            <FlatList
              data={poets}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <Text style={styles.link}>{item.name}</Text>}
            />
          </View>
        )}
      </View>

      <View style={[styles.content, open ? styles.contentShrink : styles.contentExpand]}>
        <View style={styles.centeredContent}>
          <Text >Main Content Area</Text>
        </View>    
      </View>
    </View>
  );
};

export default DesktopDrawer;
