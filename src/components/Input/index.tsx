import React, {
  InputHTMLAttributes,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle, FiEye, FiEyeOff } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons/lib';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isPassword?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  type,
  isPassword,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef?.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
    >
      {Icon && <Icon size={20} />}
      {isPassword ? (
        <>
          <input
            ref={inputRef}
            type={isPasswordVisible ? 'text' : 'password'}
            {...rest}
          />
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <FiEye size={20} /> : <FiEyeOff size={20} />}
          </button>
        </>
      ) : (
        <input ref={inputRef} type={type} {...rest} />
      )}
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
