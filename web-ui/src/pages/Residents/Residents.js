import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as residentActions from '../../redux/actions/residentActions';

import LinkButton from '../../components/LinkButton/LinkButton';
import List from './List/List';

function Residents() {
  const [error, setError] = useState(null);
  const residents = useSelector((state) => state.residents);
  const loading = useSelector((state) => state.apiCallsInProgress > 0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!residents.length) {
      fetchList();
    }
  }, []);

  const fetchList = () => {
    dispatch(residentActions.loadResidents()).catch((_) => {
      setError({ error: 'Undefined error' });
    });
  };

  return (
    <>
      <h1>Residents</h1>
      <LinkButton name="Add" icon="plus" link="residents/add" />

      <List residents={residents} />
    </>
  );
}

export default Residents;
