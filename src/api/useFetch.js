import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const abortCont = new AbortController();
  useEffect(() => {
    fetch(url, { signal: abortCont.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("Network Error");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setIsError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          return;
        } else {
          setIsLoading(false);
          setIsError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
