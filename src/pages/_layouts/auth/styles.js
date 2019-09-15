import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const barber = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    animation: ${barber} 1s backwards;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      animation: ${fadeDown} 500ms backwards;

      &::placeholder {
        color: rgba(255, 255, 255, 0.75);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b93ff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: all 0.2s;
      animation: ${fadeDown} 500ms backwards;
      animation-delay: 150ms;

      &:hover {
        background: ${darken(0.03, '#3b93ff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      transition: all 0.2s;
      animation: ${fade} 500ms backwards;
      animation-delay: 350ms;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
