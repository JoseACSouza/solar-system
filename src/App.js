import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container App">
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
