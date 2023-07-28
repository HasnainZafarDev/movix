import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../services/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchDataFromApi(url);
        setData(res);
        setError(null);
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    setData(null);
    setError(null);

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
