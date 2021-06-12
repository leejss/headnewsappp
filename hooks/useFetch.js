import { useState, useEffect } from "react";

const requestOptions = {
  method: "GET",
};

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, requestOptions);
        const json = await res.json();
        if (json) {
          setData(json);
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
    fetchData();
  }, [url]);

  return { data };
};
