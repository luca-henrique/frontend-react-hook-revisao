import {lazy, Suspense, useState} from 'react';

const LazyLoading = lazy(() => import('./LazyComponent'));

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((s) => !s)}>Aqui</button>
      <Suspense fallback={<div>Carregando</div>}>
        {show && <LazyLoading />}
      </Suspense>
    </>
  );
};

export default Home;
