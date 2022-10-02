import React from 'react'

const types = {
  email: {
    regex: new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'),
    message: 'Preencha um email valido'
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  }

  const validate = (value) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor.')
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false;
    } else {
      setError(null)
      return true;
    }
  }


  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm