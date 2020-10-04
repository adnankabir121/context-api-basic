import React, { useState, createContext } from 'react';
import Header from './Header';
import Home from './Home';
import Shipment from './Shipment';

export const CaterogryContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <CaterogryContext.Provider value={[count,setCount]}>
      <p>Count Value Of App Js : {count}</p>
      <Header/>
      <Home />
      <Shipment />
    </CaterogryContext.Provider>
  );
};

export default App;