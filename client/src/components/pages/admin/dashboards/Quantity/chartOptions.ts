import { isSameDay, isSameMonth } from 'date-fns';
import { setMonthArray, setWeekArray, setYearArray } from '../../../../../helpers/timeFunctions';
import { IProduct } from '../../../../../typings/IProduct';

export const lineChartOption = {
  backgroundColor: '#FFFFFF',
  title: {
    text: 'Products quantity',
    x: 'center',
    textStyle: {
      fontFamily: 'Inter',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
  },
  dataset: [{}],
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 100,
    },
    {
      start: 0,
      end: 100,
    },
  ],
  xAxis: {
    type: 'category',
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      type: 'line',
      datasetIndex: 0,
    },
  ],
};

export const setIntervalByButton = (timeInterval: string) => {
  switch (timeInterval) {
    case ('month'): {
      return setMonthArray();
    }
    case ('year'): {
      return setYearArray();
    }
    default: {
      return setWeekArray();
    }
  }
};

export const checkDate = (date: Date, product: IProduct, timeInterval: string) => {
  switch (timeInterval) {
    case ('year'): {
      return isSameMonth(date, new Date(Date.parse(product.createdAt)));
    }
    default: {
      return isSameDay(date, new Date(Date.parse(product.createdAt)));
    }
  }
};

export const setFormat = (timeInterval: string) => {
  switch (timeInterval) {
    case ('year'): {
      return 'MM/yyyy';
    }
    default: {
      return 'PP';
    }
  }
};
