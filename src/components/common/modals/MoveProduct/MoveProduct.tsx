import React, { useMemo, useState } from 'react';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';

import { useParams } from 'react-router-dom';
import ModalButton from '../ModalButton/ModalButton';
import FormModal from '../FormModal/FormModal';
import SuccessMoveProduct from './SuccessAddWarehouse/SuccessMoveProduct';
import { helper, paymentOptions, shipmentOptions } from './helper';
import Select from '../../inputs/Select/Select';
import { warehouses } from '../../../pages/admin/Warehouses/data';

import styles from './MoveProduct.module.scss';
import { ReactComponent as ChangeIcon } from '../../../../content/icons/change.svg';

interface IMoveProductProps {
  close: () => void,
  moveProduct: (value: any) => void
}

const MoveProductSchema = yup.object().shape({
  method: yup.string()
    .required('Required'),
  payment: yup.string()
    .required('Required'),
});

const MoveProduct = ({ close, moveProduct }: IMoveProductProps) => {
  const { id } = useParams();
  const [
    warehouseFrom, setWarehouseFrom,
  ] = useState<string>(warehouses.find((item) => item.name === id)!.name);
  const [warehouseIn, setWarehouseIn] = useState<string>(warehouses[0].name);
  const [success, toggleSuccess] = useState<boolean>(false);
  const [step, changeStep] = useState<number>(1);
  const stage = useMemo(() => helper(step), [step]);
  const changeWarehouses = () => {
    setWarehouseIn(warehouseFrom);
    setWarehouseFrom(warehouseIn);
  };
  const setWarehouse = (e: React.MouseEvent<HTMLInputElement>, func: any) => {
    func(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  if (success) {
    return <SuccessMoveProduct close={close} />;
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
          method: '', payment: '',
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => {
            setTimeout(resolve, 500);
          });
          moveProduct({ id: Date.now(), ...values });
          toggleSuccess(true);
        }}
        validationSchema={MoveProductSchema}
      >
        {({ errors }) => (
          <Form className="modal-form">
            <div className="modal-form__text">{stage.tip}</div>
            {step === 1
              && (
                <div className={styles.warehouses}>
                  <label htmlFor="warehouseFrom">
                    From
                    <Select
                      list={warehouses.map((elem) => elem.name)}
                      name="warehouseFrom"
                      click={(e: React.MouseEvent<HTMLInputElement>) => setWarehouse(e, setWarehouseFrom)}
                      value={warehouseFrom}
                      className={styles.select}
                    />
                  </label>
                  <button
                    className={styles.changeButton}
                    onClick={changeWarehouses}
                  >
                    <ChangeIcon />
                  </button>
                  <label htmlFor="warehouseIn">
                    In
                    <Select
                      list={warehouses.map((elem) => elem.name)}
                      name="warehouseIn"
                      click={(e: React.MouseEvent<HTMLInputElement>) => setWarehouse(e, setWarehouseIn)}
                      value={warehouseIn}
                      className={styles.select}
                    />
                  </label>
                </div>
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
export default MoveProduct;
