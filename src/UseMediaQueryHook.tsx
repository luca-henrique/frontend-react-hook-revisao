import {useDebugValue, useEffect, useState} from 'react';

/*

Quando chamar o hook vou passar queryValue que é o media query 

*/

const useMediaQuery = (
  minWidth: number = 0,
  maxWidth: number = 0,
  initialValue = false,
) => {
  const [match, setMatch] = useState(initialValue);

  const verifyExistValueVariables = minWidth > 0 && maxWidth > 0;

  const verifyExistValueMinWidth =
    minWidth > 0 ? `(min-width:${minWidth}px)` : '';

  const verifyExistValueMinWidthMaxWidth =
    maxWidth > 0 ? `(max-width:${maxWidth}px)` : '';

  const addOtherCondition = verifyExistValueVariables ? `and` : '';

  const compositionAllVariables = `${verifyExistValueMinWidth} ${addOtherCondition} ${verifyExistValueMinWidthMaxWidth}`;

  useDebugValue(`Composition alll variables ${compositionAllVariables}`);

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(compositionAllVariables);

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
  const huge = useMediaQuery(768);
  console.log(huge);
  return (
    <div className='App'>
      <pre>oi</pre>
    </div>
  );
}

export default App;
