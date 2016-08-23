import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getProps } from '../selectors';
import HeroThumbnail from '../components/HeroThumbnail';
import { fetchHeroes } from '../actions/heroes';

class HeroList extends React.Component {

  componentWillMount() {
    this.props.fetchAll();
  }

  render() {
    const heroElems = _.map(this.props.heroes.data, hero => (
      <HeroThumbnail {...this.props} {...hero} key={hero.id} />
    ));
    return (
      <div className='hero-list'>
        {heroElems}
      </div>
    );
  }
}

HeroList.propTypes = {
  heroes: React.PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchAll: () => {
    dispatch(fetchHeroes());
  },
});

export default connect(getProps, mapDispatchToProps)(HeroList);
