import React, { useState, useContext } from 'react';
import { CaterogryContext } from './App';

const Header = () => {
    const [count,setCount] = useContext(CaterogryContext)
    return (
        <div>
            <h1>This is header : {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    );
};

export default Header;