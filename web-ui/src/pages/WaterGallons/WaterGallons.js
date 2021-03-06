import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as waterActions from '../../redux/actions/waterActions';
import * as residentActions from '../../redux/actions/residentActions';
import List from './List/List';
import { Col, Row } from 'shards-react';
import Spinner from '../../components/Spinner/Spinner';
import Toastr from '../../helpers/Toastr/Toastr';
import LinkButton from '../../components/LinkButton/LinkButton';
import InfoCard from '../../components/InfoCard/InfoCard';
import PageHeader from '../../components/PageHeader/PageHeader';

class WaterGallons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      refreshing: false,
      totalValue: 0,
      nextToBuy: '',
    };
  }

  componentDidMount() {
    const { waterList, residents } = this.props;
    if (Object.keys(waterList).length === 0) {
      this.fetchList();
    }

    if (Object.keys(residents).length === 0) {
      this.fetchResidentsList();
    }
  }

  delete = (water) => {
    return this.props.actions
      .deleteWater(water)
      .then((_) => {
        Toastr.success('Deleted successfully!');
      })
      .catch((_) => {
        this.setState({ error: 'Undefined error' });
      });
  };

  totalValue = () => {
    const total = this.props.waterList.reduce(
      (sum, object) => parseInt(object.value) + sum,
      0
    );
    return `$ ${total}`;
  };

  nextOne = () => {
    const { residents, waterList } = this.props;
    const latestUser = waterList[0]?.user;
    const latestIndex = residents.findIndex((r) => r.name === latestUser);

    if (residents.length && latestIndex >= residents.length - 1) {
      return residents[0].name;
    }

    if (residents.length) {
      return residents[latestIndex + 1].name;
    }
    return '--';
  };

  fetchList = () => {
    return this.props.actions.loadWater().catch((_) => {
      this.setState({ error: 'Undefined error' });
    });
  };

  fetchResidentsList = () => {
    return this.props.actions.loadResidents().catch((_) => {
      this.setState({ error: 'Undefined error' });
    });
  };

  render() {
    return (
      <>
        <PageHeader header="Water Gallons" />
        <Row>
          <Col className="mb-3">
            <InfoCard title="Next to buy" value={this.nextOne()} />
          </Col>
          <Col className="mb-3">
            <InfoCard title="Total spent" value={this.totalValue()} />
          </Col>
        </Row>
        <div className="d-flex justify-content-between">
          <h3>History</h3>
          {!this.props.loading && (
            <LinkButton name="Add" icon="plus" link="water-gallons/add" />
          )}
        </div>
        {this.props.loading && <Spinner />}
        <List deleteWater={this.delete} waterList={this.props.waterList} />
      </>
    );
  }
}

WaterGallons.propTypes = {
  waterList: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  residents: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    waterList: state.waterList,
    // .sort((a, b) => {
    //   if (a.date < b.date) return 1;
    //   if (a.date > b.date) return -1;
    //   return 0;
    // }),
    loading: state.apiCallsInProgress > 0,
    residents: state.residents,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadWater: bindActionCreators(waterActions.loadWater, dispatch),
      deleteWater: bindActionCreators(waterActions.deleteWater, dispatch),
      loadResidents: bindActionCreators(
        residentActions.loadResidents,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WaterGallons);
