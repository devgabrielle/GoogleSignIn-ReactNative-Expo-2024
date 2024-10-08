import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 85,
    paddingBottom: 32,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 20,
    margin: 20,
    padding: 10,
    width: '50%'
  },

  buttonGoogle: {
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: '#DDDDDD',
    borderRadius: 20,
    margin: 20,
    padding: 10,
    width: '60%'
  }
});