import {useState, memo, useCallback} from 'react';
import './App.css';

interface ButtonProps {
  incrementButton: (value: number) => void;
}

const Button = memo(function Button({incrementButton}: ButtonProps) {
  return <button onClick={() => incrementButton(10)}>increment</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = useCallback((num: number) => {
    setCount((counter) => counter + num);
  }, []);

  return (
    <div className='App'>
      <div className='card'>
        {count}
        <Button incrementButton={incrementCounter} />
      </div>
    </div>
  );
}

export default App;
