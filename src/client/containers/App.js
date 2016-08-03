import React from 'react';
import { connect } from 'react-redux';
import { getProps } from '../selectors';
import HeroList from '../components/HeroList';
import Hero from '../components/Hero';
import {
  fetchHeroes,
  toggleDetails,
} from '../actions/heroes';

class App extends React.Component {

  componentWillMount() {
    this.props.fetchAll();
  }

  render() {
    let display = <HeroList {...this.props} />;
    if (this.props.heroes.details.toggled)
      display = <Hero {...this.props} hero={this.props.heroes.details.data} />;

    return (
      <div className='marvel'>
        {display}
      </div>
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
  onToggleDetails: (id) => {
    dispatch(toggleDetails(id));
  },
});

export default connect(getProps, mapDispatchToProps)(App);
