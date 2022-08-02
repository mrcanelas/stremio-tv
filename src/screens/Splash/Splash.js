import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Dimensions } from "react-native";
import useFonts from "../../utils/useFonts";
import { scale } from "../../utils/NomalizeSize";
import { useNavigation, CommonActions } from "@react-navigation/core";

export default function Splash() {
  const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{name: 'Board'}]
            }))
        }, 4000);
    }, [])

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        locations={[0.5, 0.5]}
        colors={["#8a5aab", "#3a497d"]}
        style={styles.stremioLogo}
      >
        <View style={styles.stremioPlay}></View>
        <View style={styles.middleLine}></View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2c43",
    justifyContent: "center",
    alignItems: "center",
  },
  stremioLogo: {
    width: scale(150),
    height: scale(150),
    transform: [{ rotate: "45deg" }],
    justifyContent: "center",
    alignItems: "center",
  },
  stremioPlay: {
    width: 0,
    height: 0,
    backgroundColor: "tranparent",
    borderStyle: "solid",
    borderStartWidth: scale(40),
    borderLeftWidth: scale(0),
    borderRightWidth: scale(40),
    borderBottomWidth: scale(1.37254901961 * 40),
    borderStartColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    marginBottom: scale(12),
    marginLeft: scale(12),
    transform: [{ rotate: "45deg" }],
  },
});
