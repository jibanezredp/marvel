import React from 'react';

const HeroThumbnail = ({ name, urls, thumbnail }) => {

  const thumbnailSrc = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className='hero-thumbnail'>
      <img src={thumbnailSrc} />
      <p>{name}</p>
    </div>
  );
};

HeroThumbnail.propTypes = {

};

export default HeroThumbnail;
