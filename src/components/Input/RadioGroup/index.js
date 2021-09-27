import React, { useEffect, useState, useRef } from 'react';

import {
  Radio,
  FormControlLabel,
  RadioGroup as RadioGroupMat,
} from '@material-ui/core';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Label } from '../styles';
import useStyles, { LabelOption, Error } from './styles';

const RadioGroup = ({ label, name, inline, onChange, options, ...rest }) => {
  const classes = useStyles();
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(defaultValue);

  function handleChange(e) {
    e.persist();
    setInputValue(e.target.value);

    if (onChange) onChange(e);
  }

  useEffect(() => {
    if (inputRef.current)
      registerField({
        name: fieldName,
        path: 'value',
        ref: inputRef.current,
        getValue: (ref) => inputValue,
        setValue: (ref, value) => value && setInputValue(value),
      });
  }, [fieldName, registerField, inputValue, inputRef.current]);

  const Input = (props) => <Radio className={classes.radio} {...props} />;

  return (
    <>
      {label && <Label>{label}</Label>}

      <RadioGroupMat
        ref={inputRef}
        name={name}
        value={inputValue}
        onChange={handleChange}
        style={{ flexDirection: inline ? 'row ' : 'column' }}
        {...rest}
      >
        {options.map((option) => (
          <FormControlLabel
            value={option.value}
            control={<Input />}
            label={<LabelOption>{option.label}</LabelOption>}
          />
        ))}
      </RadioGroupMat>
      {error && <Error>{error}</Error>}
    </>
  );
};

RadioGroup.defaultProps = {
  onChange: null,
  options: [],
  inline: false,
};

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

export default RadioGroup;
