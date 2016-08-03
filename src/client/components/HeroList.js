import React from 'react';
import _ from 'lodash';
import HeroThumbnail from './HeroThumbnail';

const HeroList = (props) => {

  const heroElems = _.map(props.heroes.data, hero => (
    <HeroThumbnail {...props} {...hero} key={hero.id} />
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
