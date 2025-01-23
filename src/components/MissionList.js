import React from 'react';
import MissionCard from './MissionCard';
import Missions from '../data/missions';
import './MissionList.css';

class MissionList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            {
              Object.keys(Missions[0])
                .map((mission, index) => (<th key={ index }>{mission}</th>))
            }
          </tr>
        </thead>
        <tbody>
          {
            Missions.map((mission) => (<MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />))
          }
        </tbody>
      </table>
    );
  }
}

export default MissionList;
