import React, {useEffect, useState} from 'react';

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1>Algo deu errado.</h1>;
    }

    return this.props.children;
  }
}

const ItWitllTrowError = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
    if (count > 3) {
      throw new Error('Chato');
    }
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((s) => s + 1)}>
        Click to increase {count}
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <p style={{fontSize: '60px'}}>Show hooks</p>
      <ErrorBoundary>
        <ItWitllTrowError />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
