import React, { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

const DatePicker = ({ selected, onSelect, ...props }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(Date.parse(selected || new Date()));
  }, [selected]);

  return (
    <ReactDatePicker
      {...props}
      className="mt-2 form-control"
      selected={date}
      onChange={(date) => onSelect(date)}
    />
  );
};

DatePicker.propTypes = {
  selected: PropTypes.instanceOf(Date),
  onSelect: PropTypes.func.isRequired,
};

export default DatePicker;
