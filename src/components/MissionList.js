import React from 'react';
import MissionCard from './MissionCard';
import Missions from '../data/missions';

class MissionList extends React.Component {
  render() {
    return (Missions.map((mission) => (<MissionCard
      key={ mission.name }
      name={ mission.name }
      year={ mission.year }
      country={ mission.country }
      destination={ mission.destination }
    />)));
  }
}

export default MissionList;
