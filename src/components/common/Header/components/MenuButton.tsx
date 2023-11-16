import { ComponentPropsWithoutRef } from 'react';

const MenuButton = ({ ...rest }: ComponentPropsWithoutRef<'button'>) => {
  return <button {...rest}>😆</button>;
};

export default MenuButton;
