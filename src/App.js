
import React, { createContext } from 'react';
import './App.css';
import ComA from './Components/ComA';

const FName = createContext();
const Name = createContext();

function App() {
    return (
        <>
            <FName.Provider value={"Dudhatra"}>
                <Name.Provider value={"Parth"}>
                    <ComA />
                </Name.Provider>
            </FName.Provider>
        </>
    );
}

export default App;
export {FName, Name};