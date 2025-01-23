import React from 'react';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import './PlanetList.css';

class PlanetList extends React.Component {
  render() {
    return (
      <div className="solar-system">
        {
          Planets.map((planet) => (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))
        }
      </div>
    );
  }
}

export default PlanetList;
