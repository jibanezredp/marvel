import React from 'react';
import { IndexLink } from 'react-router';

const App = ({ children }) =>
  <div className='marvel'>
    <IndexLink to='/' activeStyle={{ color: 'green' }} >Home</IndexLink>
    {children}
  </div>

export default App;
