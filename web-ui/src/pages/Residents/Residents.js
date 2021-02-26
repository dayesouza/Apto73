import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as residentActions from '../../redux/actions/residentActions';

import LinkButton from '../../components/LinkButton/LinkButton';
import PropTypes from 'prop-types';
import List from './List/List';

class Residents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      refreshing: false,
      residents: 0,
    };
  }

  componentDidMount() {
    const { residents } = this.props;
    if (Object.keys(residents).length === 0) {
      this.fetchList();
    }
  }

  fetchList = () => {
    return this.props.actions.loadResidents().catch((_) => {
      this.setState({ error: 'Undefined error' });
    });
  };

  render() {
    return (
      <>
        <h1>Residents</h1>
        <LinkButton name="Add" icon="plus" link="residents/add" />

        <List residents={this.props.residents} />
      </>
    );
  }
}

Residents.propTypes = {
  residents: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    residents: state.residents.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    }),
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadResidents: bindActionCreators(
        residentActions.loadResidents,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Residents);
