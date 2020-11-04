import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';
import SignInBackGround from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }
`;

export const Logo = styled.img``;

export const Title = styled.h1`
  margin-bottom: 24px;
`;

export const SignUpLink = styled(Link)`
  color: var(--color-orange-500);
  display: block;
  margin-top: 24px;
  text-decoration: none;
  transition: color 0.2s;

  display: flex;
  align-items: center;

  &:hover {
    color: var(--color-orange-400);
  }
`;

export const IconSignUp = styled(FiLogIn)`
  width: 16px;
  height: 16px;
  color: var(--color-orange-500);
  margin-right: 16px;
  transition: color 0.2s;

  display: flex;
  align-items: center;

  &:hover {
    color: var(--color-orange-400);
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackGround}) no-repeat center;
  background-size: cover;
`;
