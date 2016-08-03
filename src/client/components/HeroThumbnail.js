import React from 'react';
import Nav from './Nav';

const HeroThumbnail = (props) => {

  const thumbnailSrc = `${props.thumbnail.path}.${props.thumbnail.extension}`;

  return (
    <div className='hero-thumbnail'>
      <img src={thumbnailSrc} />
      <h2>{props.name}</h2>
      <Nav {...props} routes={props.urls} />
    </div>
  );
};

HeroThumbnail.propTypes = {
  name: React.PropTypes.string.isRequired,
  thumbnail: React.PropTypes.object.isRequired,
  urls: React.PropTypes.array.isRequired,
};

export default HeroThumbnail;
