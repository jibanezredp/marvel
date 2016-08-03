import _ from 'lodash';
import * as hero from '../actions/heroes';

const initialState = {
  heroes: {
    data: {},
    isFetching: false,
  },
};

function heroes(state = {}, action) {
  switch (action.type) {
  case hero.REQUEST_HEROES:
    return {
      ...state,
      isFetching: true,
    };
  case hero.RECEIVE_HEROES:
    return {
      data: action.heroes,
      isFetching: false,
    };
  case hero.REQUEST_HERO:
    return {
      ...state,
      isFetching: true,
    };
  case hero.RECEIVE_HERO:
    return {
      data: {
        ...state.data,
        [action.id]: action.hero,
      },
      isFetching: false,
    };
  default:
    return state;
  }
}

function rootReducer(state = initialState, action) {
  return {
    heroes: heroes(state.heroes, action),
  };
}

export default rootReducer;
