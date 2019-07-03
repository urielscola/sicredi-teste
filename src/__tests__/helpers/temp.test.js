const foo = () => 'bar';

describe('Basic test structure', () => {
  it('Should allow me to commit if test pass', () => {
    return expect(foo()).toBe('bar');
  });
});
