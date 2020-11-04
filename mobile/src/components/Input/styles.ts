import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Colors } from '../../styles/Colors';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${Colors.gray800};
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${Colors.gray800};

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: ${Colors.red500};
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: ${Colors.orange500};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${Colors.white100};
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
