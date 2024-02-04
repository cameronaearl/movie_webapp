import React from 'react';
import './App.css';
import { Navbar } from './Layouts/NavbarAndFooter/Navbar';
import { ExploreTopMovies } from './Layouts/HomePage/ExploreTopMovies';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopMovies/>
    </div>

  );
}

export default App;
