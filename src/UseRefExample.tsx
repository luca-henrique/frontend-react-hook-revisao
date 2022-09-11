import {useEffect, useRef, useState} from 'react';
import './App.css';

const useFetch = (url: any, options: any) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    if (url !== urlRef) {
      urlRef.current = url;
    }
  }, [url, options]);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));

      try {
        const response = await fetch(urlRef.current, optionsRef.current);

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
  const [postId, setPostId] = useState('');

  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/',
    {},
  );

  if (loading) {
    return <p>Carregando</p>;
  }

  return (
    <div className='App'>
      {!loading &&
        result.map((post) => {
          return (
            <div key={post.id} onClick={() => setPostId(post.id)}>
              <p>{post.title}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
