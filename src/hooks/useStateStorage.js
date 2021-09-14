import {useState} from 'react';

const useStateStorage = (id, defaultValue) => {
  const [state, setState] = useState(defaultValue);

  let value;
  const setValue = val => {
    setState(val);
    window.localStorage.setItem(id, JSON.stringify(val));
  };

  const storageValue = window.localStorage.getItem(id);

  if (storageValue) {
    value = JSON.parse(storageValue);
  } else {
    value = state;
  }
  return [value, setValue];
};

export default useStateStorage;
