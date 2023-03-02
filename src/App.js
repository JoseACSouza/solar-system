import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SolarSystem
          headline="Planetas"
        />
        <Missions />
      </div>
    );
  }
}

export default App;
