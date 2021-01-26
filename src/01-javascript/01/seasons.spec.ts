import { getSeasonByDate, getSeasonByMonth } from './seasons';

describe('seasons', () => {
  test.each`
  date | season
  ${'2021-01-01'} | ${'winter'}
  ${'2021-03-01'} | ${'spring'}
  ${'2021-07-01'} | ${'summer'}
  ${'2021-09-01'} | ${'fall'}
  ${'2021-12-01'} | ${'winter'}
  `('$date falls in $season', ({ date, season }) => {
    expect(getSeasonByMonth(new Date(date))).toBe(season);
  });

  test.skip.each`
  date | season
  ${'2021-01-01'} | ${'winter'}
  ${'2021-03-01'} | ${'winter'}
  ${'2021-07-01'} | ${'summer'}
  ${'2021-09-01'} | ${'summer'}
  ${'2021-12-01'} | ${'fall'}
  `('$date falls in $season', ({ date, season }) => {
    expect(getSeasonByDate(new Date(date))).toBe(season);
  });
})
