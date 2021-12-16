import caesarize from '../functions/caesarize';

test('attack at dawn to be fyyfhp fy ifbs', () => {
  expect(caesarize('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});

test('Hello, World! to be Ifmmp, Xpsme!', () => {
  expect(caesarize('Hello, World!', 1)).toBe('Ifmmp, Xpsme!');
});

test('Get your ZZZs to be Qod iyeb JJJc', () => {
  expect(caesarize('Get your ZZZs', 10)).toBe('Qod iyeb JJJc');
});
