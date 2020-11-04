import {
  getDate,
  addDays,
  subDays,
  getMonth,
  getYear,
  startOfDay,
  setHours,
} from 'date-fns';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('Should be able to list the month availability from provider', async () => {
    const today = startOfDay(new Date());
    const yesterday = subDays(today, 1);
    const tomorrow = addDays(today, 1);
    const afterTomorrow = addDays(today, 2);

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: setHours(today, 8),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: setHours(today, 19),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: setHours(today, 10),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: setHours(today, 11),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: setHours(today, 12),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: setHours(today, 13),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: setHours(today, 14),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: setHours(today, 15),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: setHours(today, 16),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: setHours(today, 17),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: setHours(tomorrow, 8),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: getYear(today),
      month: getMonth(today) + 1,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: getDate(yesterday), available: false },
        { day: getDate(today), available: false },
        { day: getDate(tomorrow), available: true },
        { day: getDate(afterTomorrow), available: true },
      ]),
    );
  });
});
