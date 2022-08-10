import { IStage } from '../../../../typings/IStage';

import { ReactComponent as AirIcon } from '../../../../content/icons/air.svg';
import { ReactComponent as SeaIcon } from '../../../../content/icons/sea.svg';
import { ReactComponent as TruckIcon } from '../../../../content/icons/truck.svg';
import { ReactComponent as CardIcon } from '../../../../content/icons/card.svg';
import { ReactComponent as PalypalIcon } from '../../../../content/icons/palypal.svg';
import { ReactComponent as CashIcon } from '../../../../content/icons/cash.svg';

export const setText = (step: number): IStage => {
  switch (step) {
    case (2): {
      return {
        title: 'Shipping method',
        buttonText: 'Next step',
        tip: 'Select delivery method',
      };
    }
    case (3): {
      return {
        title: 'Payment method',
        buttonText: 'Choose',
        tip: 'Choose a payment method',
      };
    }
    default: {
      return {
        title: 'Adding a product',
        buttonText: 'Next step',
        tip: '',
      };
    }
  }
};

export const shipmentOptions = [
  {
    value: 'AIR',
    desc: 'By air transport',
    logo: <AirIcon />,
  },
  {
    value: 'SEA',
    desc: 'By sea',
    logo: <SeaIcon />,
  },
  {
    value: 'TRUCK',
    desc: 'By car',
    logo: <TruckIcon />,
  },
];

export const paymentOptions = [
  {
    value: 'Visa, Mastercard',
    logo: <CardIcon />,
  },
  {
    value: 'Palypal',
    logo: <PalypalIcon />,
  },
  {
    value: 'Cash',
    logo: <CashIcon />,
  },
];
