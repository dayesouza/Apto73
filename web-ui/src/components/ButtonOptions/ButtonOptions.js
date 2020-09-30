import React, { useEffect, useState } from 'react';

import { Button, ButtonGroup } from 'shards-react';
import PropTypes from 'prop-types';

export default function ButtonOptions({
  options,
  value,
  change,
  lockOnLastButton,
}) {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <ButtonGroup className="w-100">
      {options.map((o, index) => (
        <Button
          block
          key={o.name}
          onClick={() => change(o.value)}
          type="button"
          active={
            lockOnLastButton
              ? index + 1 === options.length
              : selectedValue === o.value
          }
        >
          {o.name}
        </Button>
      ))}
    </ButtonGroup>
  );
}

ButtonOptions.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  change: PropTypes.func.isRequired,
  lockOnLastButton: PropTypes.bool,
};

ButtonOptions.defaultProps = {
  value: null,
  lockOnLastButton: false,
};
