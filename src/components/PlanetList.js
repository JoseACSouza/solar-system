import React from 'react';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class PlanetList extends React.Component {
  render() {
    return (Planets.map((planet) => (<PlanetCard
      key={ planet.name }
      planetName={ planet.name }
      planetImage={ planet.image }
    />)));
  }
}

export default PlanetList;
