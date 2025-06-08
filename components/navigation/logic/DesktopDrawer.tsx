import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/DesktopDrawer.styles";

const DesktopDrawer = () => {
  const [open, setOpen] = useState(true);

  return (
    <View style={styles.container}>
      <View style={[styles.sidebar, open ? styles.sidebarOpen : styles.sidebarClosed]}>
        <TouchableOpacity onPress={() => setOpen(!open)} style={styles.toggleButton}>
          <Text>{open ? "←" : "→"}</Text>
        </TouchableOpacity>
        {open && (
          <View style={styles.menu}>
            <Text style={styles.link}>Home</Text>
            <Text style={styles.link}>About</Text>
          </View>
        )}
      </View>
      <View style={[styles.content, open ? styles.contentShrink : styles.contentExpand]}>
        <Text>Main Content Area</Text>
      </View>
    </View>
  );
};

export default DesktopDrawer;
