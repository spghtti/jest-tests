import capitalize from '../functions/capitalize';

test('HeLLo to be Hello', () => {
  expect(capitalize('HeLLo')).toBe('Hello');
});

test('uppercase to be Uppercase', () => {
  expect(capitalize('uppercase')).toBe('Uppercase');
});

test('', () => {
  expect(capitalize('')).toBe('');
});

test('1 to be not a string', () => {
  expect(capitalize(1)).toBe('Not a string');
});
