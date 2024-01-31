import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { useTheme } from '@mui/material';

const chartSetting = {
  yAxis: [
    {
      label: 'סכום',
    },
  ],
  height: 500,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-50px, 0)',
    },
  },
};
const dataset = [
  {
    revenues: 1590,
    expenses: 1700,
    investments: 2000,
    month: 'Jan',
  },
  {
    revenues: 3000,
    expenses: 1200,
    investments: 280,
    month: 'Fev',
  },
  {
    revenues: 2700,
    expenses: 2000,
    investments: 2100,
    month: 'Mar',
  },
  {
    revenues: 5400,
    expenses: 3460,
    investments: 2700,
    month: 'Apr',
  },
  {
    revenues: 570,
    expenses: 690,
    investments: 990,
    month: 'May',
  },
  {
    revenues: 600,
    expenses: 630,
    investments: 1440,
    month: 'June',
  },
  {
    revenues: 5000,
    expenses: 3000,
    investments: 3190,
    month: 'July',
  },
  {
    revenues: 4100,
    expenses: 3500,
    investments: 2490,
    month: 'Aug',
  },
  {
    revenues: 510,
    expenses: 760,
    investments: 1310,
    month: 'Sept',
  },
  {
    revenues: 3560,
    expenses: 4020,
    investments: 5500,
    month: 'Oct',
  },
  {
    revenues:3767,
    expenses: 3000,
    investments: 4898,
    month: 'Nov',
  },
  {
    revenues: 610,
    expenses: 700,
    investments: 2500,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}mm`;

const ExmpleChart=()=> {
  const theme = useTheme();

  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'revenues', label: 'הכנסות', valueFormatter,color:theme.palette.primary.main },
        { dataKey: 'expenses', label: 'הוצאות', valueFormatter,color:theme.palette.primary.dark },
        { dataKey: 'investments', label: 'השקעות', valueFormatter,color:theme.palette.secondary.dark },
      ]}
      {...chartSetting}
    />
  );


}

export default ExmpleChart;