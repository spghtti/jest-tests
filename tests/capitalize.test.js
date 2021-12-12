import capitalize from '../functions/capitalize';

test('HeLLo to be Hello', () => {
  expect(capitalize('HeLLo')).toBe('Hello');
});
