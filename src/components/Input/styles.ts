import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;

  background: #212329;
  border-radius: 10px;
  border: 2px solid #212329;
  color: #f4ede8;

  svg {
    margin-right: 18px;
    color: #666360;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
      svg {
        color: #ff9000;
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: #ff9000;
      }
    `}



  input {
    flex: 1;
    border: none;
    background: transparent;
    color: #f4ede8;
    text-decoration: none;
    &::placeholder {
      color: #666360;
    }
  }
  button {
    background: transparent;
    border: 0;
    width: 20px;
    height: 20px;
  }
  & + div {
    margin-top: 8px;
  }

  input + button {
    margin-left: 8px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 8px;
  svg {
    margin: 0;
  }
  span {
    background-color: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
