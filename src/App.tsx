import React from 'react';
import './App.css';
import TopBar from "./TopBar";
import DatasetView from "./DatasetView"

function App() {
    return (
        <div>
            <TopBar/>
            <DatasetView query={window.location.search}/>
        </div>
    );
}

export default App;