const capitalize = (string) => {
  if (string === '') {
    return '';
  } else if (typeof string !== 'string') {
    return 'Not a string';
  } else {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
};

export default capitalize;
