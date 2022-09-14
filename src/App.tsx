import {createContext, useContext, useState} from 'react';

const TurnOnOffContext = createContext({});

const TurnOnOff = ({children}: any) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return (
    <TurnOnOffContext.Provider value={{isOn, onTurn}}>
      {children}
    </TurnOnOffContext.Provider>
  );
};

const TurnedOn = ({children}: any) => {
  const {isOn} = useContext(TurnOnOffContext);

  return isOn ? children : null;
};
const TurnedOff = ({children}: any) => {
  const {isOn} = useContext(TurnOnOffContext);
  return isOn ? null : children;
};

const TurnButton = () => {
  const {isOn, onTurn} = useContext(TurnOnOffContext);
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
