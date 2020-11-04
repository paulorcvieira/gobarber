import styled from 'styled-components/native';
import { Platform, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';

import { Provider } from './index';

import { Colors } from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${Platform.OS === 'android'
    ? getStatusBarHeight()
    : getStatusBarHeight() + 24}px;
  background: ${Colors.gray700};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: ${Colors.gray300};
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const UserName = styled.Text`
  color: ${Colors.orange500};
  font-family: 'RobotoSlab-Medium';
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px 16px;
`;

export const ProvidersListTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  margin-bottom: 24px;
  color: ${Colors.gray300};
`;

export const ProviderContainer = styled(RectButton)`
  background: ${Colors.gray500};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const ProviderAvatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: ${Colors.gray300};
`;

export const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProviderMetaText = styled.Text`
  margin-left: 8px;
  color: ${Colors.gray375};
  font-family: 'RobotoSlab-Regular';
`;
