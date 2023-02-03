import { useState } from 'react';

interface IInputsFields {
  [key: string]: string;
}

function useInputs(inputFields: IInputsFields) {
  const [inputs, setInputs] = useState(inputFields);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return { inputs, handleChange };
}

export default useInputs;
