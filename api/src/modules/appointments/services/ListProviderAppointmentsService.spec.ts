import { getDate, getMonth, getYear, startOfDay, setHours } from 'date-fns';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let fakeCacheProvider: FakeCacheProvider;
let listProviderAppointments: ListProviderAppointmentsService;

describe('ListProviderAppointments', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    listProviderAppointments = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
      fakeCacheProvider,
    );
  });

  it('Should be able to list the appointments on a specific day', async () => {
    const today = startOfDay(new Date());

    const appointment1 = await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: 'user',
      date: setHours(today, 14),
    });

    const appointment2 = await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: 'user',
      date: setHours(today, 15),
    });

    const appointments = await listProviderAppointments.execute({
      provider_id: 'provider',
      year: getYear(today),
      month: getMonth(today) + 1,
      day: getDate(today),
    });

    expect(appointments).toEqual([appointment1, appointment2]);
  });
});
