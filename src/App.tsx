import {useEffect, useState} from 'react';

/*

Quando chamar o hook vou passar queryValue que é o media query 

*/

const useMediaQuery = (
  minWidth: number,
  maxWidth: number,
  initialValue = false,
) => {
  const [match, setMatch] = useState(initialValue);

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(
      `${minWidth && `(min-width:${minWidth}px)`} and ${
        maxWidth && `(max-width:${maxWidth}px)`
      }`,
    );

    const handleChange = () => {
      if (!isMounted) {
        setMatch(Boolean(matchMedia.matches));
      }
    };

    matchMedia.addEventListener('changer', handleChange);
    setMatch(Boolean(matchMedia.matches));

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('changer', handleChange);
    };
  }, [minWidth, maxWidth]);

  return match;
};

function App() {
  const huge = useMediaQuery(768, 979);
  console.log(huge);
  return (
    <div className='App'>
      <pre>oi</pre>
    </div>
  );
}

export default App;
