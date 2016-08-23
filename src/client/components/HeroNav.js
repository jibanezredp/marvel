import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

const HeroNav = ({ id, routes }) => {

  const r = _.map(routes, (route, i) => {
    if (route.type === 'detail') {
      return (
        <div key={i}>
          <Link to={`/hero/${id}`}>{route.type}</Link>
        </div>
      );
    }
    else {
      return <div key={i}><a href={route.url}>{route.type}</a></div>;
    }
  });

  return (
    <nav className='flex-nav'>
      {r}
    </nav>
  );
};

HeroNav.propTypes = {
  id: React.PropTypes.number.isRequired,
  routes: React.PropTypes.array.isRequired,
};

export default HeroNav;
