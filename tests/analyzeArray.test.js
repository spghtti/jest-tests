import analyzeArray from '../functions/analyzeArray';

test('[2, 4, 6] to be', () => {
  const expectedResult = {
    average: 4,
    min: 2,
    max: 6,
    length: 3,
  };
  const array = [2, 4, 6];
  expect(analyzeArray(array)).toEqual(expectedResult);
});

test('[10, 11, 12, 13, 14] to be', () => {
  const expectedResult = {
    average: 12,
    min: 10,
    max: 14,
    length: 5,
  };
  const array = [10, 11, 12, 13, 14];
  expect(analyzeArray(array)).toEqual(expectedResult);
});
