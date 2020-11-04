import styled, { keyframes } from 'styled-components';
import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  height: 144px;
  background: var(--color-gray-200);
  margin-bottom: 10px;

  display: flex;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

export const HeaderBack = styled(Link)`
  text-decoration: none;
`;

export const HeaderBackIcon = styled(FiArrowLeft)`
  width: 24px;
  height: 24px;
  color: var(--color-gray-600);
`;

export const HeaderBackText = styled.span`
  color: var(--color-gray-600);
  vertical-align: super;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin: -140px auto 0;

  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
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

  animation: ${appearFromRight} 1s;

  form {
    margin: 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
`;

export const Avatar = styled.img`
  width: 186px;
  height: 186px;
  border-radius: 50%;
`;

export const AvatarChange = styled.label`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 0;
  background: var(--color-orange-500);
  right: 0;
  bottom: 0;
  transition: background-color 0.2s;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--color-orange-400);
  }
`;

export const AvatarChangeIcon = styled(FiCamera)`
  width: 20px;
  height: 20px;
  color: var(--color-gray-300);
`;

export const File = styled.input`
  display: none;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 20px;
  text-align: left;
`;
