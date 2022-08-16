import { format } from 'date-fns';

import { ru, enGB } from 'date-fns/locale';

const locales : {[key: string]: any} = { ru, enGB };

export default (date: Date, formatStr = 'PP') => {
  const userLocale = window.navigator.language || 'ru';
  return format(date, formatStr, {
    locale: locales[userLocale],
  });
};
