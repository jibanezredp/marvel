import React from 'react';
import Nav from './Nav';

const HeroThumbnail = ({ name, thumbnail, urls }) => {

  const thumbnailSrc = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className='hero-thumbnail'>
      <img src={thumbnailSrc} />
      <h2>{name}</h2>
      <Nav routes={urls} />
    </div>
  );
};

HeroThumbnail.propTypes = {
  name: React.PropTypes.string.isRequired,
  thumbnail: React.PropTypes.object.isRequired,
  urls: React.PropTypes.array.isRequired,
};

export default HeroThumbnail;
