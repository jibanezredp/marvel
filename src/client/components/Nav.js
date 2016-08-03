import React from 'react';
import _ from 'lodash';

const Nav = ({ routes }) => {

  const r = _.map(routes, route => (
    <div><a href={route.url}>{route.type}</a></div>
  ));

  return (
    <nav className='flex-nav'>
      {r}
    </nav>
  );
};

Nav.propTypes = {
  routes: React.PropTypes.array.isRequired,
};

export default Nav;
