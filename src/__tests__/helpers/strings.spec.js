import { truncate } from '../../helpers/strings';

describe('Strings helper', () => {
  it('truncate() Should truncate strings bigger than 5 characters', () => {
    return expect(
      truncate('Lorem ipsum ipsum lorem ipsum lorem ipsum', 5)
    ).toBe('Lorem...');
  });

  it('truncate() Should not truncate strings lesser than 10 characters', () => {
    return expect(truncate('Lorem', 10)).toBe('Lorem');
  });
});
