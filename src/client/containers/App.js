import React from 'react';
import { connect } from 'react-redux';
import { getProps } from '../selectors';
import HeroList from '../components/HeroList';
import {
  fetchHeroes,
} from '../actions/heroes';

class App extends React.Component {

  componentWillMount() {
    this.props.fetchAll();
  }

  render() {
    return (
      <HeroList heroes={this.props.heroes} />
    );
  }
}

App.propTypes = {
  fetchAll: React.PropTypes.func.isRequired,
  heroes: React.PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchAll: () => {
    dispatch(fetchHeroes());
  },
});

export default connect(getProps, mapDispatchToProps)(App);
