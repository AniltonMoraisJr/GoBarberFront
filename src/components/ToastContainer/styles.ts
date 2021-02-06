import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const infoToast = css`
  background: #ebf8ff;
  color: #3172b7;
`;

const errorToast = css`
  background: #fddede;
  color: #c53030;
`;
const successToast = css`
  background: #e6fffa;
  color: #2e656a;
`;

const toastTypeVariations = {
  info: infoToast,
  success: successToast,
  error: errorToast,
};

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

export const Toast = styled(animated.div)<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  ${(props) => toastTypeVariations[props.type || 'info']}

  & + div {
    margin-top: 20px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
