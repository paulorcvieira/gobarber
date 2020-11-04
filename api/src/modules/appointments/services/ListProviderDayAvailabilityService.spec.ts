import {
  getDate,
  getMonth,
  getYear,
  startOfDay,
  setHours,
  getTime,
} from 'date-fns';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderDayAvailabilityService from './ListProviderDayAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderDayAvailability: ListProviderDayAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderDayAvailability = new ListProviderDayAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the day availability from provider', async () => {
    const today = startOfDay(new Date());

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

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return getTime(setHours(today, 11));
    });

    const availability = await listProviderDayAvailability.execute({
      provider_id: 'user',
      year: getYear(today),
      month: getMonth(today) + 1,
      day: getDate(today),
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 13, available: true },
        { hour: 14, available: false },
        { hour: 15, available: false },
        { hour: 16, available: true },
        { hour: 17, available: true },
      ]),
    );
  });
});
