import {
  addDays, addMonths, subDays, subMonths, subYears,
} from 'date-fns';

export const setWeekArray = (): Date [] => {
  const weekAgo = subDays(new Date(Date.now()), 6);
  const lastWeek = [];
  for (let i = 0; i < 7; i++) {
    const day = addDays(weekAgo, i);
    lastWeek.push(day);
  }
  return lastWeek;
};

export const setMonthArray = (): Date [] => {
  const monthAgo = subMonths(new Date(Date.now()), 1);
  const lastMonth = [];
  for (let i = 0; i < 32; i++) {
    const day = addDays(monthAgo, i);
    lastMonth.push(day);
  }
  return lastMonth;
};

export const setYearArray = (): Date [] => {
  const yearAgo = subYears(new Date(Date.now()), 1);
  const lastYear = [];
  for (let i = 0; i < 13; i++) {
    const month = addMonths(yearAgo, i);
    lastYear.push(month);
  }
  return lastYear;
};

