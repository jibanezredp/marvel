import React from 'react';
import { map } from 'ramda';
import { connect } from 'react-redux';
import { getProps } from '../selectors';
import { fetchHero } from '../actions/heroes';

const makeLi = item => <li key={item.name}>{item.name}</li>;
const makeUl = map(makeLi);

class Hero extends React.Component {

  componentWillMount() {
    this.props.fetchOne(this.props.params.id);
  }

  render() {
    const { params: { id }, heroes: { data } } = this.props;
    const hero = data[id];

    if (!hero) return <div className='hero'></div>;

    return (
      <div className='hero'>
        <h1>{hero.name}</h1>
        <p>{hero.description}</p>
        <div className='flex'>
          <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
          <div className='details'>
            <div>
              <h2>Comics</h2>
              <ul>{makeUl(hero.comics.items)}</ul>
            </div>
            <div>
              <h2>Series</h2>
              <ul>{makeUl(hero.series.items)}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  heroes: React.PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchOne: (id) => {
    dispatch(fetchHero(id));
  },
});

export default connect(getProps, mapDispatchToProps)(Hero);
