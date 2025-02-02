import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let _isLoading = false;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      _isLoading = false;
      setIsLoading(_isLoading);
    } catch (error) {
      _isLoading = false;
      setIsLoading(_isLoading);
      setError(error);
    } finally {
      _isLoading = false;
      setIsLoading(_isLoading);
    }
  };
  return [isLoading, error, data];
};

export default useFetch;