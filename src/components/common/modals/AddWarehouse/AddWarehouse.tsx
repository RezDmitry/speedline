import React, { useState } from 'react';
import * as yup from 'yup';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';

import ModalButton from '../ModalButton/ModalButton';
import FormModal from '../FormModal/FormModal';
import SuccessAddWarehouse from './SuccessAddWarehouse/SuccessAddWarehouse';

interface IAddWarehouseProps {
  close: () => void,
  // eslint-disable-next-line no-unused-vars
  addWarehouse: (value: any) => void
}

const AddWarehouseSchema = yup.object().shape({
  name: yup.string()
    .required('Required')
    .min(2, 'Must be longer than 1 characters')
    .max(20, 'Must be smaller than 21 characters'),
  length: yup.number()
    .required('Required')
    .min(1, 'Must be longer than 1 characters')
    .max(5, 'Must be smaller than 6 characters')
    .lessThan(10000, 'Must be smaller than 10000')
    .positive('Must be positive'),
  width: yup.number()
    .required('Required')
    .min(1, 'Must be longer than 1 characters')
    .max(5, 'Must be smaller than 6 characters')
    .lessThan(10000, 'Must be smaller than 10000')
    .positive('Must be positive'),
  height: yup.number()
    .required('Required')
    .min(1, 'Must be longer than 1 characters')
    .max(5, 'Must be smaller than 6 characters')
    .lessThan(10000, 'Must be smaller than 10000')
    .positive('Must be positive'),
});

const AddWarehouse = ({ close, addWarehouse }: IAddWarehouseProps) => {
  const [success, toggleSuccess] = useState<boolean>(false);
  if (success) {
    return <SuccessAddWarehouse close={close} />;
  }
  return (
    <FormModal
      title="Adding a warehouse"
      close={close}
    >
      <Formik
        initialValues={{
          name: '', length: '', width: '', height: '',
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => {
            setTimeout(resolve, 500);
          });
          addWarehouse({ id: Date.now(), number: 1, ...values });
          toggleSuccess(true);
        }}
        validationSchema={AddWarehouseSchema}
      >
        {({ errors }) => (
          <Form className="modal-form">
            <label htmlFor="name">
              Name of the warehouse
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Enter a name"
                className={`${errors.name && 'modal-form__input_error'} modal-form__input`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="modal-form__error"
              />
            </label>
            <label htmlFor="length">
              Length, m
              <Field
                id="length"
                name="length"
                type="text"
                placeholder="Enter a length"
                className={`${errors.length && 'modal-form__input_error'} modal-form__input`}
              />
              <ErrorMessage
                name="length"
                component="div"
                className="modal-form__error"
              />
            </label>
            <label htmlFor="width">
              Width, m
              <Field
                id="width"
                name="width"
                type="text"
                placeholder="Enter a width"
                className={`${errors.width && 'modal-form__input_error'} modal-form__input`}
              />
              <ErrorMessage
                name="width"
                component="div"
                className="modal-form__error"
              />
            </label>
            <label htmlFor="height">
              Height, m
              <Field
                id="height"
                name="height"
                type="text"
                placeholder="Enter a height"
                className={`${errors.height && 'modal-form__input_error'} modal-form__input`}
              />
              <ErrorMessage
                name="height"
                component="div"
                className="modal-form__error"
              />
            </label>
            <ModalButton>
              Add a warehouse
            </ModalButton>
          </Form>
        )}
      </Formik>
    </FormModal>
  );
};
export default AddWarehouse;
