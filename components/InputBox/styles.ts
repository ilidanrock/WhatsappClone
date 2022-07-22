import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";



const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    minHeight: Layout.window.height * 0.08,
    borderRadius: 30,
    marginHorizontal: "3%",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: "2%",
    boxShadow: "0px 0px 10px 0px #9da7ab"
  },
  mainContainer: {
    marginHorizontal: "3%",
    flexDirection: "row",
    minHeight: Layout.window.height * 0.04,
    maxWidth: Layout.window.width * 0.7,
  },
  containerMain: {
    flex: 1
  }
})

export default styles;