import React from 'react';

import FormModal from '../../FormModal/FormModal';
import Button from '../../../Button/Button';

import styles from './SuccessAddWarehouse.module.scss';
import { ReactComponent as WarehouseIcon } from '../../../../../content/images/warehouse.svg';

interface ISuccessAddProps {
  close: () => void,
}

const SuccessAddWarehouse = ({ close }: ISuccessAddProps) => (
  <FormModal
    title="Warehouse successfully added"
    close={close}
    pic={<WarehouseIcon />}
  >
    <Button className={styles.button} click={close}>Continue</Button>
  </FormModal>
);

export default SuccessAddWarehouse;
