import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import Item from "../components/Item";
import { useNews } from "../contexts/NewContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Home = ({ navigation }) => {
  const { news } = useNews();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news && news}
        renderItem={({ item, index }) => (
          <Item item={item} index={index} navigation={navigation} />
        )}
        keyExtractor={(item, index) => item.url}
      />
    </SafeAreaView>
  );
};

export default Home;
