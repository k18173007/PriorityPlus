import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent'

function App() {
 
    return (
        <div className="App">
            <div className="container-fluid" style={{ background: "#2F303A" }}>
               <MainComponent />
            </div>
        </div>
    );
}

export default App;