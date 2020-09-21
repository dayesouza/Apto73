import React, { useEffect } from 'react';
import { FormInput, FormGroup, Button, FormFeedback } from 'shards-react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import ButtonOptions from '../../../components/ButtonOptions/ButtonOptions';

export default function FormWater({ save, water }) {
  const { register, handleSubmit, errors, reset, setValue, watch } = useForm();

  const userOptions = ['Day', 'Pri'];

  const watchUserValue = watch('user', water.user ? water.user : null);

  const changeUser = (user) => {
    setValue('user', user);
  };

  useEffect(() => {
    reset(water);
  }, [water]);

  const onSave = (data) => save(data);
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <FormGroup>
        {water._id && (
          <input name="_id" ref={register()} id="_id" type="hidden" />
        )}
        <label htmlFor="date">Date</label>
        <FormInput
          name="date"
          innerRef={register({ required: true })}
          id="date"
          autoComplete="false"
          invalid={errors.date}
          placeholder="29/05/2020"
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
        <ButtonOptions
          change={changeUser}
          value={watchUserValue}
          options={userOptions}
        />
        <FormFeedback>Please select the user</FormFeedback>
      </FormGroup>

      <FormGroup>
        <label htmlFor="price">How much was it</label>
        <FormInput
          type="number"
          innerRef={register({ min: 0, required: true })}
          name="value"
          id="price"
          autoComplete="false"
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
};
