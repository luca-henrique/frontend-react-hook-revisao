import {useEffect, useState} from 'react';
import './App.css';

const useFetch = (url: any, options: any) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));

      try {
        const response = await fetch(url, options);

        const jsonResult = await response.json();

        setResult(jsonResult);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };
    fetchData();
  }, []);

  return [result, loading];
};

function App() {
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {},
  );

  console.log(result);

  return (
    <div className='App'>
      <h1>Oi</h1>
    </div>
  );
}

export default App;
