import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function CreateHabit ({ habitArea, borderColor}){

  function handleCreate(){
    console.log(`Botao da area clicado: ${habitArea}`)
  }
  return(
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, {borderColor: borderColor}]}
      onPress={handleCreate}
    >
      <Text style={styles.habitTitle}>
        Adicionar meta {habitArea === "Mente" ? "da" : "do"} {habitArea}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    width: 315,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderStyle: "dotted",
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
  habitTitle:{
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  }
})