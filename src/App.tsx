import {useCallback, useEffect, useState} from 'react';
import './App.css';

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({result: null, error: '', status: 'idle'});

  const run = useCallback(() => {
    setState({
      result: null,
      error: '',
      status: 'pending',
    });

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: '',
          status: 'settled',
        });
      })
      .catch((error) => {
        setState({
          result: null,
          error: error.message,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, state];
};

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();

  return json;
};

function App() {
  const [reFetchData, result] = useAsync(fetchData, true);

  return (
    <div className='App'>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default App;
