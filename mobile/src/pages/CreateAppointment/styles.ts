import styled from 'styled-components/native';
import { FlatList, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';

import { Colors } from '../../styles/Colors';

import { Provider } from './index';

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

interface HourProps {
  available: boolean;
  selected: boolean;
}

interface HourTextProps {
  selected: boolean;
}

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

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: ${Colors.gray300};
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin-left: 16px;
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-left: auto;
`;

export const Content = styled.ScrollView``;

export const ProvidersListContainer = styled.View`
  height: 112px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton)<ProviderContainerProps>`
  background: ${props => (props.selected ? Colors.orange500 : Colors.gray500)};
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
`;

export const ProviderAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border: 16px;
`;

export const ProviderName = styled.Text<ProviderNameProps>`
  margin-left: 8px;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: ${props => (props.selected ? Colors.gray800 : Colors.gray300)};
`;

export const Calendar = styled.View``;

export const CalendarTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: ${Colors.gray300};
  font-size: 24px;
  margin: 0 24px 24px;
`;

export const OpenDatePickerButton = styled(RectButton)`
  height: 46px;
  background: ${Colors.orange500};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

export const OpenDatePickerButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: ${Colors.gray800};
`;

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const ScheduleTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: ${Colors.gray300};
  font-size: 24px;
  margin: 0 24px 24px;
`;

export const ScheduleSection = styled.View`
  margin-bottom: 24px;
`;

export const ScheduleSectionTitle = styled.Text`
  font-size: 18px;
  color: ${Colors.gray375};
  font-family: 'RobotoSlab-Regular';
  margin: 0 24px 12px;
`;

export const ScheduleSectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ScheduleSectionContentHour = styled(RectButton)<HourProps>`
  padding: 12px;
  background: ${props =>
    props.selected && props.available ? Colors.orange500 : Colors.gray500};
  border-radius: 10px;
  margin-right: 8px;

  opacity: ${props => (props.available ? 1 : 0.3)};
`;

export const ScheduleSectionContentHourText = styled.Text<HourTextProps>`
  color: ${props => (props.selected ? Colors.gray800 : Colors.gray300)};
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const CreateAppointmentButton = styled(RectButton)`
  height: 50px;
  background: ${Colors.orange500};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px 24px;
`;
export const CreateAppointmentButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: ${Colors.gray800};
`;