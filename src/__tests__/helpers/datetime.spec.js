import { toDate } from '../../helpers/datetime';

describe('Datetime helper', () => {
  it('toDate() format an string date', () => {
    return expect(toDate('2019-07-04T21:00:08.518Z')).toBe(
      '04/07/2019 18:00:08'
    );
  });
});
