const TOGGLE_SIZE = {
  sm: {
    switch: 'w-[3rem] h-[1.5rem]',
    button: 'left-[2px] w-[1.2rem] h-[1.2rem] peer-checked:translate-x-[1.5rem]',
  },
  lg: {
    switch: 'w-[5rem] h-[2.5rem]',
    button: 'left-[5px] w-[2rem] h-[2rem] peer-checked:translate-x-[2.25rem]',
  },
};

const BASE_STYLES = {
  switch: 'border block relative rounded-3xl cursor-pointer',
  button:
    'top-[50%] translate-y-[-50%] absolute bg-gray-50 border-gray-300 border shadow-md rounded-full transition-all',
};

const getStyles = (size: 'sm' | 'lg') => {
  const switch_style = `${BASE_STYLES['switch']} ${TOGGLE_SIZE[size].switch}`;
  const button_style = `${BASE_STYLES['button']} ${TOGGLE_SIZE[size].button}`;
  return { switch_style, button_style };
};

export default getStyles;
