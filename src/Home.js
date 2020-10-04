import React from 'react';
import Catergory from './Catergory';

const Home = () => {
    
    const homeStyle={
        border:"1px solid blue",
        padding:"20px"
    }
    return (
        <div style={homeStyle}>
            <h1>This is home</h1>
            <Catergory/>
        </div>
    );
};

export default Home;