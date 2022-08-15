export const pieOption = {
  title: {
    text: 'Workload',
    x: 'center',
    textStyle: {
      fontFamily: 'Inter',
      color: '#3E4C59',
    },
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  dataset: [{}],
  series: [
    {
      name: 'Warehouses workload',
      type: 'pie',
      datasetIndex: 1,
      radius: '50%',
      center: ['50%', '50%'],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};
