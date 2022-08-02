import React from "react";
import axios from "axios";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { scale } from "../../../utils/NomalizeSize";
import { useNavigation } from "@react-navigation/native";

const CINEMETA_URL =
  "https://cinemeta-catalogs.strem.io/top/catalog/movie/top.json";

export default function ContinueWatchingItems() {
  const navigation = useNavigation();
  const [catalog, setCatalog] = React.useState(null);

  React.useEffect(() => {
    axios.get(CINEMETA_URL).then((response) => {
      setCatalog(response.data);
    });
  }, []);

  if (!catalog) return null;

  return (
    <View style={styles.container}>
      {catalog.metas.map((meta, index) => (
        <TouchableOpacity onPress={() => navigation.navigate('MetaDetails', {id: meta.id})}>
          <Image
            style={styles.posterImage}
            key={`${index}`}
            source={{ uri: `${meta.poster}` }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: 'wrap',
    marginTop: scale(25),
    marginHorizontal: scale(110),
    alignItems: "center",
  },
  posterImage: {
    width: scale(200),
    height: scale(304.5),
    borderRadius: scale(10),
    marginRight: scale(15),
    marginBottom: scale(15),
  },
});
