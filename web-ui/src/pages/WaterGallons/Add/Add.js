import React, { Component } from 'react';
import Form from './Form';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as waterActions from '../../../redux/actions/waterActions';
import { withRouter } from 'react-router-dom';

class Add extends Component {
  state = {
    error: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    //get id and pass
    this.props.actions.getWaterById(id);

    debugger;
  }

  save = (values) => {
    values.date = new Date();
    this.props.actions
      .saveWater(values)
      .then((_) => {
        this.props.history.push('/water-gallons');
      })
      .catch((_) =>
        this.setState({ error: 'Undefined error. Please try again later.' })
      );
  };

  render() {
    return (
      <>
        <h1>Add new water gallon</h1>
        <Form save={this.save} />
      </>
    );
  }
}

Add.propTypes = {
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      saveWater: bindActionCreators(waterActions.saveWater, dispatch),
      getWaterById: bindActionCreators(waterActions.getWaterById, dispatch),
      deleteWater: bindActionCreators(waterActions.deleteWater, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Add));
