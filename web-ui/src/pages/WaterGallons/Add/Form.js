import React, { useEffect, useState } from 'react';
import { FormInput, FormGroup, Button, FormFeedback } from 'shards-react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import ButtonOptions from '../../../components/ButtonOptions/ButtonOptions';
import DatePicker from '../../../components/DatePicker/DatePicker';
import { Link } from 'react-router-dom';

export default function FormWater({ save, water, residents }) {
  const [showDateField, setShowDateField] = useState(false);
  const [residentsList, setResidentsList] = useState(residents);
  const { register, handleSubmit, errors, reset, setValue, watch } = useForm();

  const today = new Date().toLocaleDateString();
  const yesterday = new Date(
    new Date().setDate(new Date().getDate() - 1)
  ).toLocaleDateString();

  const dateOptions = [
    { name: 'Today', value: today },
    { name: 'Yesterday', value: yesterday },
    { name: 'Custom', value: 'Custom' },
  ];

  const watchUserValue = watch('user', water.user ? water.user : null);
  const watchDateValue = watch('date', water.date ? water.date : new Date());

  const changeUser = (user) => {
    setValue('user', user);
  };

  const changeDate = (date) => {
    if (date === 'Custom') {
      setShowDateField(true);
      return;
    }
    setValue('date', date);
  };

  useEffect(() => {
    reset(water);
    if (water._id) setShowDateField(true);
  }, [water]);

  useEffect(() => {
    setResidentsList(residents);
  }, [residents]);

  const onSave = (data) => save(data);
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <FormGroup>
        {water._id && (
          <input name="_id" ref={register()} id="_id" type="hidden" />
        )}
        <label htmlFor="date">Date</label>

        {!water._id && (
          <ButtonOptions
            change={changeDate}
            value={watchDateValue}
            options={dateOptions}
            lockOnLastButton={showDateField}
          />
        )}

        {showDateField && (
          <DatePicker
            wrapperClassName="d-block"
            selected={watchDateValue}
            onSelect={changeDate}
          />
        )}
        <FormInput
          name="date"
          innerRef={register({ required: true })}
          id="date"
          className="d-none"
          invalid={errors.date}
        />
        <FormFeedback>Please insert the date</FormFeedback>
      </FormGroup>
      <FormGroup>
        <label htmlFor="user">Who Bought it</label>
        <FormInput
          name="user"
          innerRef={register({ required: true })}
          id="user"
          className="d-none"
          invalid={errors.user}
        />
        <br />
        {!residents.length && (
          <h3>
            <Link to="/resident">
              <Button theme="warning">Please insert at least one here</Button>
            </Link>
          </h3>
        )}
        {residents.length > 0 && (
          <ButtonOptions
            change={changeUser}
            value={watchUserValue}
            options={residents}
            defaultValueProp="name"
          />
        )}
        <FormFeedback>Please select the user</FormFeedback>
      </FormGroup>

      <FormGroup>
        <label htmlFor="price">How much was it</label>
        <FormInput
          type="number"
          step="0.01"
          innerRef={register({ min: 0, required: true })}
          name="value"
          id="price"
          autoComplete="off"
          invalid={errors.value}
          placeholder="R$ 14.00"
        />
        <FormFeedback>Please insert the price</FormFeedback>
      </FormGroup>
      <Button type="submit">Save</Button>
    </form>
  );
}

FormWater.propTypes = {
  save: PropTypes.func.isRequired,
  residents: PropTypes.array.isRequired,
  water: PropTypes.object,
};

FormWater.defaultProps = {
  water: {},
};
