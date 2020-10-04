import React, { useContext } from 'react';
import { CaterogryContext } from './App';

const CategoryDetails = () => {
    
    const count = useContext(CaterogryContext);
    return (
        <div>
            <h4>Catergory details has : {count} </h4>
        </div>
    );
};

export default CategoryDetails;