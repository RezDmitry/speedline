import React, { useMemo, useState } from 'react';
import * as yup from 'yup';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';

import ModalButton from '../ModalButton/ModalButton';
import FormModal from '../FormModal/FormModal';
import SuccessAddProduct from './SuccessAddProduct/SuccessAddProduct';
import { setText, paymentOptions, shipmentOptions } from './helper';
import { api } from '../../../../api';
import { API_ROUTES } from '../../../../api/routes';
import { useAppSelector } from '../../../../hooks/useStore';

interface IAddProductProps {
  close: () => void,
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
  purchasingTechnology: yup.string()
    .required('Required'),
  shipmentMethod: yup.string()
    .required('Required'),
  paymentMethod: yup.string()
    .required('Required'),
});

const AddProduct = ({ close }: IAddProductProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState('');
  const { warehouse } = useAppSelector((state) => state.warehouseReducer);
  const [success, toggleSuccess] = useState<boolean>(false);
  const [step, changeStep] = useState<number>(1);
  const stage = useMemo(() => setText(step), [step]);
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
          name: '', manufacturer: '', number: '', purchasingTechnology: 'A', shipmentMethod: 'AIR', paymentMethod: '',
        }}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            await api.post(API_ROUTES.PRODUCT, { warehouse: warehouse?._id, ...values });
            setLoading(false);
            toggleSuccess(true);
          } catch (e: any) {
            setLoading(false);
            if (e.code === 'ERR_NETWORK') {
              setLoginError('Unhandled error. Try later');
            }
            setLoginError(e.response.data.message);
          }
        }}
        validationSchema={AddProductSchema}
      >
        {({ errors }) => (
          <Form className="modal-form">
            {loginError && <div className="modal-form__error">{loginError}</div>}
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
                <div id="purchasingTechnology" className="modal-form__radio-group-title">Purchasing technology</div>
                <div role="group" className="modal-form__radio-group" aria-labelledby="purchasingTechnology">
                  {['A', 'S', 'D', 'F'].map((elem) => (
                    <div key={elem}>
                      <Field id={elem} type="radio" name="purchasingTechnology" value={elem} />
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
                <div role="group" aria-labelledby="shipmentMethod">
                  {shipmentOptions.map((elem: any) => (
                    <div key={elem.value}>
                      <Field id={elem.desc} type="radio" name="shipmentMethod" value={elem.value} />
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
                  <div role="group" aria-labelledby="paymentMethod">
                    {paymentOptions.map((elem: any) => (
                      <div key={elem.value}>
                        <Field id={elem.value} type="radio" name="paymentMethod" value={elem.value} />
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
            <ModalButton
              loading={loading}
              action={() => changeStep((prev) => ((prev === 3) ? 3 : prev + 1))}
            >
              {stage.buttonText}
            </ModalButton>
          </Form>
        )}
      </Formik>
    </FormModal>
  );
};
export default AddProduct;
