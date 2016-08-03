import React from 'react';
import _ from 'lodash';

const Hero = ({ hero, onToggleDetails }) => {

  const thumbnailSrc = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  const serieElems = _.map(hero.series.items, (item, i) => (
    <li key={i}>{item.name}</li>
  ));
  const comicsElems = _.map(hero.comics.items, (item, i) => (
    <li key={i}>{item.name}</li>
  ));

  const onClick = (e) => {
    e.preventDefault();
    onToggleDetails(hero.id);
  };

  return (
    <div className='hero'>
      <h1>{hero.name}</h1>
      <p>{hero.description}</p>
      <button onClick={onClick}>Return to list view</button>
      <div className='flex'>
        <img src={thumbnailSrc} />
        <div className='details'>
          <div>
            <h2>Comics</h2>
            <ul>
              {comicsElems}
            </ul>
          </div>
          <div>
            <h2>Series</h2>
            <ul>
              {serieElems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  hero: React.PropTypes.object.isRequired,
  onToggleDetails: React.PropTypes.func.isRequired,
};

export default Hero;
