import React, { useEffect, useMemo, useState } from 'react';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';

import ModalButton from '../ModalButton/ModalButton';
import FormModal from '../FormModal/FormModal';
import SuccessMoveProduct from './SuccessAddWarehouse/SuccessMoveProduct';
import { setText, paymentOptions, shipmentOptions } from './helper';
import Select from '../../inputs/Select/Select';
import { ReactComponent as ChangeIcon } from '../../../../content/icons/change.svg';
import { useAppSelector } from '../../../../hooks/useStore';
import { IWarehouse } from '../../../../typings/IWarehouse';
import { api } from '../../../../api';
import { API_ROUTES } from '../../../../api/routes';

import styles from './MoveProduct.module.scss';

interface IMoveProductProps {
  close: () => void,
  products: any [],
}

const MoveProductSchema = yup.object().shape({
  shipmentMethod: yup.string()
    .required('Required'),
  paymentMethod: yup.string()
    .required('Required'),
});

const MoveProduct = ({ close, products }: IMoveProductProps) => {
  // hooks
  const { warehouses, warehouse } = useAppSelector((state) => state.warehouseReducer);
  // useState
  const [loading, setLoading] = useState<boolean>(false);
  const [moveError, setMoveError] = useState('');
  const [noCargoError, setNoCargoError] = useState('');
  const [
    warehouseFrom, setWarehouseFrom,
  ] = useState<IWarehouse>(warehouse!);
  const [
    warehouseIn, setWarehouseIn,
  ] = useState<IWarehouse>(
    warehouse?._id === warehouses[0]._id ? warehouses[1] : warehouses[0],
  );
  const [success, toggleSuccess] = useState<boolean>(false);
  const [step, changeStep] = useState<number>(1);
  const stage = useMemo(() => setText(step), [step]);
  // functions
  const changeWarehouses = () => {
    setWarehouseIn(warehouseFrom);
    setWarehouseFrom(warehouseIn);
  };
  // effects
  useEffect(() => {
    setMoveError((warehouseFrom._id === warehouseIn._id)
      ? 'Moving is impossible. Warehouses have same number'
      : '');
  }, [warehouseFrom, warehouseIn]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`${API_ROUTES.WAREHOUSE}/${warehouseFrom._id}`);
      setNoCargoError(
        products.every((product) => response.data.products.some((prod: string) => product._id === prod))
          ? ''
          : 'Wrong product replacement. Not enough product',
      );
    };
    fetchData();
  }, [warehouseFrom]);
  if (success) {
    return <SuccessMoveProduct close={close} />;
  }
  return (
    <FormModal
      title={stage.title}
      close={close}
      step={step}
      stepArray={[1, 2, 3]}
      changeStep={!moveError ? changeStep : () => null}
    >
      <Formik
        initialValues={{
          shipmentMethod: '', paymentMethod: '',
        }}
        onSubmit={async (values) => {
          if (warehouseFrom._id === warehouseIn._id) {
            return;
          }
          setLoading(true);
          try {
            await products.forEach((product) => {
              const newProduct = {
                ...product,
                warehouse: warehouseIn._id,
                shipmentMethod: values.shipmentMethod,
                paymentMethod: values.paymentMethod,
              };
              api.patch(`${API_ROUTES.PRODUCT}/${product._id}`, newProduct);
            });
            const newWarehouseFrom = {
              ...warehouseFrom,
              products: warehouseFrom?.products.filter((product) => !products.map((p) => p._id).includes(product)),
            };
            await api.patch(`${API_ROUTES.WAREHOUSE}/${newWarehouseFrom._id}`, newWarehouseFrom);
            const newWarehouseIn = {
              ...warehouseIn,
              products: warehouseIn?.products.concat(products.map((product) => product._id)),
            };
            await api.patch(`${API_ROUTES.WAREHOUSE}/${newWarehouseIn._id}`, newWarehouseIn);
            setLoading(false);
          } catch (e) {
            setLoading(false);
            console.log(e);
          }
          toggleSuccess(true);
        }}
        validationSchema={MoveProductSchema}
      >
        {({ errors }) => (
          <Form className="modal-form">
            {(moveError || noCargoError) && <div className="modal-form__error">{moveError || noCargoError}</div>}
            <div className="modal-form__text">{stage.tip}</div>
            {step === 1
              && (
                <div className={styles.warehouses}>
                  {'' && <div className="modal-form__error">No products on warehouse</div>}
                  <label htmlFor="warehouseFrom">
                    From
                    <Select
                      list={warehouses}
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
                      list={warehouses}
                      name="warehouseIn"
                      click={setWarehouseIn}
                      value={warehouseIn}
                      className={styles.select}
                    />
                  </label>
                </div>
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
              blocked={!!moveError || !!noCargoError}
              action={() => !moveError
                && !noCargoError
                && changeStep((prev) => ((prev === 3) ? 3 : prev + 1))}
            >
              {stage.buttonText}
            </ModalButton>
          </Form>
        )}
      </Formik>
    </FormModal>
  );
};
export default MoveProduct;
