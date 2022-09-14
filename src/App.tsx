import {lazy, Suspense, useState} from 'react';

const loadComponent = () => {
  console.log('Fazendo um pre carregamento de um component');
  return import('./LazyComponent');
};

const LazyLoading = lazy(() => import('./LazyComponent'));

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((s) => !s)} onMouseOver={loadComponent}>
        Aqui
      </button>
      <Suspense fallback={<div>Carregando</div>}>
        {show && <LazyLoading />}
      </Suspense>
    </>
  );
};

export default Home;
