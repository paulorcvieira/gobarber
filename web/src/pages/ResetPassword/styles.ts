import styled, { keyframes } from 'styled-components';

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

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackGround}) no-repeat center;
  background-size: cover;
`;
