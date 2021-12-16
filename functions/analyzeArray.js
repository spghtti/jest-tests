const analyzeArray = (array) => {
  let arrayTotal = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      arrayTotal += array[i];
    }
  }
  const analysis = {
    average: arrayTotal / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
  return analysis;
};

export default analyzeArray;
