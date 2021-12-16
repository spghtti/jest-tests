const reverseString = (string) => {
  if (typeof string !== 'string') {
    return 'Not a string';
  } else {
    let reversedString = '';
    for (let i = string.length; i > 0; i--) {
      reversedString += string[i - 1];
    }
    return reversedString;
  }
};
export default reverseString;
