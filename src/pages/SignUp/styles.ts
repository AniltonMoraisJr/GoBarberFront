import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';
import backgroundImg from '../../assets/images/signUp.png';

interface PasswordStrengthBarProps {
  meter: 0 | 1 | 2 | 3 | 4;
}

const passwordStrengthColors = {
  0: css`
    width: 10%;
    background: rgb(224, 21, 21);
    background: -moz-linear-gradient(
      90deg,
      rgba(224, 21, 21, 1) 0%,
      rgba(246, 114, 90, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(224, 21, 21, 1) 0%,
      rgba(246, 114, 90, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(224, 21, 21, 1) 0%,
      rgba(246, 114, 90, 1) 100%
    );
  `,
  1: css`
    width: 25%;
    background: rgb(246, 114, 90);
    background: -moz-linear-gradient(
      90deg,
      rgba(246, 114, 90, 1) 0%,
      rgba(241, 150, 43, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(246, 114, 90, 1) 0%,
      rgba(241, 150, 43, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(246, 114, 90, 1) 0%,
      rgba(241, 150, 43, 1) 100%
    );
  `,
  2: css`
    width: 50%;
    background: rgb(241, 150, 43);
    background: -moz-linear-gradient(
      90deg,
      rgba(241, 150, 43, 1) 0%,
      rgba(238, 241, 43, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(241, 150, 43, 1) 0%,
      rgba(238, 241, 43, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(241, 150, 43, 1) 0%,
      rgba(238, 241, 43, 1) 100%
    );
  `,
  3: css`
    width: 75%;
    background: rgb(238, 241, 43);
    background: -moz-linear-gradient(
      90deg,
      rgba(238, 241, 43, 1) 0%,
      rgba(88, 241, 43, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(238, 241, 43, 1) 0%,
      rgba(88, 241, 43, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(238, 241, 43, 1) 0%,
      rgba(88, 241, 43, 1) 100%
    );
  `,
  4: css`
    width: 100%;
    background: rgb(88, 241, 43);
    background: -moz-linear-gradient(
      90deg,
      rgba(88, 241, 43, 1) 0%,
      rgba(33, 193, 123, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(88, 241, 43, 1) 0%,
      rgba(33, 193, 123, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(88, 241, 43, 1) 0%,
      rgba(33, 193, 123, 1) 100%
    );
  `,
};
const passwordStrengthTextColors = {
  0: css`
    color: rgb(224, 21, 21);
    color: -moz-linear-gradient(
      90deg,
      rgba(224, 21, 21, 1) 0%,
      rgba(246, 114, 90, 1) 100%
    );
    color: -webkit-linear-gradient(
      90deg,
      rgba(224, 21, 21, 1) 0%,
      rgba(246, 114, 90, 1) 100%
    );
    color: linear-gradient(
      90deg,
      rgba(224, 21, 21, 1) 0%,
      rgba(246, 114, 90, 1) 100%
    );
  `,
  1: css`
    color: rgb(246, 114, 90);
    color: -moz-linear-gradient(
      90deg,
      rgba(246, 114, 90, 1) 0%,
      rgba(241, 150, 43, 1) 100%
    );
    color: -webkit-linear-gradient(
      90deg,
      rgba(246, 114, 90, 1) 0%,
      rgba(241, 150, 43, 1) 100%
    );
    color: linear-gradient(
      90deg,
      rgba(246, 114, 90, 1) 0%,
      rgba(241, 150, 43, 1) 100%
    );
  `,
  2: css`
    color: rgb(241, 150, 43);
    color: -moz-linear-gradient(
      90deg,
      rgba(241, 150, 43, 1) 0%,
      rgba(238, 241, 43, 1) 100%
    );
    color: -webkit-linear-gradient(
      90deg,
      rgba(241, 150, 43, 1) 0%,
      rgba(238, 241, 43, 1) 100%
    );
    color: linear-gradient(
      90deg,
      rgba(241, 150, 43, 1) 0%,
      rgba(238, 241, 43, 1) 100%
    );
  `,
  3: css`
    color: rgb(238, 241, 43);
    color: -moz-linear-gradient(
      90deg,
      rgba(238, 241, 43, 1) 0%,
      rgba(88, 241, 43, 1) 100%
    );
    color: -webkit-linear-gradient(
      90deg,
      rgba(238, 241, 43, 1) 0%,
      rgba(88, 241, 43, 1) 100%
    );
    color: linear-gradient(
      90deg,
      rgba(238, 241, 43, 1) 0%,
      rgba(88, 241, 43, 1) 100%
    );
  `,
  4: css`
    color: rgb(88, 241, 43);
    color: -moz-linear-gradient(
      90deg,
      rgba(88, 241, 43, 1) 0%,
      rgba(33, 193, 123, 1) 100%
    );
    color: -webkit-linear-gradient(
      90deg,
      rgba(88, 241, 43, 1) 0%,
      rgba(33, 193, 123, 1) 100%
    );
    color: linear-gradient(
      90deg,
      rgba(88, 241, 43, 1) 0%,
      rgba(33, 193, 123, 1) 100%
    );
  `,
};

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
`;
const apperFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(120%);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  animation: ${apperFromRight} 2s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    color: #f4ede8;
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;
export const PasswordStrengthBar = styled.div<PasswordStrengthBarProps>`
  position: relative;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  background: #212329;
  border-radius: 10px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    border-radius: 10px;
    content: ' ';
    ${(props) =>
      props.meter
        ? passwordStrengthColors[props.meter]
        : css`
            background: transparent;
            width: 0%;
          `}
    transition: all 1s;
  }
`;
export const PasswordStrengthBarText = styled.div<PasswordStrengthBarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-top: 10px;
  svg {
    margin-left: 4px;
  }
  ${(props) =>
    props.meter
      ? passwordStrengthTextColors[props.meter]
      : css`
          color: transparent;
        `}
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
