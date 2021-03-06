import React from 'react';
import HeroNav from './HeroNav';

const HeroThumbnail = (props) => {

  const thumbnailSrc = `${props.thumbnail.path}.${props.thumbnail.extension}`;

  return (
    <div className='hero-thumbnail'>
      <img src={thumbnailSrc} />
      <h2>{props.name}</h2>
      <HeroNav {...props} routes={props.urls} />
    </div>
  );
};

HeroThumbnail.propTypes = {
  name: React.PropTypes.string.isRequired,
  thumbnail: React.PropTypes.object.isRequired,
  urls: React.PropTypes.array.isRequired,
};

export default HeroThumbnail;
