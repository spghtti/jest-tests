import calculator from '../functions/calculator';

test('add 1 + 3 to be 4', () => {
  expect(calculator.add(1, 3)).toBe(4);
});

test('subtract 4 - 2 to be 2', () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test('multiply -3 * 3 to be 9', () => {
  expect(calculator.multiply(-3, 3)).toBe(-9);
});

test('divide 5 / 5 to be 1', () => {
  expect(calculator.divide(5, 5)).toBe(1);
});

test('Jackson + 5 is Jackson5', () => {
  expect(calculator.add('Jackson', 5)).toBe('Jackson5');
});
