import React, { createContext } from 'react'
import ComX from './ComX'
import data from './data';
import App from './App2.css';

const Name = createContext();
console.log(data);

function App2() {
    
    return (
        <>
            <Name.Provider value={data}>
                <ComX />
            </Name.Provider>
        </>
    )
}

export default App2
export {Name};