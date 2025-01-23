import React from 'react';
import Title from './Title';
import PlanetList from './PlanetList';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title
          headline="Planetas"
        />
        <PlanetList />
      </div>
    );
  }
}

export default SolarSystem;
