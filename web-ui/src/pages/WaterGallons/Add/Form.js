import React, { useEffect } from 'react';
import { FormInput, FormGroup, Button, FormFeedback } from 'shards-react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

export default function FormWater({ save, water }) {
  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(() => {
      reset(water);
  }, [water])


  const onSave = (data) => save(data);
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <FormGroup>
        <input
          name="_id"
          ref={register()}
          id="_id"
          type="hidden"
        />
        <label htmlFor="date">Date</label>
        <FormInput
          name="date"
          innerRef={register({ required: true })}
          id="date"
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
          invalid={errors.user}
          placeholder="Day or Pri"
        />
        <FormFeedback>Please insert the user</FormFeedback>
      </FormGroup>

      <FormGroup>
        <label htmlFor="price">How much was it</label>
        <FormInput
          type="number"
          innerRef={register({ min: 0, required: true })}
          name="value"
          id="price"
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
