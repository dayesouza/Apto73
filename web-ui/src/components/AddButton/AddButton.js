import React from 'react';
import { Button } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AddButton() {
  return (
    <Button>
      <FontAwesomeIcon icon="plus" />
      Add
    </Button>
  )
}