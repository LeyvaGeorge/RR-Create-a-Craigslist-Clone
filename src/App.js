// Import data
import React from 'react';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import Directory from './components/Directory';


// Import components
import './App.css';
import SideBar from './components/SideBar';

function App(){
  return (
    <div className="App">
      <header>
        <h1>Craigslist</h1>
        <SearchBar/>
      </header>
      <Directory/>
      <div className='body-container'>
        <SideBar/>
        <Gallery/>
      </div>
    </div>
  );
}

export default App;
