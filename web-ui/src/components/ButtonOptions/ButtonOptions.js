import React, { useEffect, useState } from 'react';

import { Button, ButtonGroup } from 'shards-react';
import PropTypes from 'prop-types';

export default function ButtonOptions({ options, value, change }) {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <ButtonGroup className="w-100">
      {options.map((o) => (
        <Button
          block
          key={o}
          onClick={() => change(o)}
          type="button"
          active={selectedValue === o}
        >
          {o}
        </Button>
      ))}
    </ButtonGroup>
  );
}

ButtonOptions.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  change: PropTypes.func.isRequired,
};

ButtonOptions.defaultProps = {
  value: null,
};
