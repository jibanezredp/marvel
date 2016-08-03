import React from 'react';
import _ from 'lodash';
import HeroThumbnail from './HeroThumbnail';

const HeroList = ({ heroes }) => {

  const heroElems = _.map(heroes.data, hero => (
    <HeroThumbnail {...hero} key={hero.id} />
  ));

  return (
    <div className='hero-list'>
      {heroElems}
    </div>
  );
};

HeroList.propTypes = {
  heroes: React.PropTypes.object.isRequired,
};

export default HeroList;
