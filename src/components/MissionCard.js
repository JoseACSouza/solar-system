import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <tr data-testid="mission-card">
        <td data-testid="mission-name">{ name }</td>
        <td data-testid="mission-year">{ year }</td>
        <td data-testid="mission-country">{ country }</td>
        <td data-testid="mission-destination">{ destination }</td>
      </tr>
    );
  }
}
MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
