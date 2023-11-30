import axios from 'axios';
import { useState, useEffect } from 'react';

const useCurrencyInfo = (url) => {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState(null);
  const [dataloaded, setloaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloaded(true);
        let result = await axios(url)
        // let jsonData = await result.json();
        setdata(result.data);
        // console.log(result);
      } catch (error) {
        seterror(error);
      } finally {
        setloaded(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, error, dataloaded];
};

export default useCurrencyInfo;
