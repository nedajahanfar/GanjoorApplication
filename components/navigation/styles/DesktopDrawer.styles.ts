import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  sidebar: {
    backgroundColor: "#f5f5f5",
    borderRightWidth: 1,
    borderRightColor: "#ddd",
    position: "relative", 
  },

  sidebarOpen: {
    width: 240,
  },

  sidebarClosed: {
    width: 50,
  },

  fixedToggleWrapper: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },

  toggleButton: {
    backgroundColor: "#e0e0e0",
    padding: 6,
    borderRadius: 4,
    alignItems: "center",
    width: 30,
  },

  menu: {
    marginTop: 50, 
    padding: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#444",
  },

  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },

  link: {
    fontSize: 16,
    paddingVertical: 8,
    color: "#333",
    fontWeight: "500",
  },

  content: {
    flex: 1,
    backgroundColor: "#fff",
  },

  contentShrink: {
    marginLeft: 0,
  },

  contentExpand: {
    marginLeft: 0,
  },

  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
