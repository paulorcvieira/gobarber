import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { isToday, format, parseISO, isAfter } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderContent,
  Logo,
  Profile,
  Avatar,
  ProfileContent,
  ProfileTitle,
  ProfileName,
  Logout,
  LogoutIcon,
  Content,
  Schedule,
  Calendar,
  Title,
  Subtitle,
  SubtitleContent,
  NextAppointment,
  NextAppointmentTitle,
  NextAppointmentContent,
  NextAppointmentAvatar,
  NextAppointmentName,
  NextAppointmentSchedule,
  NextAppointmentScheduleIcon,
  NextAppointmentScheduleHour,
  Section,
  SectionTitle,
  SectionAppointment,
  SectionAppointmentSchedule,
  SectionAppointmentScheduleIcon,
  SectionAppointmentScheduleHour,
  SectionAppointmentCard,
  SectionAppointmentCardAvatar,
  SectionAppointmentCardName,
  SectionNoAppointment,
} from './styles';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

interface Appointment {
  id: string;
  date: string;
  hourFormatted: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const { user, signOut } = useAuth();

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then(response => setMonthAvailability(response.data));
  }, [currentMonth, user.id]);

  useEffect(() => {
    api
      .get<Appointment[]>('/appointments/me', {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth(),
          day: selectedDate.getDate(),
        },
      })
      .then(response => {
        const appointmentsFormatted = response.data.map(appointment => {
          return {
            ...appointment,
            hourFormatted: format(parseISO(appointment.date), 'HH:mm'),
          };
        });

        setAppointments(appointmentsFormatted);
      });
  }, [selectedDate]);

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter(monthDay => monthDay.available === false)
      .map(monthDay => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });

    return dates;
  }, [currentMonth, monthAvailability]);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", { locale: ptBR });
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc', { locale: ptBR });
  }, [selectedDate]);

  const morningAppointments = useMemo(() => {
    return appointments.filter(appointment => {
      return parseISO(appointment.date).getHours() < 12;
    });
  }, [appointments]);

  const afternoonAppointments = useMemo(() => {
    return appointments.filter(appointment => {
      return parseISO(appointment.date).getHours() >= 12;
    });
  }, [appointments]);

  const nextAppointment = useMemo(() => {
    return appointments.find(appointment =>
      isAfter(parseISO(appointment.date), new Date()),
    );
  }, [appointments]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo src={logoImg} alt="GoBarber" />

          <Profile to="/profile">
            <Avatar src={user.avatar_url} alt={user.name} />

            <ProfileContent>
              <ProfileTitle>Bem-vindo,</ProfileTitle>
              <ProfileName>{user.name}</ProfileName>
            </ProfileContent>
          </Profile>

          <Logout onClick={signOut}>
            <LogoutIcon />
          </Logout>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <Title>Horários agendados</Title>
          <Subtitle>
            {isToday(selectedDate) && <SubtitleContent>Hoje</SubtitleContent>}
            <SubtitleContent>{selectedDateAsText}</SubtitleContent>
            <SubtitleContent>{selectedWeekDay}</SubtitleContent>
          </Subtitle>

          {isToday(selectedDate) && nextAppointment && (
            <NextAppointment>
              <NextAppointmentTitle>Agendamento a seguir</NextAppointmentTitle>
              <NextAppointmentContent>
                <NextAppointmentAvatar
                  src={nextAppointment.user.avatar_url}
                  alt={nextAppointment.user.name}
                />
                <NextAppointmentName>
                  {nextAppointment.user.name}
                </NextAppointmentName>
                <NextAppointmentSchedule>
                  <NextAppointmentScheduleIcon />
                  <NextAppointmentScheduleHour>
                    {nextAppointment.hourFormatted}
                  </NextAppointmentScheduleHour>
                </NextAppointmentSchedule>
              </NextAppointmentContent>
            </NextAppointment>
          )}

          <Section>
            <SectionTitle>Manhã</SectionTitle>

            {!morningAppointments.length && (
              <SectionNoAppointment>
                * Nenhum agendamento neste período
              </SectionNoAppointment>
            )}

            {morningAppointments.map(appointment => (
              <SectionAppointment key={appointment.id}>
                <SectionAppointmentSchedule>
                  <SectionAppointmentScheduleIcon />
                  <SectionAppointmentScheduleHour>
                    {appointment.hourFormatted}
                  </SectionAppointmentScheduleHour>
                </SectionAppointmentSchedule>

                <SectionAppointmentCard>
                  <SectionAppointmentCardAvatar
                    src={appointment.user.avatar_url}
                    alt={appointment.user.name}
                  />
                  <SectionAppointmentCardName>
                    {appointment.user.name}
                  </SectionAppointmentCardName>
                </SectionAppointmentCard>
              </SectionAppointment>
            ))}
          </Section>

          <Section>
            <SectionTitle>Tarde</SectionTitle>

            {!afternoonAppointments.length && (
              <SectionNoAppointment>
                * Nenhum agendamento neste período
              </SectionNoAppointment>
            )}

            {afternoonAppointments.map(appointment => (
              <SectionAppointment key={appointment.id}>
                <SectionAppointmentSchedule>
                  <SectionAppointmentScheduleIcon />
                  <SectionAppointmentScheduleHour>
                    {appointment.hourFormatted}
                  </SectionAppointmentScheduleHour>
                </SectionAppointmentSchedule>

                <SectionAppointmentCard>
                  <SectionAppointmentCardAvatar
                    src={appointment.user.avatar_url}
                    alt={appointment.user.name}
                  />
                  <SectionAppointmentCardName>
                    {appointment.user.name}
                  </SectionAppointmentCardName>
                </SectionAppointmentCard>
              </SectionAppointment>
            ))}
          </Section>
        </Schedule>

        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onMonthChange={handleMonthChange}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
