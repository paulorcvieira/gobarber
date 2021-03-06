import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { Colors } from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: 'RobotoSlab-Medium';
  color: ${Colors.gray300};
  margin-top: 48px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  color: ${Colors.gray375};
  margin-top: 16px;
  text-align: center;
`;

export const OkButton = styled(RectButton)`
  background: ${Colors.orange500};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 24px;
  padding: 12px 24px;
`;

export const OkButtonText = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
  color: ${Colors.gray600};
`;
