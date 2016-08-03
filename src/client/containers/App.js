import React from 'react';
import { connect } from 'react-redux';
import { getProps } from '../selectors';

class App extends React.Component {

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

});

export default connect()(App);
