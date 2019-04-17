import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { addToDo } from '../../actions';

export class HeaderContainer extends Component {

  render() {
    return (
      <Header todoCount={this.props.counter} ></Header>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      addToDo: value => dispatch(addToDo(value))
  }
};

const mapStateToProps = state => {
  debugger;
  return { counter: Object.keys(state.newTodo).length }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
