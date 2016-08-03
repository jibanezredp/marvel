import React from 'react';
import _ from 'lodash';

const Nav = ({ id, onToggleDetails, routes }) => {

  const onClick = (e) => {
    e.preventDefault();
    onToggleDetails(id);
  };

  const r = _.map(routes, (route, i) => {
    if (route.type === 'detail') {
      return (
        <div key={i}>
          <a href={route.url} onClick={onClick}>{route.type}</a>
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

Nav.propTypes = {
  id: React.PropTypes.number.isRequired,
  onToggleDetails: React.PropTypes.func.isRequired,
  routes: React.PropTypes.array.isRequired,
};

export default Nav;
