import { useState } from 'react';
import CheckBox from '../components/Atoms/CheckBox';

const Welcome = () => {
  const [checked, setChecked] = useState(false);
  return (
    <CheckBox
      toggle_size="sm"
      color="secondary"
      checked={checked}
      onClick={() => setChecked(!checked)}
    />
  );
};

export default Welcome;
