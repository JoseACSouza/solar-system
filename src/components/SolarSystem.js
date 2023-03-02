import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div data-testid="solar-system">
        <Title
          headline={ headline }
        />
      </div>
    );
  }
}

SolarSystem.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default SolarSystem;
