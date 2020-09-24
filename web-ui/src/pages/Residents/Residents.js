import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddButton from '../../components/AddButton/AddButton';

class Residents extends Component {
  render() {
    return (
      <>
        <h1>Residents</h1>
        <Link to="resident">
          <AddButton />
        </Link>
      </>
    );
  }
}

export default Residents;
