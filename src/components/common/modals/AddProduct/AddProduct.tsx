import React, { useMemo, useState } from 'react';
import * as yup from 'yup';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';

import ModalButton from '../ModalButton/ModalButton';
import FormModal from '../FormModal/FormModal';
import SuccessAddProduct from './SuccessAddProduct/SuccessAddProduct';
import { helper, paymentOptions, shipmentOptions } from './helper';

interface IAddProductProps {
  close: () => void,
  // eslint-disable-next-line no-unused-vars
  addProduct: (value: any) => void
}

const AddProductSchema = yup.object().shape({
  name: yup.string()
    .required('Required')
    .min(2, 'Must be longer than 1 characters')
    .max(30, 'Must be smaller than 31 characters'),
  manufacturer: yup.string()
    .required('Required')
    .min(2, 'Must be longer than 1 characters')
    .max(30, 'Must be smaller than 31 characters'),
  number: yup.string()
    .required('Required')
    .min(2, 'Must be longer than 1 characters')
    .max(30, 'Must be smaller than 31 characters'),
  technology: yup.string()
    .required('Required'),
  method: yup.string()
    .required('Required'),
  payment: yup.string()
    .required('Required'),
});

const AddProduct = ({ close, addProduct }: IAddProductProps) => {
  const [success, toggleSuccess] = useState<boolean>(false);
  const [step, changeStep] = useState<number>(1);
  const stage = useMemo(() => helper(step), [step]);
  if (success) {
    return <SuccessAddProduct close={close} />;
  }
  return (
    <FormModal
      title={stage.title}
      close={close}
      step={step}
      stepArray={[1, 2, 3]}
      changeStep={changeStep}
    >
      <Formik
        initialValues={{
          name: '', manufacturer: '', number: '', technology: 'A', method: '', payment: '',
        }}
        onSubmit={async (values) => {
          console.log(values);
          await new Promise((resolve) => {
            setTimeout(resolve, 500);
          });
          addProduct({ id: Date.now(), ...values });
          toggleSuccess(true);
        }}
        validationSchema={AddProductSchema}
      >
        {({ errors }) => (
          <Form className="modal-form">
            <div className="modal-form__text">{stage.tip}</div>
            {step === 1
              && (
              <>
                <label htmlFor="name">
                  Product name
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
                <label htmlFor="manufacturer">
                  Manufacturer
                  <Field
                    id="manufacturer"
                    name="manufacturer"
                    type="text"
                    placeholder="Enter a name"
                    className={`${errors.manufacturer && 'modal-form__input_error'} modal-form__input`}
                  />
                  <ErrorMessage
                    name="manufacturer"
                    component="div"
                    className="modal-form__error"
                  />
                </label>
                <label htmlFor="number">
                  Item number
                  <Field
                    id="number"
                    name="number"
                    type="text"
                    placeholder="Enter the number"
                    className={`${errors.number && 'modal-form__input_error'} modal-form__input`}
                  />
                  <ErrorMessage
                    name="number"
                    component="div"
                    className="modal-form__error"
                  />
                </label>
                <div id="technology" className="modal-form__radio-group-title">Purchasing technology</div>
                <div role="group" className="modal-form__radio-group" aria-labelledby="technology">
                  {['A', 'S', 'D', 'F'].map((elem) => (
                    <div key={elem}>
                      <Field id={elem} type="radio" name="technology" value={elem} />
                      <label htmlFor={elem}>
                        {elem}
                      </label>
                    </div>
                  ))}
                </div>
              </>
              )}
            {step === 2
              && (
              <div className="modal-form__radio-group-planks">
                <div role="group" aria-labelledby="method">
                  {shipmentOptions.map((elem: any) => (
                    <div key={elem.value}>
                      <Field id={elem.desc} type="radio" name="method" value={elem.value} />
                      <label htmlFor={elem.desc}>
                        <span>
                          {elem.logo}
                          {elem.desc}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              )}
            {step === 3
              && (
                <div className="modal-form__radio-group-planks">
                  <div role="group" aria-labelledby="payment">
                    {paymentOptions.map((elem: any) => (
                      <div key={elem.value}>
                        <Field id={elem.value} type="radio" name="payment" value={elem.value} />
                        <label htmlFor={elem.value}>
                          <span>
                            {elem.logo}
                            {elem.value}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            <ModalButton action={() => changeStep((prev) => ((prev === 3) ? 3 : prev + 1))}>
              {stage.buttonText}
            </ModalButton>
          </Form>
        )}
      </Formik>
    </FormModal>
  );
};
export default AddProduct;
