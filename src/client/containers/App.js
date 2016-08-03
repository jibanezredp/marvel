import React from 'react';
import { connect } from 'react-redux';
import { getProps } from '../selectors';
import {
  fetchHeroes,
} from '../actions/heroes';

class App extends React.Component {

  componentWillMount() {
    this.props.fetchAll();
  }

  render() {
    return (
      <div className='marvel'>
      </div>
    );
  }
}

App.propTypes = {

};

const mapDispatchToProps = (dispatch) => ({
  fetchAll: () => {
    dispatch(fetchHeroes());
  },
});

export default connect(getProps, mapDispatchToProps)(App);
