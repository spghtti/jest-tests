import reverseString from '../functions/reverseString';

test('Hello', () => {
  expect(reverseString('Hello')).toBe('olleH');
});

test('Road work ahead? to be ?daeha krow daoR', () => {
  expect(reverseString('Road work ahead?')).toBe('?daeha krow daoR');
});

test('', () => {
  expect(reverseString('')).toBe('');
});

test('311 must be string', () => {
  expect(reverseString(311)).toBe('Not a string');
});
