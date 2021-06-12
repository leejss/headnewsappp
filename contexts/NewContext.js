import React, { useContext, createContext, useState, useEffect } from "react";
import { NEWS_API } from "../api";
import { useFetch } from "../hooks/useFetch";

const NewContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const { data } = useFetch(NEWS_API);
  useEffect(() => {
    if (data) {
      setNews([...data.articles]);
    }
  }, [data]);
  const getArticleByIndex = (index) => {
    if (news) {
      return news[index];
    }
  };
  const value = {
    news,
    getArticleByIndex,
  };
  return <NewContext.Provider value={value}>{children}</NewContext.Provider>;
};

export const useNews = () => {
  const context = useContext(NewContext);
  return context;
};
