import React, { Component } from 'react';
import { Counter } from './Counter';
import { connect } from 'react-redux';
import { multireducerBindActionCreators } from 'multireducer-adailey14';
import * as CounterActions from 'redux-base/modules/counter';

const mapStateToProps = (state) => {
  return {
    counter: state.someCustomCounter
  };
};

const mapDispatchToProps = (dispatch) => {
  return multireducerBindActionCreators(CounterActions, 'customCounter', dispatch);
};

class CounterMulti extends Component {
  render() {

    return (
      <div>
        Custom counter
        <Counter {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterMulti);