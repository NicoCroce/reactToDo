import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { addToDo } from '../../actions';

export class Alert extends Component {

  render() {
    return (
      <h4>Alerta</h4>
    )
  }
}

const mapStateToProps = state => {
  return { counter: Object.keys(state.todos).length }
}

export default connect(mapStateToProps, null)(Alert);