import { StyleSheet } from "react-native";
import { SELECTION_COLOR } from "./constants";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
    height: 21,
    justifyContent: "center",
    width: "auto",
  },
  dotDefault: {
    backgroundColor: SELECTION_COLOR,
    marginRight: 5,
  },
});
