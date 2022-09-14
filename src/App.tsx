import {Children, cloneElement, useState} from 'react';

const style = {
  style: {
    fontSize: '60px',
  },
};

const Parent = ({children}) => {
  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {...style});
    return newChild;
  });
};

const TurnOnOff = ({children}: any) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {isOn, onTurn});

    return newChild;
  });
};

const TurnedOn = ({isOn, children}: any) => (isOn ? children : null);

const TurnedOff = ({isOn, children}: any) => (isOn ? null : children);

const TurnButton = ({isOn, onTurn}: any) => {
  return <button onClick={onTurn}>Turn is {isOn ? 'On' : 'OFF'}</button>;
};

const Home = () => {
  return (
    <TurnOnOff>
      <TurnedOn>Quando estiver On</TurnedOn>
      <TurnedOff>Quando estiver Off</TurnedOff>
      <TurnButton />
    </TurnOnOff>
  );
};

export default Home;
