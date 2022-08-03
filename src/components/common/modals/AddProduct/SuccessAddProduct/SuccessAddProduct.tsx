import React from 'react';

import FormModal from '../../FormModal/FormModal';
import Button from '../../../Button/Button';

import styles from './SuccessAddProduct.module.scss';
import { ReactComponent as CargoIcon } from '../../../../../content/images/cargo.svg';

interface ISuccessAddProps {
  close: () => void,
}

const SuccessAddProduct = ({ close }: ISuccessAddProps) => (
  <FormModal
    title="The cargo was successfully created"
    close={close}
    pic={<CargoIcon />}
  >
    <Button className={styles.button} click={close}>Continue</Button>
  </FormModal>
);

export default SuccessAddProduct;
