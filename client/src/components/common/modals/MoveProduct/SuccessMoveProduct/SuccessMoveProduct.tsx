import React from 'react';

import FormModal from '../../FormModal/FormModal';
import Button from '../../../Button/Button';

import styles from './SuccessMoveProduct.module.scss';
import { ReactComponent as CargoIcon } from '../../../../../content/images/cargo.svg';

interface ISuccessAddProps {
  close: () => void,
}

const SuccessMoveProduct = ({ close }: ISuccessAddProps) => (
  <FormModal
    title="Cargo was successfully moved "
    close={close}
    pic={<CargoIcon />}
  >
    <Button className={styles.button} click={close}>Continue</Button>
  </FormModal>
);

export default SuccessMoveProduct;
