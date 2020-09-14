import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as waterActions from '../../redux/actions/waterActions';
import { bindActionCreators } from 'redux';
import List from './List/List';

class WaterGallons extends Component {
  constructor(props) {
    super();

    this.state = {
      waterList: [],
      error: null,
      loading: false,
      refreshing: false,
    };
  }

  componentDidMount() {
    const { water } = this.props;
    if (Object.keys(water).length === 0) {
      this.fetchList();
    }
  }

  fetchList = () => {
    return this.props.actions.loadWater().catch((_) => {
      this.setState({ error: 'Undefined error' });
    });
  };

  render() {
    return (
      <div>
        <h1>Water Gallons</h1>

        <h3>History</h3>
        <List waterList={this.props.water} />
      </div>
    );
  }
}

WaterGallons.propTypes = {
  water: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    water: state.water.sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    }),
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadWater: bindActionCreators(waterActions.loadWater, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WaterGallons);
