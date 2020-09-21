import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as waterActions from '../../redux/actions/waterActions';
import { bindActionCreators } from 'redux';
import List from './List/List';
import { Button } from 'shards-react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../../components/Spinner/Spinner';

class WaterGallons extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    const { waterList } = this.props;
    if (Object.keys(waterList).length === 0) {
      this.fetchList();
    }
  }

  delete = (water) => {
    return this.props.actions.deleteWater(water).catch((_) => {
      this.setState({ error: 'Undefined error' });
    });
  };

  fetchList = () => {
    return this.props.actions.loadWater().catch((_) => {
      this.setState({ error: 'Undefined error' });
    });
  };

  render() {
    return (
      <div>
        <h1>Water Gallons</h1>
        <div className="d-flex justify-content-between">
          <h3>History</h3>
          <div>
            {this.props.loading ? (
              <Spinner />
            ) : (
              <Link to="water-gallon">
                <Button>
                  <FontAwesomeIcon icon="plus" />
                  Add
                </Button>
              </Link>
            )}
          </div>
        </div>
        <List deleteWater={this.delete} waterList={this.props.waterList} />
      </div>
    );
  }
}

WaterGallons.propTypes = {
  waterList: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    waterList: state.waterList.sort((a, b) => {
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
      deleteWater: bindActionCreators(waterActions.deleteWater, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WaterGallons);
