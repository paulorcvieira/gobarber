import styled from 'styled-components';
import { FiClock, FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: var(--color-gray-200);
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 80px;
`;

export const Profile = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 80px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  line-height: 24px;
`;

export const ProfileTitle = styled.span`
  color: var(--color-white-700);
`;

export const ProfileName = styled.strong`
  color: var(--color-orange-500);
`;

export const Logout = styled.button`
  margin-left: auto;
  background: transparent;
  border: 0;
`;

export const LogoutIcon = styled(FiPower)`
  color: var(--color-gray-600);
  width: 20px;
  height: 20px;
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.section`
  flex: 1;
  margin-right: 120px;
`;

export const Title = styled.h1`
  font-size: 36px;
`;

export const Subtitle = styled.p`
  display: flex;
  margin-top: 8px;
  color: var(--color-orange-500);
  align-items: center;
`;

export const SubtitleContent = styled.span`
  display: flex;
  align-items: center;

  & + span::before {
    content: '';
    width: 1px;
    height: 12px;
    background: var(--color-orange-500);
    margin: 0 8px;
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;
`;

export const NextAppointmentTitle = styled.strong`
  color: var(--color-gray-600);
  font-size: 20px;
  font-weight: 400;
`;

export const NextAppointmentContent = styled.div`
  background: var(--color-gray-400);
  display: flex;
  align-items: center;
  padding: 16px 24px;
  border-radius: 10px;
  margin-top: 24px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 80%;
    width: 2px;
    left: 0;
    top: 10%;
    background: var(--color-orange-500);
  }
`;

export const NextAppointmentAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const NextAppointmentName = styled.strong`
  margin-left: 24px;
  color: var(--color-white-900);
`;

export const NextAppointmentSchedule = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  color: var(--color-gray-600);
`;

export const NextAppointmentScheduleIcon = styled(FiClock)`
  color: var(--color-orange-500);
  margin-right: 8px;
`;

export const NextAppointmentScheduleHour = styled.span``;

export const Section = styled.section`
  margin-top: 48px;
`;

export const SectionTitle = styled.strong`
  color: var(--color-gray-600);
  font-size: 20px;
  line-height: 26px;
  border-bottom: 1px solid var(--color-gray-400);
  display: block;
  padding-bottom: 16px;
  margin-bottom: 16px;
`;

export const SectionAppointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }
`;

export const SectionAppointmentSchedule = styled.span`
  /* margin-left: auto; */
  display: flex;
  align-items: center;
  color: var(--color-white-700);
  width: 70px;
`;

export const SectionAppointmentScheduleIcon = styled(FiClock)`
  color: var(--color-orange-500);
  margin-right: 8px;
`;

export const SectionAppointmentScheduleHour = styled.span``;

export const SectionAppointmentCard = styled.div`
  background: var(--color-gray-400);
  display: flex;
  flex: 1;
  align-items: center;
  padding: 16px 24px;
  border-radius: 10px;
  margin-left: 24px;
`;

export const SectionAppointmentCardAvatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const SectionAppointmentCardName = styled.strong`
  margin-left: 24px;
  color: var(--color-white-900);
  font-size: 14px;
`;

export const SectionNoAppointment = styled.p`
  font-size: 12px;
  color: var(--color-gray-600);
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    background: var(--color-gray-200);
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    padding-right: 20px;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: var(--color-gray-400);
    border-radius: 10px;
    color: var(--color-white-900);
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: var(--color-gray-300);
  }

  .DayPicker-Day--today {
    font-weight: normal;
    color: var(--color-orange-500);
  }

  .DayPicker-Day--disabled {
    color: var(--color-gray-500) !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: var(--color-orange-500) !important;
    border-radius: 10px;
    color: var(--color-gray-100) !important;
  }
`;
