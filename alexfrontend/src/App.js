import React from 'react';
import logo from './logo.svg';
import SearchResults from './SearchResults.js';
import ListItem from './ListItem.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchResults />
      </header>
    </div>
  );
}

export default App;
