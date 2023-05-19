import { HTMLInputTypeAttribute } from 'react';

// eslint-disable-next-line no-useless-escape
const isValidEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

const inputValidation = (type: HTMLInputTypeAttribute, value: string) => {
  switch (type) {
    case 'email':
      return isValidEmail.test(value);
    default:
      return true;
  }
};

export default inputValidation;
