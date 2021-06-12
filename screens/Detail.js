import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { Card, Image } from "react-native-elements";
import { useNews } from "../contexts/NewContext";
const DEFAULT_IMG_URL =
  "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png";

const styles = StyleSheet.create({
  img: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
const Detail = ({ route }) => {
  const { getArticleByIndex } = useNews();
  const { index } = route.params;
  const [article, setArticle] = useState({
    title: "",
    description: "",
    urlToImage: "",
  });
  useEffect(() => {
    const data = getArticleByIndex(index);
    if (data) {
      setArticle(data);
    }
  }, [index]);
  return (
    <Card>
      <Card.Title>{article.title}</Card.Title>
      <Card.Divider />
      <View>
        <Image
          source={{
            uri: article.urlToImage ? article.urlToImage : DEFAULT_IMG_URL,
          }}
          style={{ width: 200, height: 200 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text>{article.description}</Text>
      </View>
    </Card>
  );
};

export default Detail;
