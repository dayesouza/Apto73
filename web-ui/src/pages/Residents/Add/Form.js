import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import DatePicker from '../../../components/DatePicker/DatePicker';
import { FormGroup, FormFeedback, FormInput, Button } from 'shards-react';

export default function FormResident({ save, resident }) {
  const { register, handleSubmit, errors, reset, setValue, watch } = useForm();

  useEffect(() => {
    reset(resident);
  }, [resident]);

  const watchDateValue = watch(
    'birthday',
    resident.birthday ? resident.birthday : new Date()
  );

  const changeDate = (birthday) => {
    setValue('birthday', birthday);
  };

  const onSave = (data) => save(data);

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <FormGroup>
        <label htmlFor="name">Name</label>
        <FormInput
          name="name"
          innerRef={register({ required: true })}
          id="name"
          autoComplete="off"
          invalid={errors.name}
        />
        <FormFeedback>Please insert a name</FormFeedback>
      </FormGroup>

      <FormGroup>
        <label htmlFor="email">Email</label>
        <FormInput
          name="email"
          type="email"
          innerRef={register()}
          id="email"
          autoComplete="off"
          invalid={errors.email}
        />
        <FormFeedback>Please insert a valid email</FormFeedback>
      </FormGroup>
      <FormGroup>
        {resident._id && (
          <input name="_id" ref={register()} id="_id" type="hidden" />
        )}
        <label htmlFor="birthday">Birthday</label>

        <DatePicker
          wrapperClassName="d-block"
          selected={watchDateValue}
          onSelect={changeDate}
        />
        <FormInput
          name="birthday"
          innerRef={register({ required: true })}
          id="birthday"
          className="d-none"
          invalid={errors.birthday}
        />
        <FormFeedback>Please insert the birthday</FormFeedback>
      </FormGroup>
      <Button type="submit">Save</Button>
    </form>
  );
}

FormResident.propTypes = {
  save: PropTypes.func.isRequired,
  resident: PropTypes.object,
};

FormResident.defaultProps = {
  resident: {},
};
