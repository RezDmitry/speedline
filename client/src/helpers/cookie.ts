export const setCookie = (name: string, value: string, options = {}) => {
  const newOptions: { [key: string]: string | number } = {
    path: '/',
    'max-age': 64000,
    // при необходимости добавьте другие значения по умолчанию
    ...options,
  };

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  for (const optionKey in newOptions) {
    if (Object.prototype.hasOwnProperty.call(newOptions, optionKey)) {
      updatedCookie += `; ${optionKey}`;
      const optionValue = newOptions[optionKey];
      if (!!optionValue !== true) {
        updatedCookie += `=${optionValue}`;
      }
    }
  }
  document.cookie = updatedCookie;
};

export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()!.split(';').shift();
  }
  return false;
};
