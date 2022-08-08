import React, { useMemo, useState } from 'react';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';

import { useParams } from 'react-router-dom';
import ModalButton from '../ModalButton/ModalButton';
import FormModal from '../FormModal/FormModal';
import SuccessMoveProduct from './SuccessAddWarehouse/SuccessMoveProduct';
import { helper, paymentOptions, shipmentOptions } from './helper';
import Select from '../../inputs/Select/Select';

import styles from './MoveProduct.module.scss';
import { ReactComponent as ChangeIcon } from '../../../../content/icons/change.svg';
import { IFilterItem } from '../../../../typings/IFilterItem';

interface IMoveProductProps {
  close: () => void,
  products: any [],
}

const MoveProductSchema = yup.object().shape({
  method: yup.string()
    .required('Required'),
  payment: yup.string()
    .required('Required'),
});

// temp
const warehouses: any [] = [];

const MoveProduct = ({ close, products }: IMoveProductProps) => {
  const { id } = useParams();
  const baseWarehouse = useMemo(() => warehouses.find((item) => item.name === id)!.name, [warehouses, id]);
  const [warehouseFrom, setWarehouseFrom] = useState<IFilterItem>(baseWarehouse);
  const [warehouseIn, setWarehouseIn] = useState<IFilterItem>(warehouses[0].name);
  const hasWarehouseFromProducts = useMemo(() => products.every((product) => (
    warehouses
      .find((item) => warehouseFrom === item.name)!.products
      .some((item: any) => item.id === product.id))), [warehouses, warehouseFrom, products]);
  const [success, toggleSuccess] = useState<boolean>(false);
  const [step, changeStep] = useState<number>(1);
  const stage = useMemo(() => helper(step), [step]);
  const changeWarehouses = () => {
    setWarehouseIn(warehouseFrom);
    setWarehouseFrom(warehouseIn);
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
          if (!hasWarehouseFromProducts) return;
          // const newItems = products.map((item) => ({ ...item, ...values }));
          // await dispatch(replaceProduct({ warehouseFrom, warehouseIn, newItems }));
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
                  {!hasWarehouseFromProducts && <div className="modal-form__error">No products on warehouse</div>}
                  <label htmlFor="warehouseFrom">
                    From
                    <Select
                      list={warehouses.map((elem) => elem.name)}
                      name="warehouseFrom"
                      click={setWarehouseFrom}
                      value={warehouseFrom}
                      className={styles.select}
                    />
                  </label>
                  <button
                    className={styles.changeButton}
                    onClick={changeWarehouses}
                    type="button"
                  >
                    <ChangeIcon />
                  </button>
                  <label htmlFor="warehouseIn">
                    In
                    <Select
                      list={warehouses.map((elem) => elem.name)}
                      name="warehouseIn"
                      click={setWarehouseIn}
                      value={warehouseIn}
                      className={styles.select}
                    />
                  </label>
                  <div>{errors.method}</div>
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
