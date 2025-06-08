import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    backgroundColor: "#eee",
    height: "100%",
    paddingTop: 20,
  },
  sidebarOpen: {
    width: 200,
  },
  sidebarClosed: {
    width: 50,
    alignItems: "center",
  },
  toggleButton: {
    padding: 10,
    position: "absolute",
    top: 10,
    left: 0,
    zIndex: 10,
  },
  menu: {
    marginTop: 40,
    paddingHorizontal: 10,
  },
  link: {
    marginVertical: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentShrink: {
    marginLeft: 0,
  },
  contentExpand: {
    marginLeft: -150,
  },
});

export default styles;
